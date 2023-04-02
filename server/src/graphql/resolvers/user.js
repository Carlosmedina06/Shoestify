import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

import User from '../../models/user.js'
import { checkAuthorization } from '../utils/checkAuthorization.js'

dotenv.config()

const SALT_ROUNDS = 10

export const getUsers = async (_parent, _args, context) => {
  try {
    checkAuthorization(context)

    return await User.find({})
  } catch (error) {
    throw new Error(error.message)
  }
}
export const getUserById = async (_parent, { id }, context) => {
  try {
    checkAuthorization(context)
    const user = await User.findById(id)

    return user
  } catch (error) {
    throw new Error(error.message)
  }
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

    const userForToken = {
      id: user._id,
      email: user.email,
      isAdmin: user.isAdmin,
      active: user.active,
      allyourPurchase: user.allyourPurchase,
      name: user.name,
    }

    const token = jwt.sign(userForToken, process.env.SECRET, { expiresIn: '1d' })

    return {
      id: user._id,
      token,
    }
  } catch (error) {
    throw new Error(error.message)
  }
}
export const deleteUser = async (_, { id }, context) => {
  try {
    if (!id) throw new Error('Please provide an id')
    checkAuthorization(context)

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

    const userForToken = {
      id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      active: user.active,
      allyourPurchase: user.allyourPurchase,
    }

    const token = jwt.sign(userForToken, process.env.SECRET, { expiresIn: '1d' })

    return {
      id: user._id,
      token,
    }
  } catch (error) {
    throw new Error(error.message)
  }
}
export const productBuyToUser = async (_, { input }, context) => {
  try {
    if (!context.token) throw new Error('You are not authorized to do this action')

    const authorization = context.token

    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
      const token = authorization.substring(7)
      const decodedToken = jwt.verify(token, process.env.SECRET)

      if (!input.productIds || !Array.isArray(input.productIds))
        throw new Error('Please provide an array of product ids')

      const user = await User.findById(decodedToken.id)

      if (!user) throw new Error('User does not exist')

      user.allyourPurchase.push(...input.productIds)
      await user.save()

      return {
        id: user._id,
        token,
      }
    }
  } catch (error) {
    throw new Error(error.message)
  }
}
