import { gql } from '@apollo/client'

//Queries
export const GET_USERS = gql`
  query Query {
    users {
      id
      name
      email
      password
      active
      isAdmin
      allyourPurchase
    }
  }
`
export const GET_USER = gql`
  query UserById($userByIdId: ID) {
    userById(id: $userByIdId) {
      name
      id
      email
      password
      active
      isAdmin
      allyourPurchase
    }
  }
`
//Mutations
export const CREATE_USER = gql`
  mutation createUser($name: String, $email: String, $password: String) {
    createUser(name: $name, email: $email, password: $password) {
      token
      id
    }
  }
`
export const LOGIN_USER = gql`
  mutation Mutation($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      id
    }
  }
`
export const DETELE_USER = gql`
  mutation Mutation($id: ID!) {
    deleteUser(id: $id) {
      id
    }
  }
`
