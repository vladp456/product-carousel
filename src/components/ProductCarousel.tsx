import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { products } from '../data/products'
import ProductCard from './ProductCard'

import 'swiper/css'
import 'swiper/css/pagination'

const ProductCarousel = () => {
  return (
    <div>
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        speed={1200}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        spaceBetween={20}
        pagination={{
          clickable: true
        }}
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
