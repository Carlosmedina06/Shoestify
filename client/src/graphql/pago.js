import { gql } from '@apollo/client'

export const CREATE_PAYMENT_INTENT = gql`
  mutation Mutation($products: [ProductPagoInput]) {
    createPaymentIntent(products: $products) {
      url
    }
  }
`
