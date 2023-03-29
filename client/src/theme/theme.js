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
    styles: {
      global: (props) => ({
        'html, body, #root': {
          color: mode(undefined, 'whiteAlpha.900')(props),
          height: '100%',
        },
        '*::-webkit-scrollbar': {
          display: 'none',
        },
      }),
    },
  },
})

export default theme
