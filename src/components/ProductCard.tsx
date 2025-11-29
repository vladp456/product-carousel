import type { Product } from '../types/Product'
import { Plus } from 'lucide-react'

interface Props {
  product: Product
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className='flex flex-col h-full p-5 border border-[#F3F3F3] rounded-2xl hover:shadow-md gap-2'>
      <img
        src={product.image}
        alt='product image'
        className='w-full aspect-4/3 object-contain'
      />
      <p className='font-semibold line-clamp-2 min-h-12'>{product.title}</p>
      <p className='text-sm line-clamp-4 min-h-20 grow'>
        {product.description}
      </p>

      <div className='flex justify-between items-center'>
        <div className='flex flex-col'>
          <span className='text-xs font-bold text-[#BDBDBD]'>Price:</span>
          <p className='text-sm font-bold'>
            {product.price.toLocaleString('uk-UA')} ₴
          </p>
        </div>

        <div className='border border-[#F2F2F2] p-2.5 w-10 h-10 flex align-center rounded-xl cursor-pointer'>
          <Plus size={20} className='text-[#9D9D9D]' />
        </div>
      </div>
    </div>
  )
}

export default ProductCard
