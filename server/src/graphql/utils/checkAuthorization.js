import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export function checkAuthorization(context) {
  if (!context.token) throw new Error('You are not authorized to do this action')

  const authorization = context.token

  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    const token = authorization.substring(7)
    const decodedToken = jwt.verify(token, process.env.SECRET)

    if (decodedToken.isAdmin === false) {
      throw new Error('You are not authorized to do this action')
    }
  }
}

export function checkUser(context) {
  if (!context.token) throw new Error('You are not authorized to do this action')

  const authorization = context.token

  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    const token = authorization.substring(7)

    return token
  }
}
