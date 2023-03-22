import { useState } from 'react'
import { Button, Container, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react'

import { fileUpload } from '../../utils/fileUpload'

function CreateProduct() {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: 0,
    Image: '',
    brand: '',
    category: '',
    countInStock: 0,
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(product)
  }

  const handleUploadImg = async ({ target }) => {
    const file = target.files[0]

    fileUpload(file).then((res) => {
      setProduct({ ...product, Image: res })
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setProduct({ ...product, [name]: value })
  }

  const handleNumber = (e) => {
    const { name, value } = e.target

    setProduct({ ...product, [name]: Number(value) })
  }

  return (
    <Container color="white" maxW="container.md" my="20" p={4}>
      <form onSubmit={handleSubmit}>
        <Stack spacing={6}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              name="name"
              placeholder="Enter product name"
              type="text"
              value={product.name}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Input
              name="description"
              placeholder="Enter product description"
              type="text"
              value={product.description}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Price</FormLabel>
            <Input
              name="price"
              placeholder="Enter product price"
              type="number"
              value={product.price}
              onChange={handleNumber}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Image</FormLabel>
            <Input
              name="image"
              placeholder="Enter product image"
              type="file"
              onChange={handleUploadImg}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Brand</FormLabel>
            <Input
              name="brand"
              placeholder="Enter product brand"
              type="text"
              value={product.brand}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Category</FormLabel>
            <Input
              name="category"
              placeholder="Enter product category"
              type="text"
              value={product.category}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Count in stock</FormLabel>
            <Input
              name="countInStock"
              placeholder="Enter product count in stock"
              type="number"
              value={product.countInStock}
              onChange={handleNumber}
            />
          </FormControl>
          <Button type="submit">Create</Button>
        </Stack>
      </form>
    </Container>
  )
}

export default CreateProduct
