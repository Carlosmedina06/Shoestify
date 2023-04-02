import axios from 'axios'

import { checkUser } from '../utils/checkAuthorization.js'

export const createPaymentIntent = async (_parent, { products }, context) => {
  try {
    checkUser(context)

    const respuesta = await axios
      .post(
        'https://api.mercadopago.com/checkout/preferences',
        {
          payer_email: 'test_user_1297280127@testuser.com',
          items: products.map((product) => ({
            id: product._id,
            title: product.name,
            description: product.description,
            picture_url: product.image,
            quantity: product.quantity,
            currency_id: 'ARS',
            unit_price: product.price,
          })),
          auto_return: 'all',

          back_urls: {
            success: 'http://localhost:5173/',
            fallure: 'http://www.fallure.com',
            pending: 'http://www.pending.com',
          },
          payment_method_id: ['visa', 'master'],
          notification_url: 'google.com',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Bearer APP_USR-4642588959898882-012810-9f836e105db2800e19910fb8093a8eab-1297278676',
          },
        },
      )
      .then((response) => {
        return response.data.init_point
      })

    return {
      url: respuesta,
    }
  } catch (error) {
    throw new Error(error.message)
  }
}
