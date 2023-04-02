import { useMutation } from '@apollo/client'

import { LOGIN_USER } from '../../graphql/user'

const useLoginUser = () => {
  return useMutation(LOGIN_USER)
}

export default useLoginUser
