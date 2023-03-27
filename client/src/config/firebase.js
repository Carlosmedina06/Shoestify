import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_REACT_APP_FIREBASE_APIKEY}`,
  authDomain: 'shoestify-fabbc.firebaseapp.com',
  projectId: 'shoestify-fabbc',
  storageBucket: 'shoestify-fabbc.appspot.com',
  messagingSenderId: '37261363091',
  appId: '1:37261363091:web:7b3cfc3f7b1abb9850ca66',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
