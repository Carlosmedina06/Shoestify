import { useEffect } from 'react'
import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import useAuthStore from '../../store/authStore'

const Account = () => {
  const dark = useColorModeValue('brand.primario', 'brand.secundario')
  const light = useColorModeValue('brand.secundario', 'brand.primario')
  const navigate = useNavigate()
  const { checkAuth, logoutToken } = useAuthStore()
  const { user } = useAuthStore((state) => state)

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  const handleLogout = () => {
    logoutToken()
    navigate('/')
  }

  const MenuLink = ({ children, to }) => (
    <MenuItem
      _hover={{
        bg: light,
        color: dark,
      }}
      bg={dark}
      color={light}
      fontSize={'md'}
      px={4}
      rounded={'md'}
      transition={'all 0.2s ease-in-out'}
    >
      <NavLink to={to}>
        <Text>{children}</Text>
      </NavLink>
    </MenuItem>
  )

  return (
    <Menu>
      <MenuButton as={Button} cursor={'pointer'} minW={0} rounded={'full'} variant={'link'}>
        <Avatar size={'sm'} src={user?.avatar} />
      </MenuButton>
      <MenuList bg={dark} px={4} zIndex={2}>
        <MenuLink to={`/Profile`}>Perfil</MenuLink>
        <MenuLink to={`/Settings`}>Configuraciones</MenuLink>
        <MenuDivider />
        <Button
          _hover={{
            bg: light,
            color: dark,
          }}
          bg={dark}
          color={light}
          fontSize={'md'}
          fontWeight={'normal'}
          justifyContent={'flex-start'}
          rounded={'md'}
          transition={'all 0.2s ease-in-out'}
          w={'full'}
          onClick={handleLogout}
        >
          Cerrar Sesion
        </Button>
      </MenuList>
    </Menu>
  )
}

export default Account
