import { gql } from 'graphql-tag'

export const typeDefs = gql`
  type Query {
    products: [Product]
    productById(id: ID): Product
    users: [User]
    userById(id: ID): User
    productsByArray(productIds: [ID!]!): [Product]
  }

  type Mutation {
    loginUser(email: String!, password: String!): Auth
    createUser(name: String, email: String, password: String): Auth
    deleteUser(id: ID): User
    productBuyToUser(input: ProductIdsInput!): User
    createProduct(
      name: String
      description: String
      image: String
      brand: String
      category: String
      price: Float
      countInStock: Int
      active: Boolean
    ): Product
    updateProduct(
      id: ID
      name: String
      description: String
      image: String
      brand: String
      category: String
      price: Float
      countInStock: Int
      active: Boolean
    ): Product
    deleteProduct(id: ID): Product
    createPaymentIntent(products: [ProductPagoInput]): PaymentIntent
  }

  input ProductIdsInput {
    productIds: [ID!]!
  }

  input ProductPagoInput {
    id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    stock: Int
    brand: String
  }

  type User {
    id: ID
    name: String
    email: String
    password: String
    active: Boolean
    isAdmin: Boolean
    allyourPurchase: [String]
  }

  type PaymentIntent {
    url: String
  }

  type Auth {
    token: String
    id: ID
  }

  type Product {
    id: ID
    name: String
    description: String
    image: String
    brand: String
    category: String
    price: Float
    countInStock: Int
    active: Boolean
    quantity: Int
  }
`
