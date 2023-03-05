import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

import Navbar from '../components/Navbar/Navbar'

export const Layout = () => {
  return (
    <Box bg="brand.primario" h="100vh" w="100">
      <main>
        <Navbar />
        <Outlet />
      </main>
    </Box>
  )
}
