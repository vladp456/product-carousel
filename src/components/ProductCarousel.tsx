import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { products } from '../data/products'
import ProductCard from './ProductCard'

import 'swiper/css'
import 'swiper/css/pagination'
import { useEffect, useRef, useState } from 'react'

const ProductCarousel = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024)
  const swiperRef = useRef<any>(null)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div
      onMouseEnter={() => swiperRef.current?.autoplay.stop()}
      onMouseLeave={() => swiperRef.current?.autoplay.start()}
    >
      <Swiper
        onSwiper={swiper => (swiperRef.current = swiper)}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: {
            slidesPerView: 3
          }
        }}
        speed={1200}
        autoplay={
          isDesktop
            ? {
                delay: 2500,
                disableOnInteraction: false
              }
            : false
        }
        spaceBetween={20}
        pagination={isDesktop ? { clickable: true } : false}
        loop={true}
        modules={[Autoplay, Pagination]}
        style={{ paddingBottom: '40px' }}
      >
        {products.map(product => (
          <SwiperSlide key={product.id} className='h-auto'>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ProductCarousel
