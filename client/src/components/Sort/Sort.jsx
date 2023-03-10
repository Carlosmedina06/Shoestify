import { FormControl, FormLabel, Select } from '@chakra-ui/react'
import React from 'react'

function Sort() {
  return (
    <FormControl>
      <FormLabel>Ordenar Precio</FormLabel>
      <Select placeholder="Ordenar precios">
        <option>Mayor precio primero</option>
        <option>Menor precio primero</option>
      </Select>
      <FormLabel>Ordenar Alfabeticamente</FormLabel>
      <Select placeholder="Ordenar Alfabeticamente">
        <option>De la A a la Z</option>
        <option>De la Z a la A</option>
      </Select>
    </FormControl>
  )
}

export default Sort
