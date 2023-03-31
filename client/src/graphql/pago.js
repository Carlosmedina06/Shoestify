import { gql } from '@apollo/client'

export const CREATE_PAYMENT_INTENT = gql`
  mutation Mutation($products: [productPagoInput]) {
    createPaymentIntent(products: $products) {
      url
    }
  }
`
