import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      primario: '#000000',
      secundario: '#ffffff',
      terciario: '#484848',
    },
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode('brand.primario', 'brand.secundario')(props),
        color: mode('brand.secundario', 'brand.primario')(props),
        height: '100vh',
      },
      '#root': {
        height: '100%',
      },
    }),
  },
})

export default theme
