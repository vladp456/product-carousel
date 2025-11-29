import { Link } from 'react-router'
import { ShoppingCart } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center p-3 lg:p-10 border-b border-[#EAEAEA]'>
      <Link to='/' className='flex items-center gap-2 lg:gap-4'>
        <img src='/logo.png' alt='logo' className='w-10 h-10' />

        <div>
          <p className='font-bold text-xl'>iStore</p>
          <p className='hidden lg:block text-sm text-[#9D9D9D]'>
            Shop the latest and most exclusive iPhones online
          </p>
        </div>
      </Link>

      <div className='flex items-center gap-8'>
        <Link to='/cart' className='flex items-center gap-1'>
          <ShoppingCart size={20} className='text-[#5C5C5C]' />
          <p className='text-sm font-semibold text-[#5C5C5C]'>Cart</p>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
