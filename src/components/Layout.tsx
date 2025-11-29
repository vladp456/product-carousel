import { Outlet } from 'react-router'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <div className='max-w-[1080px] min-h-screen lg:min-h-[600px] mx-auto bg-white lg:rounded-2xl my-0 lg:my-10'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Layout
