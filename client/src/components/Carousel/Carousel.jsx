import { Image, Stack } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import useProductStore from '../../store/productStore'

const Carousel = () => {
  const productos = useProductStore((state) => state.products)
  const images = productos.map((product) => product.image)
  const shuffledImages = images.sort(() => Math.random() - 0.5)

  return (
    <Stack alignItems={'center'} my={4} py={20}>
      <Stack direction={'row'} h={400} justifyContent={'center'} px={4} w={'100%'}>
        <Swiper slidesPerView={3} spaceBetween={20}>
          {shuffledImages.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                alt="image"
                borderRadius={10}
                boxShadow={'2xl'}
                h={'100%'}
                objectFit={'cover'}
                src={image}
                w={'100%'}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Stack>
    </Stack>
  )
}

export default Carousel
