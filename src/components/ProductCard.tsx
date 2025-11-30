import { useCartStore } from '../store/cartStore'
import type { Product } from '../types/Product'
import { Minus, Plus } from 'lucide-react'
import { showCartToast } from '../utils/cartToast'

interface Props {
  product: Product
}

const ProductCard = ({ product }: Props) => {
  const { items, addItem, removeItem } = useCartStore()
  const cartItem = items.find(item => item.product.id === product.id)
  const quantity = cartItem ? cartItem.quantity : 0
  const onRemoveItem = (product: Product) => {
    removeItem(product.id)
    showCartToast(product, 'removed')
  }
  const onAddItem = () => {
    addItem({ product, quantity: 1 })
    showCartToast(product, 'added')
  }

  return (
    <div className='flex flex-col h-full p-5 border border-[#F3F3F3] rounded-2xl hover:shadow-md gap-1'>
      <img
        src={product.image}
        alt='product image'
        className='w-full aspect-4/3 object-contain'
      />
      <p className='text-lg font-semibold line-clamp-2 min-h-14'>
        {product.title}
      </p>
      <p className='line-clamp-4 min-h-20 grow'>{product.description}</p>

      <div className='flex justify-between items-center mt-5'>
        <div className='flex flex-col'>
          <span className='text-sm font-bold text-[#BDBDBD]'>Price:</span>
          <p className='font-bold whitespace-nowrap'>
            {product.price.toLocaleString('uk-UA', {
              maximumFractionDigits: 0
            })}{' '}
            ₴
          </p>
          <p className='font-bold whitespace-nowrap text-green-600'>
            {(product.price * 0.9).toLocaleString('uk-UA', {
              maximumFractionDigits: 0
            })}{' '}
            ₴
          </p>
        </div>

        <div className='flex flex-col items-center gap-2'>
          <div className='flex items-center gap-2'>
            <button
              type='button'
              className='flex items-center justify-center w-8 h-8 rounded-md bg-white text-black border border-gray-300 hover:bg-gray-100 cursor-pointer'
              onClick={() => onRemoveItem(product)}
            >
              <Minus size={18} />
            </button>

            <span className='text-sm font-semibold'>{quantity}</span>

            <button
              type='button'
              className='flex items-center justify-center w-8 h-8 rounded-md bg-black text-white border border-gray-700 hover:bg-gray-800 cursor-pointer'
              onClick={onAddItem}
            >
              <Plus size={18} />
            </button>
          </div>

          <p className='text-xs text-white border border-green-600 bg-green-600 rounded-md px-1'>
            10% off from 5+ items
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
