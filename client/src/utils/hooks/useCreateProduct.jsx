import { useMutation } from '@apollo/client'

import { CREATE_PRODUCT } from '../../graphql/products'

export const useCreateProduct = () => {
  return useMutation(CREATE_PRODUCT, {
    context: {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    },
    refetchQueries: ['getProducts'],
  })
}
