import { Link } from 'react-router'
import { ShoppingCart } from 'lucide-react'
import { useCartStore } from '../store/cartStore'

const Navbar = () => {
  const { items } = useCartStore()
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <nav className='flex justify-between items-center p-3 lg:p-10 border-b border-[#EAEAEA]'>
      <Link to='/' className='flex items-center gap-2 lg:gap-4'>
        <img src='/product-carousel/logo.png' alt='logo' className='w-10 h-10' />

        <div>
          <p className='font-bold text-xl'>iStore</p>
          <p className='hidden lg:block text-sm text-[#9D9D9D]'>
            Shop the latest and most exclusive iPhones online
          </p>
        </div>
      </Link>

      <Link to='/cart' className='flex items-center gap-1 relative'>
        <ShoppingCart size={25} className='text-[#5C5C5C]' />
        {cartCount > 0 && (
          <span className='absolute bottom-3.5 left-4 flex min-h-5 min-w-5 px-1 items-center justify-center rounded-full bg-red-500 text-[10px] text-white'>
            {cartCount}
          </span>
        )}
      </Link>
    </nav>
  )
}

export default Navbar
