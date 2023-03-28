import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import jwtDecode from 'jwt-decode'

const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,

      checkAuth: () => {
        const token = localStorage.getItem('token')

        if (token) {
          const decodedToken = jwtDecode(token)

          if (decodedToken.exp * 1000 < Date.now()) {
            localStorage.removeItem('token')
          } else {
            set({ user: decodedToken, isAuthenticated: true })
          }
        }

        return get().isAuthenticated
      },
      getAuthUser: () => {
        const user = get().user

        return user
      },
      loginToken: (token) => {
        localStorage.setItem('token', token)
        set({ user: jwtDecode(token), isAuthenticated: true })
      },
      logoutToken: () => {
        localStorage.removeItem('token')
        set({ user: null, isAuthenticated: false })
      },
    }),
    {
      name: 'authStore',
      getStorage: () => localStorage,
    },
  ),
)

export default useAuthStore
