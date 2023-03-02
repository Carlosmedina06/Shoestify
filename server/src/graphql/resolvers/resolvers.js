import { createUser, getUserById, getUsers, deleteUser, loginUser } from './user.js'

export const resolvers = {
  Query: {
    users: getUsers,
    userById: getUserById,
  },

  Mutation: {
    createUser,
    deleteUser,
    loginUser,
  },
}
