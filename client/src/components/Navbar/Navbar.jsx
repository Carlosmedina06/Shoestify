import { Box, IconButton, Stack, Text, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { NavLink } from 'react-router-dom'

import Cart from '../Cart/Cart'
import Account from '../Account/Account'

const Navbar = () => {
  const dark = useColorModeValue('brand.primario', 'brand.secundario')
  const light = useColorModeValue('brand.secundario', 'brand.primario')
  const { isOpen, onOpen, onClose } = useDisclosure()

  const ContentLink = ({ children, to }) => (
    <NavLink to={to}>
      <Text
        _hover={{
          bg: light,
          color: dark,
        }}
        bg={dark}
        color={light}
        px={4}
        rounded={'md'}
        transition={'all 0.2s ease-in-out'}
      >
        {children}
      </Text>
    </NavLink>
  )

  return (
    <>
      <Stack bg={dark} fontSize="xl" fontWeight="bold" px={2} py={4} spacing={7} width="100%">
        <Stack alignItems={'center'} direction={'row'} justifyContent={'space-between'} px={4}>
          <IconButton
            _hover={{
              bg: light,
              color: dark,
            }}
            aria-label={'Open Menu'}
            bg={dark}
            color={useColorModeValue('brand.secundario', 'brand.primario')}
            display={{ md: 'none' }}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            size={'md'}
            transition={'all 0.2s ease-in-out'}
            onClick={isOpen ? onClose : onOpen}
          />
          <Text
            color={light}
            fontSize={{ base: 'md', md: '2xl' }}
            fontWeight={'bold'}
            userSelect={'none'}
          >
            Shoestify 👟
          </Text>
          <Stack as={'nav'} direction={'row'} display={{ base: 'none', md: 'flex' }} spacing={4}>
            <ContentLink to={`/`}>Inicio</ContentLink>
            <ContentLink to={`/Products`}>Productos</ContentLink>
          </Stack>
          <Stack direction={'row'} spacing={4}>
            <Cart />
            <Account />
          </Stack>
        </Stack>
      </Stack>
      {isOpen ? (
        <Box bg={dark} display={{ md: 'none' }} pb={4}>
          <Stack align={'center'} as={'nav'} fontWeight="bold" spacing={4}>
            <ContentLink to={`/`}>Home</ContentLink>
            <ContentLink to={`/Products`}>Products</ContentLink>
          </Stack>
        </Box>
      ) : null}
    </>
  )
}

export default Navbar
