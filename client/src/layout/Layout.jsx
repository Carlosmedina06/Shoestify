import { Container, useColorModeValue } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

export const Layout = () => {
  const dark = useColorModeValue('brand.primario', 'brand.secundario')

  return (
    <Container alignSelf="center" bg={dark} height="100%" maxWidth="container" paddingX={0}>
      <Navbar />
      <Outlet />
      <Footer />
    </Container>
  )
}
