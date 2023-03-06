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
    textStyles: {
      translucid: {
        '.chakra-ui-light &': {
          color: ['blackAlpha.100', 'blackAlpha.500'],
        },
        '.chakra-ui-dark &': {
          color: ['whiteAlpha.100', 'whiteAlpha.500'],
        },
      },
    },
    fontSizes: {
      sm: '0.95rem',
      xs: '0.9rem',
    },
    sizes: {
      container: {
        xl: '1265px',
      },
    },
  },
})

export default theme
