import {
  Avatar,
  Box,
  Card,
  Flex,
  Heading,
  Image,
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

  const { data, loading } = useProductsUser(productIds)

  if (loading) return <p>Loading...</p>

  console.log(data)

  return (
    <Stack
      alignItems={{
        base: 'center',
        md: 'flex-start',
      }}
      border={'2px'}
      borderRadius={'lg'}
      direction={{
        base: 'column',
        md: 'row',
      }}
      m={{
        base: 0,
        md: '32',
      }}
      px={8}
      py={8}
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
      <Box w={'100%'}>
        <Heading
          as={'h3'}
          fontWeight={'medium'}
          letterSpacing={'2.5px'}
          pl={{
            base: 0,
            md: 6,
          }}
          py={4}
          size={'md'}
          textTransform={'uppercase'}
        >
          Tus compras
        </Heading>
        <Stack
          pl={{
            base: 0,
            md: 6,
          }}
          spacing={6}
          w={{
            base: '100%',
            md: '80%',
          }}
        >
          {data?.productsByArray?.map((product) => (
            <Card key={product.id} p={4}>
              <Stack alignItems={'center'} direction={'row'} spacing={6}>
                <Image height={16} objectFit={'cover'} rounded={4} src={product.image} width={16} />
                <Stack>
                  <Text fontWeight={600}>{product.name}</Text>
                  <Text color={'gray.500'} fontSize={'sm'}>
                    {product.brand}
                  </Text>
                </Stack>
              </Stack>
            </Card>
          ))}
        </Stack>
      </Box>
    </Stack>
  )
}

export default Profile
