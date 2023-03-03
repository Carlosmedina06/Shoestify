import { gql } from 'graphql-tag'

export const typeDefs = gql`
  type Query {
    products: [product]
    productById(id: ID): product
    users: [user]
    userById(id: ID): user
  }

  type Mutation {
    loginUser(email: String!, password: String!): Auth
    createUser(name: String, email: String, password: String): Auth
    deleteUser(id: ID): user
    createProduct(
      name: String
      description: String
      image: String
      brand: String
      category: String
      price: Float
      countInStock: Int
      active: Boolean
    ): product
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
    ): product
    deleteProduct(id: ID): product
  }

  type user {
    id: ID
    name: String
    email: String
    password: String
    active: Boolean
    isAdmin: Boolean
    allyourPurchase: [String]
  }

  type Auth {
    token: String
    id: ID
  }

  type product {
    id: ID
    name: String
    description: String
    image: String
    brand: String
    category: String
    price: Float
    countInStock: Int
    active: Boolean
  }
`
