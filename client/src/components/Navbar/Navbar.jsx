import {
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const dark = useColorModeValue('brand.primario', 'brand.secundario')
  const light = useColorModeValue('brand.secundario', 'brand.primario')
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Stack bg={dark} fontSize="xl" fontWeight="bold" px={2} py={4} spacing={7} width="100%">
        <Stack alignItems={'center'} direction={'row'} justifyContent={'space-between'} px={4}>
          <IconButton
            aria-label={'Open Menu'}
            bg={dark}
            color={useColorModeValue('brand.secundario', 'brand.primario')}
            display={{ md: 'none' }}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            size={'md'}
            transition={'all 0.2s ease-in-out'}
            onClick={isOpen ? onClose : onOpen}
          />
          <Text color={light} fontSize={'2xl'} fontWeight={'bold'}>
            Shoestify
          </Text>
          <Stack as={'nav'} direction={'row'} display={{ base: 'none', md: 'flex' }}>
            <Text color={light}>hola</Text>
            <Text color={light}>hola</Text>
          </Stack>
          <Menu>
            <MenuButton as={Button} cursor={'pointer'} minW={0} rounded={'full'} variant={'link'}>
              <Avatar
                size={'sm'}
                src={
                  'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                }
              />
            </MenuButton>
            <MenuList bg={dark}>
              <MenuItem bg={dark}>
                <Text color={light}> Uno</Text>
              </MenuItem>
              <MenuItem bg={dark}>
                <Text color={light}> Dos</Text>
              </MenuItem>
              <MenuDivider color={light} />
              <MenuItem bg={dark}>
                <Text color={light}> Tres</Text>
              </MenuItem>
            </MenuList>
          </Menu>
        </Stack>
      </Stack>
      {isOpen ? (
        <Box bg={dark} display={{ md: 'none' }} pb={4}>
          <Stack align={'center'} as={'nav'} spacing={4}>
            <NavLink to={`/`}>
              <Text color={light}>Home</Text>
            </NavLink>
            <NavLink to={`/Products`}>
              <Text color={light}>Products</Text>
            </NavLink>
          </Stack>
        </Box>
      ) : null}
    </>
  )
}

export default Navbar
