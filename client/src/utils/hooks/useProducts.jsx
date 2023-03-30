import { useQuery } from '@apollo/client'

import { GET_PRODUCTS } from '../../graphql/products'

const useProducts = () => {
  return useQuery(GET_PRODUCTS)
}

export default useProducts
