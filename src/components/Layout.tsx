import { Outlet } from 'react-router'
import { Toaster } from 'react-hot-toast'
import Navbar from './Navbar'
import { useDismissToastsOnRouteChange } from '../hooks/useDismissToastsOnRouteChange'

const Layout = () => {
  useDismissToastsOnRouteChange()

  return (
    <div className='max-w-[1080px] min-h-screen lg:min-h-[600px] mx-auto bg-white lg:rounded-2xl my-0 lg:my-10'>
      <Navbar />
      <Outlet />
      <Toaster position='top-center' reverseOrder={false} />
    </div>
  )
}

export default Layout
