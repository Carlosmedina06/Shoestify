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

import useProductStore from '../../store/productStore'

function Cart() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dark = useColorModeValue('brand.primario', 'brand.secundario')
  const light = useColorModeValue('brand.secundario', 'brand.primario')

  const cart = useProductStore((state) => state.cart)
  const totalPrice = cart.reduce((acc, product) => acc + product.price * product.quantity, 0)

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
                {cart.map((product) => (
                  <Stack key={product.id} direction={'row'} spacing={4}>
                    <Text>{product.name}</Text>
                    <Text>${product.price}</Text>
                    <Text>cantidad: {product.quantity}</Text>
                  </Stack>
                ))}
              </Stack>
              <Stack>
                <Text>Total: ${totalPrice}</Text>
                <Divider />
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
