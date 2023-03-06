import { createBrowserRouter } from 'react-router-dom'

import { Layout } from '../layout/Layout'
import { Home } from '../pages/home/Home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
])