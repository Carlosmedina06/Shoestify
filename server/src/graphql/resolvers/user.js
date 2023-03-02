import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

import User from '../../models/user.js'
dotenv.config()

const SALT_ROUNDS = 10

export const getUsers = async (parent, args, context) => {
  if (!context.loggedInUser) throw new Error('You are not authorized to do this action')

  return await User.find({})
}

export const getUserById = async (parent, { id }, context) => {
  if (!context.loggedInUser) throw new Error('You are not authorized to do this action')
  const user = await User.findById(id)

  return user
}

export const createUser = async (_, { name, email, password }) => {
  try {
    if (!name || !email || !password) throw new Error('Please provide all the required fields')
    const uniqueUser = await User.findOne({ email })

    if (uniqueUser) throw new Error('User already exists')
    const user = await User.create({
      name,
      email,
      password: await bcrypt.hash(password, SALT_ROUNDS),
    })

    return {
      id: user._id,
      email: user.email,
      token: jwt.sign({ id: user._id }, process.env.SECRET, { expiresIn: '1d' }),
    }
  } catch (error) {
    throw new Error(error.message)
  }
}

export const deleteUser = async (_, { id }, context) => {
  try {
    if (!context.user) throw new Error('You are not authorized to do this action')
    if (!id) throw new Error('Please provide an id')
    if (context.user.isAdmin === false) throw new Error('You are not authorized to do this action')
    const user = await User.findById(id)

    if (!user) throw new Error('User does not exist')

    user.active = false
    await user.save()

    return user
  } catch (error) {
    throw new Error(error.message)
  }
}

export const loginUser = async (_, { email, password }) => {
  try {
    const user = await User.findOne({ email })

    if (!user) throw new Error('User does not exist')
    if (!user.active) throw new Error('User is not active')
    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) throw new Error('Invalid credentials')

    return {
      id: user._id,
      email: user.email,
      token: jwt.sign({ id: user._id }, process.env.SECRET, { expiresIn: '1d' }),
    }
  } catch (error) {
    throw new Error(error.message)
  }
}
