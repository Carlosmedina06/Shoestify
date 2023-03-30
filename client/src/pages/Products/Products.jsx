import { Heading, SimpleGrid, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

import ProductSimple from '../../components/CardProduct/CardProduct'
import Filter from '../../components/Filter/Filter'
import useProducts from '../../utils/hooks/useProducts'
import useProductStore from '../../store/productStore'

function Products() {
  const light = useColorModeValue('brand.secundario', 'brand.primario')

  const { data } = useProducts()
  const { setProducts, filterByCategory, setAllProducts } = useProductStore()
  const { category } = useParams()

  const productos = useProductStore((state) => state.products)

  useEffect(() => {
    if (data) {
      setProducts(data.products)
      setAllProducts(data.products)
    }

    if (category) {
      filterByCategory(category)
    }
  }, [data, setProducts, category, filterByCategory, setAllProducts])

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
          <Text fontSize={'xs'}>[{productos.length}]</Text>
        </Stack>
        <Filter category={category} productos={productos} />
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
        {productos.map((product) => (
          <ProductSimple
            key={product.id}
            brand={product.brand}
            id={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            stock={product.countInStock}
          />
        ))}
      </SimpleGrid>
    </Stack>
  )
}

export default Products
