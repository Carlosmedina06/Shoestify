import dotenv from 'dotenv'

import { checkAuthorization } from '../utils/checkAuthorization.js'
import Product from '../../models/product.js'

dotenv.config()

export const getProducts = async () => {
  const products = await Product.find({})

  return products
}

export const getProductsByArray = async (_parent, { productIds }) => {
  const products = await Product.find({ _id: { $in: productIds } })

  return products
}

export const getProductById = async (_parent, { id }) => {
  const product = await Product.findOne({ _id: id })

  return product
}

export const createProduct = async (
  _parent,
  { name, description, image, brand, category, price, countInStock, active },
  context,
) => {
  try {
    checkAuthorization(context)
    const product = await Product.create({
      name,
      description,
      image,
      brand,
      category,
      price,
      countInStock,
      active,
    })

    return product
  } catch (error) {
    throw new Error(error.message)
  }
}

export const updateProduct = async (
  _parent,
  { id, name, description, image, brand, category, price, countInStock, active },
  context,
) => {
  try {
    if (!id) throw new Error('Please provide the id of the product you want to update')
    checkAuthorization(context)

    const newProduct = await Product.findOneAndUpdate(
      {
        _id: id,
      },
      {
        name: name || Product.name,
        description: description || Product.description,
        image: image || Product.image,
        brand: brand || Product.brand,
        category: category || Product.category,
        price: price || Product.price,
        countInStock: countInStock || Product.countInStock,
        active: active || Product.active,
      },
    )

    return newProduct
  } catch (error) {
    throw new Error(error.message)
  }
}

export const deleteProduct = async (_parent, { id }, context) => {
  try {
    if (!id) throw new Error('Please provide the id of the product you want to delete')
    checkAuthorization(context)

    const productDeleted = Product.findById(id)

    productDeleted.active = false

    await productDeleted.save()

    return productDeleted
  } catch (error) {
    throw new Error(error.message)
  }
}
