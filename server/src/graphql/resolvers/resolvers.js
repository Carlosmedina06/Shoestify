import {
  createUser,
  getUserById,
  getUsers,
  deleteUser,
  loginUser,
  productBuyToUser,
} from './user.js'
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
  getProductsByArray,
} from './product.js'
import { createPaymentIntent } from './pago.js'

export const resolvers = {
  Query: {
    users: getUsers,
    userById: getUserById,
    products: getProducts,
    productById: getProductById,
    productsByArray: getProductsByArray,
  },

  Mutation: {
    createUser,
    deleteUser,
    loginUser,
    createProduct,
    updateProduct,
    deleteProduct,
    createPaymentIntent,
    productBuyToUser,
  },
}
