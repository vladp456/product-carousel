import { DISCOUNT_THRESHOLD, DISCOUNT_MULTIPLIER } from '../constants/cart'
import type { CartItem } from '../types/Cart'

export const calculateItemPrice = (price: number, quantity: number) => {
  const hasDiscount = quantity >= DISCOUNT_THRESHOLD
  const finalPrice = hasDiscount ? price * DISCOUNT_MULTIPLIER : price
  return {
    hasDiscount,
    totalPrice: finalPrice * quantity,
    originalTotal: price * quantity
  }
}

export const calculateCartTotal = (items: CartItem[]) => {
  return items.reduce((acc, item) => {
    const { totalPrice } = calculateItemPrice(item.product.price, item.quantity)
    return acc + totalPrice
  }, 0)
}
