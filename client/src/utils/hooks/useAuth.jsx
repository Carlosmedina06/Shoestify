import { useState, useEffect } from 'react'
import jwtDecode from 'jwt-decode'

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      const decodedToken = jwtDecode(token)

      setIsAuthenticated(true)
      setUser(decodedToken)
    } else {
      setIsAuthenticated(false)
      setUser(null)
    }
  }, [])

  return { isAuthenticated, user }
}

export default useAuth
