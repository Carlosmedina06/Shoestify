import { gql } from 'graphql-tag'

export const typeDefs = gql`
  type Query {
    hello: String
    products: [product]
    users: [user]
    userById(id: ID): user
  }

  type Mutation {
    createUser(name: String, email: String, password: String): user
    deleteUser(id: ID): user
    createProduct(
      name: String
      description: String
      image: String
      brand: String
      category: String
      price: Float
      countInStock: Int
    ): product
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

  type product {
    id: ID
    name: String
    description: String
    image: String
    brand: String
    category: String
    price: Float
    countInStock: Int
  }
`
