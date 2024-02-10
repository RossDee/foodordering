import { PropsWithChildren, createContext, useContext, useState } from 'react'
import { randomUUID } from 'expo-crypto'
import { CartItem, Product } from '../types/types'

/**
 * Represents the type of the cart.
 */
type CartType = {
  items: CartItem[] // The array of cart items.
  onAddItem: (product: Product, size: CartItem['size']) => void
} // The function to add an item to the cart.}

const CartContext = createContext<CartType>({
  items: [],
  onAddItem: () => {},
})

/**
 * Provides the cart context and functionality.
 * @param children - The child components.
 */
export const CartProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<CartItem[]>([]) // The array of cart items.
  const onAddItem = (product: Product, size: CartItem['size']) => {
    const newCartItem: CartItem = {
      id: randomUUID(),
      product,
      product_id: product.id,
      size,
      quantity: 1,
    }
    setItems([...items, newCartItem])
  }

  return (
    <CartContext.Provider value={{ items, onAddItem }}>
      {children}
    </CartContext.Provider>
  )
}

/**
 * Hook to access the cart context.
 * @returns The cart context.
 */

export const useCart = () => useContext(CartContext)