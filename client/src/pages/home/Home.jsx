import React from 'react'
import { Button, Center, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
export const Home = () => {
  const dark = useColorModeValue('brand.primario', 'brand.secundario')
  const light = useColorModeValue('brand.secundario', 'brand.primario')

  return (
    <Center px={{ base: '4', md: '60' }} py={20}>
      <Stack alignItems={'center'} color={light} direction={{ base: 'column', md: 'row' }}>
        <Stack
          alignItems={{ base: 'flex-start', md: 'center' }}
          order={{ base: 2, md: 1 }}
          spacing={'4'}
          w={{ base: '100%', md: '50%' }}
        >
          <Text fontSize="3xl" fontWeight={'bold'} px={{ base: '4', md: '30' }}>
            Camina con pasión y estilo Descubre nuestra tienda en línea de zapatos
          </Text>
          <Text fontSize="md" px={{ base: '4', md: '30' }}>
            Encuentra el estilo perfecto con zapatos duraderos y cómodos. Explora nuestra colección
            ahora y eleva tu moda.
          </Text>
          <Stack w={'100%'}>
            <NavLink to={'/products'}>
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
                ml={{ base: 0, md: 7 }}
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
            boxSize="300px"
            justifySelf={'center'}
            objectFit="cover"
            src="https://images.unsplash.com/photo-1518002171953-a080ee817e1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          />
        </Stack>
      </Stack>
    </Center>
  )
}
