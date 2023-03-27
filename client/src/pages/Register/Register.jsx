import { useState } from 'react'
import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Stack,
} from '@chakra-ui/react'
import { useMutation } from '@apollo/client'

import { CREATE_USER } from '../../graphql/user'

const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [errors, setErrors] = useState({})
  const [createUser, { loading }] = useMutation(CREATE_USER)

  const handleChange = ({ target }) => {
    const { name, value } = target
    const newUser = { ...user, [name]: value }

    setUser(newUser)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (user.password !== user.confirmPassword) {
      setErrors({ confirmPassword: 'Passwords must match' })

      return
    }

    createUser({
      variables: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
    })

    setUser({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    })
  }

  const handleBlur = ({ target }) => {
    const { name, value } = target

    if (value === '') {
      setErrors({ [name]: 'This field is required' })
    } else {
      setErrors({
        [name]: '',
      })
    }
  }

  return (
    <Container h={'100vh'} p={10}>
      <Stack spacing={6}>
        <Heading>Register</Heading>
        <form onSubmit={handleSubmit}>
          <FormControl color={'white'}>
            <FormLabel my={4}>Nombre </FormLabel>
            <Input
              name="name"
              type="name"
              value={user.name}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.name && <FormHelperText color={'red'}>{errors.name}</FormHelperText>}
          </FormControl>
          <FormControl color={'white'}>
            <FormLabel my={4}>Email address</FormLabel>
            <Input
              name="email"
              type="email"
              value={user.email}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.email && <FormHelperText color={'red'}>{errors.email}</FormHelperText>}
          </FormControl>
          <FormControl color={'white'}>
            <FormLabel my={4}>Password</FormLabel>
            <Input
              name="password"
              type="password"
              value={user.password}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.password && <FormHelperText color={'red'}>{errors.password}</FormHelperText>}
            <FormHelperText>We will never share your password.</FormHelperText>
          </FormControl>
          <FormControl color={'white'}>
            <FormLabel my={4}>Confirm Password</FormLabel>
            <Input
              name="confirmPassword"
              type="password"
              value={user.confirmPassword}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <FormHelperText color={'red'}>{errors.confirmPassword}</FormHelperText>
            )}
            <FormHelperText>Please confirm your password to continue.</FormHelperText>
          </FormControl>
          <Button
            isDisabled={
              user.name === '' ||
              user.email === '' ||
              user.password === '' ||
              user.confirmPassword === ''
            }
            isLoading={loading}
            mt={6}
            type="submit"
            w={'full'}
          >
            Register
          </Button>
        </form>
      </Stack>
    </Container>
  )
}

export default Register
