import { create } from 'zustand'

export const useCartStore = create((set, get) => ({
  items: [],
  addItem: (product, quantity = 1) => {
    const state = get()
    const existingItem = state.items.find(
      (item) => item.id === product.id && item.category === product.category
    )
    if (existingItem) {
      set({
        items: state.items.map((item) =>
          item.id === product.id && item.category === product.category
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      })
    } else {
      set({ items: [...state.items, { ...product, quantity }] })
    }
  },
  removeItem: (productId, category) => {
    set((state) => ({
      items: state.items.filter((item) => !(item.id === productId && item.category === category))
    }))
  },
  updateQuantity: (productId, category, quantity) => {
    set((state) => ({
      items: state.items.map((item) =>
        item.id === productId && item.category === category
          ? { ...item, quantity: Math.max(0, quantity) }
          : item
      ).filter((item) => item.quantity > 0)
    }))
  },
  clearCart: () => set({ items: [] }),
  getTotal: () => {
    const state = get()
    return state.items.reduce((total, item) => total + item.price * item.quantity, 0)
  }
}))
