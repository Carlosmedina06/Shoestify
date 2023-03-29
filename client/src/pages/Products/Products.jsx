import { Heading, SimpleGrid, Stack, Text, useColorModeValue } from '@chakra-ui/react'

import ProductSimple from '../../components/CardProduct/CardProduct'
import Filter from '../../components/Filter/Filter'
import { useProducts } from '../../utils/hooks/useProducts'

function Products() {
  const light = useColorModeValue('brand.secundario', 'brand.primario')
  // const { category } = useParams()

  // const { loading, error, data } = useQuery(GET_PRODUCTS)
  // const { products } = data || {}

  // const filterProducts = products?.filter((product) => {
  //   if (category) {
  //     return product.category === category
  //   }

  //   return product
  // })

  const { filterProducts } = useProducts()

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
            Zapatillas
          </Heading>
          <Text fontSize={'xs'}>[{filterProducts?.length}]</Text>
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
        {filterProducts?.map((product) => (
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

export default Products
