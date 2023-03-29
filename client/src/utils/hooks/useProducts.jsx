import { useQuery } from '@apollo/client'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { GET_PRODUCTS } from '../../graphql/products'

export const useProducts = () => {
  const [filter, setFilter] = useState({})
  const [filterProducts, setFilterProducts] = useState([])

  const handleFilter = (e) => {
    setFilter({ [e.target.name]: e.target.value })
  }

  const { category } = useParams()
  const { data } = useQuery(GET_PRODUCTS)
  const { products } = data || {}

  useEffect(() => {
    const filteredProducts = products?.filter((product) => {
      const { marca } = filter

      if (category && !marca) {
        return product.category === category
      }

      if (category && marca === product.brand) {
        return product.category === category
      }
    })

    setFilterProducts(filteredProducts)
  }, [filter, category, products])

  return { filterProducts, handleFilter }
}
