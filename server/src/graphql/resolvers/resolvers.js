import { createUser, getUserById, getUsers, deleteUser } from './user.js'

export const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    users: getUsers,
    userById: getUserById,
  },

  Mutation: {
    createUser,
    deleteUser,
  },
}
