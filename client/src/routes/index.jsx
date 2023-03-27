import { createBrowserRouter } from 'react-router-dom'

import CreateProduct from '../components/CreateProduct/CreateProduct'
import { Layout } from '../layout/Layout'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Products from '../pages/Products/Products'
import Register from '../pages/Register/Register'

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
        path: '/products/:category',
        element: <Products />,
      },
      {
        path: '/createProduct',
        element: <CreateProduct />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
])
