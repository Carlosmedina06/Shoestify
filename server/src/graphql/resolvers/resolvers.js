import { createUser, getUserById, getUsers, deleteUser, loginUser } from './user.js'
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from './product.js'

export const resolvers = {
  Query: {
    users: getUsers,
    userById: getUserById,
    products: getProducts,
    productById: getProductById,
  },

  Mutation: {
    createUser,
    deleteUser,
    loginUser,
    createProduct,
    updateProduct,
    deleteProduct,
  },
}
