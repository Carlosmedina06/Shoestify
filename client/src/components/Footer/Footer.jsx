import {
  Box,
  Container,
  Divider,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

const Footer = () => {
  const light = useColorModeValue('brand.secundario', 'brand.primario')

  return (
    <>
      <Divider borderColor={light} borderWidth={'initial'} mb={4} w={'100wh'} />
      <Container as={Stack} maxW={'6xl'} pb={10}>
        <SimpleGrid
          color={'brand.terciario'}
          spacing={8}
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
        >
          <Stack spacing={6}>
            <Box>
              <Text color={light} fontSize="3xl" fontWeight="black">
                Shoestify 👟
              </Text>
            </Box>
            <Text fontSize={'sm'}>© 2023 Shoestify. Todos los derechos reservados.</Text>
          </Stack>

          <Stack
            _hover={{
              color: light,
            }}
            align={'flex-start'}
          >
            <Text color={light} fontSize={'lg'} fontWeight={'500'} mb={2}>
              Compañia
            </Text>
            <Link href={'#'}>Sobre Nosotros</Link>
            <Link href={'#'}>Nuestro Equipo</Link>
            <Link href={'#'}>Contacto</Link>
            <Link href={'#'}>Marcas</Link>
          </Stack>
          <Stack
            _hover={{
              color: light,
            }}
            align={'flex-start'}
          >
            <Text color={light} fontSize={'lg'} fontWeight={'500'} mb={2}>
              Soporte
            </Text>
            <Link href={'#'}>Terminos y Condiciones</Link>
            <Link href={'#'}>Legal</Link>
            <Link href={'#'}>Politica de Privacidad</Link>
            <Link href={'#'}>Estado</Link>
          </Stack>
          <Stack
            _hover={{
              color: light,
            }}
            align={'flex-start'}
          >
            <Text color={light} fontSize={'lg'} fontWeight={'500'} mb={2}>
              Siguenos
            </Text>
            <Link href={'#'}>Facebook</Link>
            <Link href={'#'}>Twitter</Link>
            <Link href={'#'}>Instagram</Link>
            <Link href={'#'}>LinkedIn</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </>
  )
}

export default Footer
