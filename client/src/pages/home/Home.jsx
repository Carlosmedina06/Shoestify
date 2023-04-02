import { Center, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useMutation } from '@apollo/client'

import Banner from '../../components/Banner/Banner'
import Carousel from '../../components/Carousel/Carousel'
import useProductStore from '../../store/productStore'
import { PRODUCT_PURCHASE } from '../../graphql/user'
import useAuthStore from '../../store/authStore'

const Home = () => {
  const dark = useColorModeValue('brand.primario', 'brand.secundario')
  const light = useColorModeValue('brand.secundario', 'brand.primario')
  const cart = useProductStore((state) => state.cart)
  const deleteAllCart = useProductStore((state) => state.deleteAllCart)
  const { isAuthenticated } = useAuthStore((state) => state)

  const url = useLocation()
  const [productPurchase] = useMutation(PRODUCT_PURCHASE, {
    context: {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    },
  })

  useEffect(() => {
    try {
      if (url.search.includes('status=approved')) {
        const productIds = cart.map((item) => item.id)

        if (productIds.length === 0) return
        productPurchase({
          variables: {
            input: {
              productIds,
            },
          },
        }).then(() => {
          deleteAllCart()
        })
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log({ error: error.response.data })
    }
  }, [url.search, cart, productPurchase, deleteAllCart])

  return (
    <>
      <Center my={20} px={{ base: '4', md: '60' }} py={20}>
        <Stack
          alignItems={'center'}
          color={light}
          direction={{ base: 'column', md: 'row' }}
          ml={{ base: 0, md: 7 }}
        >
          <Stack
            alignItems={{ base: 'flex-start', md: 'center' }}
            order={{ base: 2, md: 1 }}
            spacing={'4'}
            w={{ base: '100%', md: '50%' }}
          >
            <Text fontSize="4xl" fontWeight={'bold'}>
              Camina con pasión y estilo. Descubre nuestra tienda en línea de zapatos
            </Text>
            <Text fontSize="xl">
              Encuentra el estilo perfecto con zapatos duraderos y cómodos. Explora nuestra
              colección ahora y eleva tu moda.
            </Text>
            <Stack w={'100%'}>
              <NavLink to={isAuthenticated ? '/Products' : '/login'}>
                <Stack
                  _active={{
                    transform: 'scale(0.95)',
                  }}
                  _hover={{
                    bg: dark,
                    color: light,
                    border: '1px',
                    borderColor: light,
                  }}
                  alignItems={'center'}
                  bg={light}
                  color={dark}
                  cursor={'pointer'}
                  justifyItems={'center'}
                  px={4}
                  py={1}
                  rounded={'md'}
                  transition={'all 0.2s ease-in-out'}
                  w={{ base: '100%', md: '50%' }}
                >
                  <Text fontSize="md" fontWeight={'bold'}>
                    Comprar ahora
                  </Text>
                </Stack>
              </NavLink>
            </Stack>
          </Stack>
          <Stack
            alignItems={'center'}
            order={{ base: 1, md: 2 }}
            overflow={'hidden'}
            rounded={'md'}
            w={{ base: '100%', md: '50%' }}
          >
            <Image
              alt="Segun Adebayo"
              boxSize="400px"
              justifySelf={'center'}
              objectFit="cover"
              rounded={'xl'}
              src="https://images.unsplash.com/photo-1518002171953-a080ee817e1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            />
          </Stack>
        </Stack>
      </Center>
      <Banner />
      <Center my={4}>
        <Stack
          alignItems={'center'}
          color={light}
          direction={'column'}
          justifyItems={'center'}
          spacing={4}
          textAlign={'center'}
          w={{ base: '100%', md: '50%' }}
        >
          <Text fontSize="3xl" fontWeight={'bold'} px={{ base: '4', md: '30' }}>
            Nuestras marcas
          </Text>
          <Text fontSize="xl" px={{ base: '4', md: '30' }}>
            Encuentra el estilo perfecto con zapatos duraderos y cómodos. Explora nuestra colección
            ahora y eleva tu moda.
          </Text>
        </Stack>
      </Center>
      <Carousel />
    </>
  )
}

export default Home
