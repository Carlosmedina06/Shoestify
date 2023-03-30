import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
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

import useProductStore from '../../store/productStore'

function Filter({ category }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const light = useColorModeValue('brand.secundario', 'brand.primario')
  const dark = useColorModeValue('brand.primario', 'brand.secundario')

  const { filterByBrand, sortByPrice } = useProductStore()

  const changeFilter = ({ target: { value } }) => {
    filterByBrand(value, category)
  }
  const changeOrder = ({ target: { value } }) => {
    sortByPrice(value)
  }

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
                    onChange={changeFilter}
                  >
                    <option value="all">Todas las marcas</option>
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
                    name="price"
                    outline="none"
                    placeholder="Ordenar por precio"
                    onChange={changeOrder}
                  >
                    <option value="asc">Mayor a menor</option>
                    <option value="desc">Menor a mayor</option>
                  </Select>
                </FormControl>
              </Stack>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Filter
