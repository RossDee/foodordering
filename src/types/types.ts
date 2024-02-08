export type Product = {
  id: number
  name: string
  image: string | null
  price: number
}
export type PizzaSize = 'S' | 'M' | 'L' | 'XL'

export type CartItem = {
  id: string
  product: Product
  product_id: number
  size: PizzaSize
  quantity: number
}

export const OrderStatusList: OrderStatus[] = [
  'Pending',
  'Confirmed',
  'Delivered',
  'Cancelled',
]

export type OrderStatus = 'Pending' | 'Confirmed' | 'Delivered' | 'Cancelled'
