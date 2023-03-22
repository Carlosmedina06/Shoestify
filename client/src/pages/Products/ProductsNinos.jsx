import { Heading, SimpleGrid, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import { useQuery } from '@apollo/client'

import ProductSimple from '../../components/CardProduct/CardProduct'
import Filter from '../../components/Filter/Filter'
import { GET_PRODUCTS } from '../../graphql/products'

function ProductsNinos() {
  const light = useColorModeValue('brand.secundario', 'brand.primario')

  const { loading, error, data } = useQuery(GET_PRODUCTS)
  const productsKids = data?.products.filter((producto) => {
    return producto.category === 'Niños'
  })

  if (loading) return <p>Loading...</p>
  if (error)
    return (
      <p>
        Error :(
        {error.message})
      </p>
    )

  return (
    <Stack>
      <Stack
        alignItems="center"
        color={light}
        direction={'row'}
        justifyContent={'space-between'}
        px={10}
        spacing={2}
      >
        <Stack alignItems="baseline" direction={{ base: 'column', md: 'row' }}>
          <Heading
            as="i"
            fontSize={{ base: '2xl', md: '4xl' }}
            fontWeight={'normal'}
            letterSpacing={2}
            textTransform={'uppercase'}
          >
            Zapatillas de Niños
          </Heading>
          <Text fontSize={'xs'}>[{productsKids?.length}]</Text>
        </Stack>
        <Filter />
      </Stack>
      <SimpleGrid
        px={2}
        spacing={8}
        templateColumns={{
          sm: '1fr',
          md: '1fr 1fr',
          lg: '1fr 1fr 1fr',
          xl: '1fr 1fr 1fr 1fr',
        }}
      >
        {productsKids?.map((product) => (
          <ProductSimple
            key={product.id}
            brand={product.brand}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </SimpleGrid>
    </Stack>
  )
}

export default ProductsNinos
