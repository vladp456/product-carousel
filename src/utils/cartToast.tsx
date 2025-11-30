import { toast } from 'react-hot-toast'
import { Link } from 'react-router'
import type { Product } from '../types/Product'

export const showCartToast = (
  product: Product,
  action: 'added' | 'removed'
) => {
  const message =
    action === 'added'
      ? `${product.title} has been added to the cart!`
      : `${product.title} has been removed from the cart!`

  toast(
    <div className='flex flex-col sm:flex-row items-start sm:items-center gap-2'>
      <p className='font-semibold text-sm'>{message}</p>

      <Link to='/cart' className='ml-0 sm:ml-2'>
        <button
          type='button'
          className='text-xs bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors cursor-pointer'
        >
          Open
        </button>
      </Link>
    </div>,
    {
      duration: 2000,
      style: {
        background: '#f9f9f9',
        color: '#111',
        padding: '12px 16px',
        borderRadius: '12px',
        fontWeight: '500',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }
    }
  )
}
