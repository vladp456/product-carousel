import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { CartStore } from '../types/Cart'

export const useCartStore = create<CartStore>()(
  persist(
    set => ({
      items: [],
      addItem: item =>
        set(state => {
          const existing = state.items.find(
            i => i.product.id === item.product.id
          )

          if (existing) {
            return {
              items: state.items.map(i =>
                i.product.id === item.product.id
                  ? { ...i, quantity: i.quantity + item.quantity }
                  : i
              )
            }
          }

          return { items: [...state.items, item] }
        }),
      removeItem: id =>
        set(state => {
          return {
            items: state.items
              .map(item =>
                item.product.id === id
                  ? { ...item, quantity: item.quantity - 1 }
                  : item
              )
              .filter(item => item.quantity > 0)
          }
        }),
      clearCart: () =>
        set(() => {
          return { items: [] }
        })
    }),
    { name: 'cart' }
  )
)
