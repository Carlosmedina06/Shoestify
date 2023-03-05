import { border, Box, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
    <Box alignItems={'center'} border={'1px'} borderColor="brand.secundario" h={12} my={1.5}>
      <Stack direction={'row'} justify={'space-between'}>
        <Text color="brand.secundario">Navbar</Text>
        <Text color="brand.secundario">Navbar</Text>
        <Text color="brand.secundario">Navbar</Text>
      </Stack>
    </Box>
  )
}

export default Navbar
