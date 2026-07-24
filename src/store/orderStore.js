import { create } from 'zustand'

export const useOrderStore = create((set, get) => ({
  orders: [],
  createOrder: (items, total, userInfo) => {
    const newOrder = {
      id: 'ORD-' + Date.now(),
      items,
      total,
      userInfo,
      status: 'confirmed',
      createdAt: new Date(),
      estimatedDelivery: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      trackingUpdates: [
        { status: 'Order Confirmed', time: new Date(), description: 'Your order has been confirmed' }
      ]
    }
    set((state) => ({ orders: [...state.orders, newOrder] }))
    return newOrder
  },
  updateOrderStatus: (orderId, newStatus, description) => {
    set((state) => ({
      orders: state.orders.map((order) =>
        order.id === orderId
          ? {
              ...order,
              status: newStatus,
              trackingUpdates: [
                ...order.trackingUpdates,
                { status: newStatus, time: new Date(), description }
              ]
            }
          : order
      )
    }))
  },
  getOrderById: (orderId) => {
    const state = get()
    return state.orders.find((order) => order.id === orderId)
  }
}))
