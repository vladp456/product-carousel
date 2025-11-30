import { useMemo } from 'react'
import { Link } from 'react-router'
import { ChevronRight, Minus, Plus } from 'lucide-react'
import { useCartStore } from '../store/cartStore'
import {
  calculateItemPrice,
  calculateCartTotal
} from '../utils/priceCalculations'

const Cart = () => {
  const { items, removeItem, addItem, clearCart } = useCartStore()

  const total = useMemo(() => calculateCartTotal(items), [items])

  if (items.length === 0) {
    return (
      <div className='px-3 py-5 lg:py-10 max-w-md mx-auto flex flex-col items-center justify-center'>
        <h1 className='text-2xl font-bold mb-4'>Your Cart is Empty</h1>

        <Link to='/' className='w-full'>
          <button
            type='button'
            aria-label='Go Back'
            className='flex items-center justify-center w-full h-8 rounded-md bg-black text-white border border-gray-700 hover:bg-gray-800 cursor-pointer'
          >
            Go Back
          </button>
        </Link>
      </div>
    )
  }

  return (
    <div className='p-3 lg:py-5 lg:px-10'>
      <nav className='flex items-center text-sm mb-4'>
        <Link to='/' className='hover:underline text-gray-600 font-light'>
          Home
        </Link>
        <ChevronRight size={14} className='mx-1 text-gray-500' />
        <span className='text-gray-800 font-medium'>Cart</span>
      </nav>

      <h1 className='text-2xl font-bold mb-4 lg:mb-8 text-center'>Checkout</h1>

      <div className='max-w-md mx-auto mb-8 p-6 border border-[#F3F3F3] rounded-2xl hover:shadow-md'>
        <p className='text-xl font-bold mb-6'>Order Summary</p>

        <ul className='space-y-3'>
          {items.map(item => {
            const { hasDiscount, totalPrice, originalTotal } =
              calculateItemPrice(item.product.price, item.quantity)

            return (
              <li
                key={item.product.id}
                className='flex flex-col gap-2 border-b pb-2'
              >
                <div className='flex justify-between gap-2'>
                  <p className='line-clamp-2'>{item.product.title}</p>

                  {hasDiscount ? (
                    <div className='flex flex-col items-center gap-1'>
                      <p className='font-bold whitespace-nowrap'>
                        {totalPrice.toLocaleString('uk-UA', {
                          maximumFractionDigits: 0
                        })}{' '}
                        ₴
                      </p>

                      <div className='flex items-center gap-1'>
                        <p className='text-sm line-through whitespace-nowrap'>
                          {originalTotal.toLocaleString('uk-UA', {
                            maximumFractionDigits: 0
                          })}{' '}
                          ₴
                        </p>

                        <p className='text-xs text-white border border-orange-400 bg-orange-400 rounded-md px-1'>
                          -10%
                        </p>
                      </div>
                    </div>
                  ) : (
                    <p className='font-bold whitespace-nowrap'>
                      {totalPrice.toLocaleString('uk-UA', {
                        maximumFractionDigits: 0
                      })}{' '}
                      ₴
                    </p>
                  )}
                </div>

                <div className='flex items-center gap-2 mt-1'>
                  <button
                    type='button'
                    aria-label='Decrease quantity'
                    className='flex items-center justify-center w-8 h-8 rounded-md bg-white text-black border border-gray-300 hover:bg-gray-100 cursor-pointer'
                    onClick={() => removeItem(item.product.id)}
                  >
                    <Minus size={18} />
                  </button>

                  <span className='font-semibold'>{item.quantity}</span>

                  <button
                    type='button'
                    aria-label='Increase quantity'
                    className='flex items-center justify-center w-8 h-8 rounded-md bg-black text-white border border-gray-700 hover:bg-gray-800 cursor-pointer'
                    onClick={() =>
                      addItem({ product: item.product, quantity: 1 })
                    }
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </li>
            )
          })}
        </ul>

        <div className='mt-4 pt-2 text-lg font-bold'>
          Total:{' '}
          {total.toLocaleString('uk-UA', {
            maximumFractionDigits: 0
          })}{' '}
          ₴
        </div>
      </div>

      <div className='max-w-md mx-auto'>
        <button
          type='button'
          aria-label='Proceed to Payment'
          className='flex items-center justify-center w-full px-4 py-2 rounded-md bg-black text-white border border-gray-700 hover:bg-gray-800 cursor-pointer'
        >
          Proceed to Payment
        </button>

        <button
          type='button'
          aria-label='Clear Cart'
          onClick={() => clearCart()}
          className='w-full mt-1 flex items-center justify-center px-4 py-2 rounded-md bg-black text-white border border-gray-700 hover:bg-gray-800 cursor-pointer'
        >
          Clear Cart
        </button>
      </div>
    </div>
  )
}

export default Cart
