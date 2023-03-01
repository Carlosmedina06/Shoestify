import bcrypt from 'bcrypt'

import User from '../../models/user.js'

const SALT_ROUNDS = 10

export const getUsers = async () => {
  const users = User.find({})

  return users
}

export const getUserById = async (_, { id }) => {
  const user = User.findById(id)

  return user
}

export const createUser = (_, { name, email, password }) => {
  const user = new User({ name, email, password })

  user.password = bcrypt.hashSync(user.password, SALT_ROUNDS)

  return user.save()
}

export const deleteUser = async (_, { id }) => {
  const user = User.findByIdAndUpdate(id, { active: false })

  return user
}
