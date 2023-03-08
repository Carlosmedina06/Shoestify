import { Image, Stack } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const Carousel = () => {
  const images = [
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=796&q=80',
    'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
    'https://images.unsplash.com/photo-1615028456268-02eb9815a776?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=975&q=80',
  ]

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
