import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/icons'
import { IoCartOutline } from 'react-icons/io5'

import useProductStore from '../../store/productStore'

export default function ProductSimple({ image, name, brand, price, id, stock }) {
  const light = useColorModeValue('brand.secundario', 'brand.primario')
  const dark = useColorModeValue('brand.primario', 'brand.secundario')

  const { addCart } = useProductStore()

  const handleAddCart = () => {
    addCart({ id, image, name, brand, price, stock })
  }

  return (
    <Center py={12}>
      <Box
        bg={'whiteAlpha.800'}
        boxShadow={'2xl'}
        h={'full'}
        maxW={'300px'}
        minW={'300px'}
        p={6}
        pos={'relative'}
        role={'group'}
        rounded={'md'}
        w={'full'}
        zIndex={1}
      >
        <Box
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${image})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(50px)',
            },
          }}
          height={'230px'}
          mt={-12}
          pos={'relative'}
          rounded={'lg'}
        >
          <Image height={230} objectFit={'cover'} rounded={'md'} src={image} width={282} />
        </Box>
        <Stack align={'center'} color={dark} pt={10}>
          <Text fontSize={'sm'} letterSpacing={2} textTransform={'uppercase'}>
            {brand}
          </Text>
          <Heading fontSize={'md'} fontWeight={500} px={2} py={2} textTransform={'capitalize'}>
            {name}
          </Heading>
          <Stack
            alignItems={'center'}
            direction={'row'}
            justifyContent={'space-between'}
            w={'100%'}
          >
            <Text fontSize={'md'} fontWeight={800}>
              Precio: ${price}
            </Text>
            <Button
              _active={{
                transform: 'scale(0.95)',
              }}
              _hover={{
                bg: light,
                color: dark,
                border: '1px',
                borderColor: dark,
              }}
              bg={dark}
              border="1px"
              borderColor={dark}
              color={light}
              onClick={handleAddCart}
            >
              <Icon as={IoCartOutline} boxSize={5} />
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Center>
  )
}
