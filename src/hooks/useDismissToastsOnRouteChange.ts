import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { toast } from 'react-hot-toast'

export function useDismissToastsOnRouteChange() {
  const location = useLocation()

  useEffect(() => {
    toast.dismiss()
  }, [location.pathname])
}
