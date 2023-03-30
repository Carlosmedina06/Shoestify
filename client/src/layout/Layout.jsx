import { Container } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

export const Layout = () => {
  return (
    <Container
      display="flex"
      flexDirection="column"
      gap={16}
      h="100%"
      justifyContent="space-between"
      maxWidth="container"
      paddingX={0}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </Container>
  )
}
