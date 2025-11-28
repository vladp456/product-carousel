import { Outlet } from 'react-router'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <div className='max-w-[1080px] min-h-[600px] mx-auto bg-white rounded-2xl mt-20'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Layout
