import {
  Avatar,
  Box,
  Card,
  Center,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

import useAuthStore from '../../store/authStore'
import useProductsUser from '../../utils/hooks/useProductsUser'

const Profile = () => {
  const dark = useColorModeValue('brand.primario', 'brand.secundario')
  const light = useColorModeValue('brand.secundario', 'brand.primario')
  const user = useAuthStore((state) => state.user)
  const productIds = user?.allyourPurchase?.map((product) => product)

  console.log(user)

  const { data, loading, error } = useProductsUser(productIds)

  console.log(data)
  if (loading) return <p>Loading...</p>

  return (
    <Stack
      alignItems={{
        base: 'center',
        md: 'flex-start',
      }}
      direction={{
        base: 'column',
        md: 'row',
      }}
      px={4}
    >
      <Flex
        alignItems={'center'}
        bg={light}
        color={dark}
        flexDirection={'column'}
        p={6}
        rounded={'md'}
      >
        <Avatar
          alt={user?.name}
          border={'2px'}
          borderColor={dark}
          mb={2}
          size={'2xl'}
          src={user?.image}
        />

        <Heading as={'h2'} size={'lg'} textTransform={'Capitalize'}>
          {user?.name}
        </Heading>
        <Text>{user?.email}</Text>
      </Flex>
      <Box border={'1px'} w={'100%'}>
        <Heading as={'h3'} size={'md'}>
          Tus compras
        </Heading>
        <Stack>
          {data?.productsByArray?.map((product) => (
            <Card key={product.id}>
              <Image src={product.image} />
              <Text>{product.name}</Text>
              <Text>{product.price}</Text>
            </Card>
          ))}
        </Stack>
      </Box>
    </Stack>
  )
}

export default Profile
