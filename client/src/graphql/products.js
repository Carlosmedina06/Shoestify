import { gql } from '@apollo/client'

//Queries
export const GET_PRODUCTS = gql`
  {
    products {
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
export const GET_PRODUCT_BY_IDS = gql`
  query Query($productIds: [ID!]!) {
    productsByArray(productIds: $productIds) {
      id
      name
      active
      countInStock
      price
      category
      brand
      image
      description
      quantity
    }
  }
`

//Mutations
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
export const UPDATE_PRODUCT = gql`
  mutation Mutation(
    $updateProductId: ID
    $name: String
    $image: String
    $description: String
    $brand: String
    $category: String
    $price: Float
    $countInStock: Int
    $active: Boolean
  ) {
    updateProduct(
      id: $updateProductId
      name: $name
      image: $image
      description: $description
      brand: $brand
      category: $category
      price: $price
      countInStock: $countInStock
      active: $active
    ) {
      active
      countInStock
      price
      category
      brand
      image
      description
      name
      id
    }
  }
`
export const DELETE_PRODUCT = gql`
  mutation Mutation($deleteProductId: ID) {
    deleteProduct(id: $deleteProductId) {
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
