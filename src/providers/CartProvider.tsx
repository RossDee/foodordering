import { PropsWithChildren, createContext, useContext, useState } from 'react'
import { randomUUID } from 'expo-crypto'
import { CartItem, Product } from '../types/types'

/**
 * Represents the type of the cart.
 */
type CartType = {
  items: CartItem[] // The array of cart items.
  onAddItem: (product: Product, size: CartItem['size']) => void
  onUodateQuantity: (id: string, quantity: 1 | -1) => void
} // The function to add an item to the cart.}

const CartContext = createContext<CartType>({
  items: [],
  onAddItem: () => {},
  onUodateQuantity: () => {},
})

/**
 * Provides the cart context and functionality.
 * @param children - The child components.
 */
export const CartProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<CartItem[]>([]) // The array of cart items.
  const onAddItem = (product: Product, size: CartItem['size']) => {
    const exsitingItem = items.find(
      (item) => item.product_id === product.id && item.size === size
    )
    //accumulating the quantity
    if (exsitingItem) {
      onUodateQuantity(exsitingItem.id, 1)
      return
    }
    const newCartItem: CartItem = {
      id: randomUUID(),
      product,
      product_id: product.id,
      size,
      quantity: 1,
    }
    setItems((exsitingItem) => [...exsitingItem, newCartItem])
  }

  // The function to add an item to the cart.
  const onUodateQuantity = (id: string, quantity: 1 | -1) => {
    setItems((exsitingItem) =>
      exsitingItem
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  return (
    <CartContext.Provider value={{ items, onAddItem, onUodateQuantity }}>
      {children}
    </CartContext.Provider>
  )
}

/**
 * Hook to access the cart context.
 * @returns The cart context.
 */

export const useCart = () => useContext(CartContext)
