import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useProductStore = create(
  persist(
    (set, get) => ({
      products: [],
      allProducts: [],
      cart: [],
      setProducts: (products) => set({ products }),
      setAllProducts: (products) => set({ allProducts: products }),
      filterByCategory: (category) =>
        set((state) => ({
          products: state.products.filter((product) => product.category === category),
        })),
      filterByBrand(brand, category) {
        if (brand === 'all' && category === 'all') return set({ products: get().allProducts })
        if (brand === 'all')
          return set((state) => ({
            products: state.allProducts.filter((product) => product.category === category),
          }))
        if (category === 'all')
          return set((state) => ({
            products: state.allProducts.filter((product) => product.brand === brand),
          }))
        set((state) => ({
          products: state.allProducts.filter(
            (product) => product.brand === brand && product.category === category,
          ),
        }))
      },
      sortByPrice: (order) => {
        if (order === 'desc')
          return set((state) => ({
            products: state.products.sort((a, b) => a.price - b.price),
          }))
        if (order === 'asc')
          return set((state) => ({
            products: state.products.sort((a, b) => b.price - a.price),
          }))
      },
      addCart: (product) => {
        const countInStock = product.stock

        if (countInStock === 0) return

        const cart = get().cart
        const existingProductIndex = cart.findIndex((item) => item.id === product.id)

        let updatedCart

        if (existingProductIndex === -1) {
          // El producto no está en el carrito, así que lo agregamos con una cantidad de 1
          updatedCart = [...cart, { ...product, quantity: 1 }]
        } else {
          // El producto ya está en el carrito, así que aumentamos su cantidad en 1
          updatedCart = cart.map((item, index) => {
            if (index === existingProductIndex) {
              const newQuantity = item.quantity + 1

              if (newQuantity > countInStock) return item // no se puede agregar más del stock disponible

              return { ...item, quantity: newQuantity }
            }

            return item
          })
        }

        set({ cart: updatedCart })
      },
      removeCart: (productId) => {
        const cart = get().cart
        const updatedCart = cart.map((item) =>
          item.id === productId
            ? item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : null
            : item,
        )

        set({ cart: updatedCart.filter((item) => item !== null) })
      },
      deleteAllCart: () => set({ cart: [] }),
    }),
    {
      name: 'product-store',
      getStorage: () => localStorage,
    },
  ),
)

export default useProductStore
