import type { Product } from './Product'

interface CartItem {
  product: Product
  quantity: number
}

export interface CartStore {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: number) => void
  clearCart: () => void
}
