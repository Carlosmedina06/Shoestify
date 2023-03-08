import { Image, Stack, useColorModeValue } from '@chakra-ui/react'

import img from './banner.jpg'
const Banner = () => {
  const dark = useColorModeValue('brand.primario', 'brand.secundario')

  return (
    <Stack
      alignItems={'center'}
      bg={dark}
      direction={'row'}
      justifyContent={'space-around'}
      spacing={4}
    >
      <Image
        alt="banner"
        borderRadius={'md'}
        boxSize={{ base: '100%', md: '50%' }}
        objectFit="cover"
        src={img}
      />
    </Stack>
  )
}

export default Banner
