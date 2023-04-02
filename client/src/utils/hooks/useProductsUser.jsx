import { useQuery } from '@apollo/client'

import { GET_PRODUCT_BY_IDS } from '../../graphql/products'

const useProductsUser = (productIds) => {
  return useQuery(GET_PRODUCT_BY_IDS, {
    variables: {
      productIds,
    },
  })
}

export default useProductsUser
