import { Container, useColorModeValue } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

import Navbar from '../components/Navbar/Navbar'

export const Layout = () => {
  const dark = useColorModeValue('brand.primario', 'brand.secundario')

  return (
    <Container alignSelf="center" bg={dark} height="100%" maxWidth="container" paddingX={0}>
      <Navbar />
      <Outlet />
    </Container>
  )
}
