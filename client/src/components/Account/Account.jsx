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
const Account = () => {
  const dark = useColorModeValue('brand.primario', 'brand.secundario')
  const light = useColorModeValue('brand.secundario', 'brand.primario')
  const MenuLink = ({ children, to }) => (
    <MenuItem
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
      <NavLink to={to}>
        <Text>{children}</Text>
      </NavLink>
    </MenuItem>
  )

  return (
    <Menu>
      <MenuButton as={Button} cursor={'pointer'} minW={0} rounded={'full'} variant={'link'}>
        <Avatar
          size={'sm'}
          src={
            'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
          }
        />
      </MenuButton>
      <MenuList bg={dark} px={4}>
        <MenuLink to={`/Profile`}>Profile</MenuLink>
        <MenuLink to={`/Settings`}>Settings</MenuLink>
        <MenuDivider />
        <MenuLink to={`/Logout`}>Logout</MenuLink>
      </MenuList>
    </Menu>
  )
}

export default Account
