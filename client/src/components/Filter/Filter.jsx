import { useState } from 'react'
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormLabel,
  Select,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import { FiFilter } from 'react-icons/fi'
import { Icon } from '@chakra-ui/react'

import { useProducts } from '../../utils/hooks/useProducts'

function Filter() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const light = useColorModeValue('brand.secundario', 'brand.primario')
  const dark = useColorModeValue('brand.primario', 'brand.secundario')
  const { handleFilter } = useProducts()

  return (
    <>
      <Button
        _hover={{
          bg: light,
          color: dark,
          transition: 'all 0.2s ease-in-out',
        }}
        bg={dark}
        color={light}
        onClick={onOpen}
      >
        <Icon as={FiFilter} />
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg={dark} color={light}>
          <DrawerCloseButton />
          <DrawerHeader>Filtrar y ordenar</DrawerHeader>

          <DrawerBody>
            <Stack spacing={6}>
              <Stack>
                <FormControl>
                  <Text fontWeight="medium" py={2}>
                    Filtrar por
                  </Text>
                  <FormLabel>Marca</FormLabel>
                  <Select
                    _focus={{
                      borderColor: light,
                      outline: 'none',
                    }}
                    borderColor={light}
                    cursor={'pointer'}
                    name="marca"
                    outline="none"
                    placeholder="Selecciona una marca"
                    onChange={handleFilter}
                  >
                    <option value="Nike">Nike</option>
                    <option value="Adidas">Adidas</option>
                    <option value="Puma">Puma</option>
                    <option value="Reebok">Reebok</option>
                    <option value="New Balance">New Balance</option>
                  </Select>
                </FormControl>
              </Stack>
              <Stack>
                <FormControl>
                  <Text fontWeight="medium" py={2}>
                    Ordenar por
                  </Text>
                  <FormLabel>Precio(De Mayor a Menor)</FormLabel>
                  <Select
                    _focus={{
                      borderColor: light,
                      outline: 'none',
                    }}
                    cursor={'pointer'}
                    outline="none"
                    placeholder="Ordena por precio"
                  >
                    <option value="Mayor a menor">Mayor a menor</option>
                    <option value="Menor a mayor">Menor a mayor</option>
                  </Select>
                </FormControl>
              </Stack>
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Button
              _active={{ transform: 'scale(0.95)' }}
              _hover={{ bg: dark, color: light, borderColor: light }}
              bg={light}
              border="1px solid"
              borderColor={dark}
              color={dark}
              transition={'0.3s ease'}
              w={'100%'}
            >
              Aplicar
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Filter
