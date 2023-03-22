import { gql } from '@apollo/client'

export const CREATE_PRODUCT = gql`
  mutation Mutation(
    $name: String
    $description: String
    $image: String
    $brand: String
    $category: String
    $price: Float
    $countInStock: Int
    $active: Boolean
  ) {
    createProduct(
      name: $name
      description: $description
      image: $image
      brand: $brand
      category: $category
      price: $price
      countInStock: $countInStock
      active: $active
    ) {
      id
      name
      description
      image
      brand
      category
      price
      countInStock
      active
    }
  }
`
