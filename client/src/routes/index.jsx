import { createBrowserRouter } from 'react-router-dom'

import CreateProduct from '../components/CreateProduct/CreateProduct'
import { Layout } from '../layout/Layout'
import { Home } from '../pages/home/Home'
import Products from '../pages/Products/Products'
import ProductsHombre from '../pages/Products/ProductsHombre'
import ProductsMujer from '../pages/Products/ProductsMujer'
import ProductsNinos from '../pages/Products/ProductsNinos'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/products/hombres',
        element: <ProductsHombre />,
      },
      {
        path: '/products/Mujeres',
        element: <ProductsMujer />,
      },
      {
        path: '/products/Niños',
        element: <ProductsNinos />,
      },
      {
        path: '/createProduct',
        element: <CreateProduct />,
      },
    ],
  },
])
