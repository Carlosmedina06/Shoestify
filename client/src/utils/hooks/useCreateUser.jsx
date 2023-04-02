import { useMutation } from '@apollo/client'

import { CREATE_USER } from '../../graphql/user'

const useCreateUser = () => {
  return useMutation(CREATE_USER)
}

export default useCreateUser
