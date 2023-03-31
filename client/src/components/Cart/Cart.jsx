import {
  Badge,
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

import ModalCart from '../ModalCart/ModalCart'
import useProductStore from '../../store/productStore'
import CartCard from '../CartCard/CartCard'

function Cart() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dark = useColorModeValue('brand.primario', 'brand.secundario')
  const light = useColorModeValue('brand.secundario', 'brand.primario')

  const { removeCart } = useProductStore()
  const cart = useProductStore((state) => state.cart)
  const totalPrice = cart.reduce((acc, product) => acc + product.price * product.quantity, 0)

  const handleRemove = (id) => {
    removeCart(id)
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
        position={'relative'}
        onClick={onOpen}
      >
        <Icon as={IoCartOutline} boxSize={6} />
        {cart.length > 0 && (
          <Stack position={'absolute'} right={'2'} top={'0'}>
            <Badge bg={'red'} borderRadius={'full'} color={light}>
              {cart.length}
            </Badge>
          </Stack>
        )}
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg={dark} color={light}>
          <DrawerCloseButton color={light} />
          <DrawerHeader>Carrito de compra 🛒</DrawerHeader>
          <DrawerBody h={'100%'}>
            <Stack h={'100%'} justifyContent={'space-between'}>
              <Stack p={2} spacing={2}>
                {cart.map((product) => (
                  <CartCard key={product.id} handleRemove={handleRemove} product={product} />
                ))}
              </Stack>
            </Stack>
            <Divider />
          </DrawerBody>
          <DrawerFooter display={'flex'} gap={4} justifyContent={'space-between'} w={'100%'}>
            <Text fontWeight={'bold'}>Total: ${totalPrice}</Text>
            <ModalCart />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Cart
