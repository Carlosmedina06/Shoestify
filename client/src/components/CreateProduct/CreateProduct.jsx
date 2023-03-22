import { useState } from 'react'
import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Select,
  Stack,
  Textarea,
} from '@chakra-ui/react'
import { useMutation } from '@apollo/client'

import { fileUpload } from '../../utils/fileUpload'
import { CREATE_PRODUCT } from '../../graphql/products'

function CreateProduct() {
  const [errores, setErrores] = useState({})
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
    brand: '',
    category: '',
    countInStock: '',
    active: true,
  })

  const [createProduct, { loading }] = useMutation(CREATE_PRODUCT, {
    context: {
      headers: {
        authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDIwYjI5NGVjNzExMjhlZDNhNDRjZiIsIm5hbWUiOiJjYXJsb3MiLCJlbWFpbCI6InNsYWF3bWVkaW5hMTRAZ21haWwuY29tIiwiaXNBZG1pbiI6dHJ1ZSwiYWN0aXZlIjp0cnVlLCJhbGx5b3VyUHVyY2hhc2UiOltdLCJpYXQiOjE2Nzk1MDExMzYsImV4cCI6MTY3OTU4NzUzNn0._bcT_o8M20Z6YRn-vBlUU_ZldqL-Yk_AdE9_Z1Qt0EM`,
      },
    },
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    createProduct({
      variables: {
        name: product.name,
        description: product.description,
        price: product.price,
        image: product.image,
        brand: product.brand,
        category: product.category,
        countInStock: product.countInStock,
        active: product.active,
      },
    })
    setProduct({
      name: '',
      description: '',
      price: 0,
      image: '',
      brand: '',
      category: '',
      countInStock: 0,
      active: true,
    })
    e.target.reset()
  }

  const handleUploadImg = async ({ target }) => {
    const file = target.files[0]

    fileUpload(file).then((res) => {
      setProduct({ ...product, image: res })
    })
  }

  const handleChange = ({ target: { name, value } }) => {
    setProduct({ ...product, [name]: value })
  }

  const handleNumber = (e) => {
    const { name, value } = e.target

    setProduct({ ...product, [name]: Number(value) })
  }

  const handleBlur = (e) => {
    const { name, value } = e.target

    if (!value) {
      setErrores({ ...errores, [name]: 'Este campo es requerido' })
    }

    if (value || value > 1) {
      setErrores({ ...errores, [name]: '' })
    }
  }

  return (
    <Container color="white" maxW="container.md" my="20" p={4}>
      <form onSubmit={handleSubmit}>
        <Stack spacing={6}>
          <FormControl>
            <FormLabel>Nombre</FormLabel>
            <Input
              borderColor={errores.name ? 'red' : 'white'}
              name="name"
              placeholder="Ingresa nombre del producto"
              type="text"
              value={product.name}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errores.name && <FormHelperText color={'red'}>{errores.name}</FormHelperText>}
          </FormControl>
          <FormControl>
            <FormLabel>Descripcion</FormLabel>
            <Textarea
              borderColor={errores.description ? 'red' : 'white'}
              name="description"
              placeholder="Ingresa descripcion del producto"
              resize={'none'}
              size={'sm'}
              value={product.description}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errores.description && (
              <FormHelperText color={'red'}>{errores.description}</FormHelperText>
            )}
          </FormControl>
          <FormControl>
            <FormLabel>Precio</FormLabel>
            <Input
              borderColor={errores.price ? 'red' : 'white'}
              name="price"
              placeholder="Ingresa precio del producto"
              type="number"
              value={product.price}
              onBlur={handleBlur}
              onChange={handleNumber}
            />
            {errores.price && <FormHelperText color={'red'}>{errores.price}</FormHelperText>}
          </FormControl>
          <FormControl>
            <FormLabel>Imagen</FormLabel>
            <Input
              borderColor={errores.image ? 'red' : 'white'}
              name="image"
              type="file"
              onBlur={handleBlur}
              onChange={handleUploadImg}
            />
            {errores.image && <FormHelperText color={'red'}>{errores.image}</FormHelperText>}
          </FormControl>
          <FormControl>
            <FormLabel>Marca</FormLabel>
            <Select
              borderColor={errores.brand ? 'red' : 'white'}
              name="brand"
              placeholder="Ingresa marca del producto"
              value={product.brand}
              onBlur={handleBlur}
              onChange={handleChange}
            >
              <option value="Nike">Nike</option>
              <option value="Adidas">Adidas</option>
              <option value="Puma">Puma</option>
            </Select>
            {errores.brand && <FormHelperText color={'red'}>{errores.brand}</FormHelperText>}
          </FormControl>
          <FormControl>
            <FormLabel>Categoria</FormLabel>
            <Select
              borderColor={errores.category ? 'red' : 'white'}
              name="category"
              placeholder="Ingresa categoria del producto"
              value={product.category}
              onBlur={handleBlur}
              onChange={handleChange}
            >
              <option value="Hombres">Hombres</option>
              <option value="Mujeres">Mujeres</option>
              <option value="Niños">Niños</option>
            </Select>
            {errores.category && <FormHelperText color={'red'}>{errores.category}</FormHelperText>}
          </FormControl>
          <FormControl>
            <FormLabel>Stock del producto</FormLabel>
            <Input
              borderColor={errores.countInStock ? 'red' : 'white'}
              name="countInStock"
              placeholder="ingresa el stock del producto"
              type="number"
              value={product.countInStock}
              onBlur={handleBlur}
              onChange={handleNumber}
            />
            {errores.countInStock && (
              <FormHelperText color={'red'}>{errores.countInStock}</FormHelperText>
            )}
          </FormControl>
          <Button
            isDisabled={
              !product.name ||
              !product.description ||
              !product.price ||
              !product.image ||
              !product.brand ||
              !product.category ||
              !product.countInStock
            }
            isLoading={loading}
            type="submit"
          >
            Create
          </Button>
        </Stack>
      </form>
    </Container>
  )
}

export default CreateProduct