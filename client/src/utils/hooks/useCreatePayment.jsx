import { useMutation } from '@apollo/client'

import { CREATE_PAYMENT_INTENT } from '../../graphql/pago'

const useCreatePayment = () => {
  return useMutation(CREATE_PAYMENT_INTENT, {
    context: {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    },
  })
}

export default useCreatePayment
