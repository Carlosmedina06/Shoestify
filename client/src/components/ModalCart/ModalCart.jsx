import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  useColorModeValue,
  Heading,
  Text,
} from '@chakra-ui/react'
import { useMutation } from '@apollo/client'

import useProductStore from '../../store/productStore'
import { CREATE_PAYMENT_INTENT } from '../../graphql/pago'

function ModelCart() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dark = useColorModeValue('brand.primario', 'brand.secundario')
  const light = useColorModeValue('brand.secundario', 'brand.primario')
  const cart = useProductStore((state) => state.cart)
  const [addOrder] = useMutation(CREATE_PAYMENT_INTENT, {
    context: {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    },
  })

  const handleAddOrder = () => {
    addOrder({
      variables: {
        products: cart,
      },
    }).then((res) => {
      window.location.href = res.data.createPaymentIntent.url
    })
    onClose()
  }

  return (
    <>
      <Button bg={light} color={dark} w={'60%'} onClick={onOpen}>
        Comprar
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg={dark} border={'2px'}>
          <ModalHeader>
            <Heading color={light} fontSize={'xl'} fontWeight={'bold'}>
              Estas seguro de comprar?
            </Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text color={light} fontSize={'md'} fontWeight={'normal'}>
              Presiona comprar ahora para redireccionarte a la pagina de pago, sino presiona
              cancelar para seguir comprando.
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button
              _hover={{
                bg: light,
                color: dark,
              }}
              bg={dark}
              border={'1px'}
              color={light}
              mr={3}
              transition={'all 0.2s ease-in-out'}
              onClick={onClose}
            >
              Cancelar
            </Button>
            <Button
              _active={{
                transform: 'scale(0.95)',
              }}
              bg={light}
              color={dark}
              transition={'all 0.2s ease-in-out'}
              onClick={handleAddOrder}
            >
              Comprar ahora
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModelCart
