import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/icons'
import { IoCartOutline } from 'react-icons/io5'

function Cart() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dark = useColorModeValue('brand.primario', 'brand.secundario')
  const light = useColorModeValue('brand.secundario', 'brand.primario')

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
        <Icon as={IoCartOutline} boxSize={6} />
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg={dark} color={light}>
          <DrawerCloseButton color={light} />
          <DrawerHeader>Shopping Cart 🛒</DrawerHeader>
          <DrawerBody h={'100%'}>
            <Stack h={'100%'} justifyContent={'space-between'} spacing={4}>
              <Stack>
                <Text>ACA IRAN LOS Productos QUE SE AGREGUEN AL CARRITO</Text>
                <Text>ACA IRAN LOS Productos QUE SE AGREGUEN AL CARRITO</Text>
              </Stack>
              <Stack>
                <Text>Total: $100</Text>
                <Divider />
                <Text>ACA IRAN LOS Productos QUE SE AGREGUEN AL CARRITO</Text>
              </Stack>
            </Stack>
          </DrawerBody>
          <DrawerFooter>
            <Button
              _hover={{
                bg: light,
                color: dark,
              }}
              mr={3}
              variant="outline"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              _active={{
                transform: 'scale(0.95)',
              }}
              bg={light}
              color={dark}
            >
              Buy
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Cart
