import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export function context({ req }) {
  try {
    const authorization = req.headers.authorization

    if (!authorization) return 'nop'

    const token = authorization.split(' ')[1]
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    return {
      loggedInUser: decoded.username,
    }
  } catch (error) {
    throw new Error(error.message)
  }
}
