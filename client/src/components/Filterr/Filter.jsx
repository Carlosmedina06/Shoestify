import { FormControl, FormLabel, Select, Stack } from '@chakra-ui/react'
import React from 'react'

function Filter() {
  return (
    <Stack>
      <FormControl>
        <Stack direction={{ base: 'column', md: 'row' }}>
          <FormLabel>Filtrar por Marca</FormLabel>
          <Select placeholder="Selecciona tu marca favorita" w={'50%'}>
            <option>Nike</option>
            <option>Adidas</option>
            <option>Puma</option>
            <option>Reebok</option>
            <option>Under Armour</option>
            <option>New Balance</option>
            <option>Converse</option>
          </Select>
        </Stack>
        <Stack direction={{ base: 'column', md: 'row' }}>
          <FormLabel>Filtrar por genero </FormLabel>
          <Select placeholder="Selecciona tu genero" w={'50%'}>
            <option>Mujer</option>
            <option>Hombre</option>
            <option>Unisex</option>
          </Select>
        </Stack>
      </FormControl>
    </Stack>
  )
}

export default Filter
