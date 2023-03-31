import {
  Button,
  CloseButton,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
  Icon,
} from '@chakra-ui/react'
import { MdOutlineAttachMoney } from 'react-icons/md'

const CartCard = ({ product, handleRemove }) => {
  const dark = useColorModeValue('brand.primario', 'brand.secundario')
  const light = useColorModeValue('brand.secundario', 'brand.primario')

  return (
    <>
      <Stack
        alignItems={'center'}
        color={light}
        direction={'row'}
        fontSize={'sm'}
        minH={'80px'}
        overflowy={'auto'}
        position={'relative'}
        px={2}
        py={6}
        spacing={4}
      >
        <Image borderRadius={4} h={8} objectFit={'cover'} src={product.image} w={8} />
        <Stack direction={'column'}>
          <Heading fontSize={'sm'} textTransform={'capitalize'}>
            {product.name}
          </Heading>
          <Stack direction={'row'}>
            <Text fontSize={'sm'}>{product.quantity} und</Text>
            <Stack alignItems={'center'} direction={'row'} spacing={0}>
              <Icon as={MdOutlineAttachMoney} boxSize={4} />
              <Text>{product.price}</Text>
            </Stack>
          </Stack>
        </Stack>
        <Button
          _active={{
            transform: 'scale(0.95)',
          }}
          _hover={{
            bg: light,
            color: dark,
          }}
          bg={'transparent'}
          color={light}
          h={6}
          position={'absolute'}
          right={0}
          top={0}
          transition={'all 0.2s ease-in-out'}
          w={4}
          onClick={() => handleRemove(product.id)}
        >
          <CloseButton
            _hover={{
              color: dark,
            }}
            size={'sm'}
            transition={'all 0.2s ease-in-out'}
          />
        </Button>
      </Stack>
      <Divider />
    </>
  )
}

export default CartCard
