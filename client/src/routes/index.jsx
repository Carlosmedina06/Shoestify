import { createBrowserRouter } from 'react-router-dom'

import CreateProduct from '../components/CreateProduct/CreateProduct'
import { Layout } from '../layout/Layout'
import { Home } from '../pages/home/Home'
import Products from '../pages/Products/Products'

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
        element: <Products />,
      },
      {
        path: '/products/Mujeres',
        element: <Products />,
      },
      {
        path: '/products/Niños',
        element: <Products />,
      },
      {
        path: '/createProduct',
        element: <CreateProduct />,
      },
    ],
  },
])
