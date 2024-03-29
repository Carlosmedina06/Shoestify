import { useState } from 'react'
import { Button, Container, FormControl, FormLabel, Heading, Input, Stack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

import useAuthStore from '../../store/authStore'
import useLoginUser from '../../utils/hooks/useLoginUser'

const Login = () => {
  const navigate = useNavigate()
  const { loginToken } = useAuthStore()
  const [loginUser, { loading }] = useLoginUser()
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    const token = await loginUser({
      variables: {
        email: user.email,
        password: user.password,
      },
    })

    loginToken(token.data.loginUser.token)
    setUser({
      email: '',
      password: '',
    })
    navigate('/')
  }

  const handleChange = ({ target }) => {
    const { name, value } = target
    const newUser = { ...user, [name]: value }

    setUser(newUser)
  }

  return (
    <Container h={'90vh'} p={10}>
      <Stack>
        <Heading>Login</Heading>
        <form onSubmit={handleSubmit}>
          <Stack color={'white'}>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input name="email" type="email" value={user.email} onChange={handleChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                name="password"
                type="password"
                value={user.password}
                onChange={handleChange}
              />
            </FormControl>
            <Button
              isDisabled={user.email === '' || user.password === ''}
              isLoading={loading}
              type="submit"
            >
              Login
            </Button>
          </Stack>
        </form>
      </Stack>
    </Container>
  )
}

export default Login
