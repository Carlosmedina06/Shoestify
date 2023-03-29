import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloProvider } from '@apollo/client'
import { RouterProvider } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import { client } from './graphql/client'
import { router } from './routes'
import theme from './theme/theme'
import { Layout } from './layout/Layout'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <ApolloProvider client={client}>
      <RouterProvider router={router}>
        <Layout />
      </RouterProvider>
    </ApolloProvider>
  </ChakraProvider>,
)
