import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Package, MapPin, Clock, CheckCircle } from 'lucide-react'

function OrderTracking() {
  const [orders] = useState([
    {
      id: 'ORD-001',
      product: 'Tomatoes - 50kg',
      status: 'In Transit',
      progress: 75,
      deliveryDate: '2024-07-28',
      location: 'Delhi - Mumbai Route'
    },
    {
      id: 'ORD-002',
      product: 'Wheat - 100kg',
      status: 'Processing',
      progress: 50,
      deliveryDate: '2024-07-29',
      location: 'Warehouse Storage'
    },
    {
      id: 'ORD-003',
      product: 'Potatoes - 75kg',
      status: 'Delivered',
      progress: 100,
      deliveryDate: '2024-07-25',
      location: 'Buyer Location'
    }
  ])

  const statusColors = {
    'In Transit': 'from-blue-500 to-cyan-500',
    'Processing': 'from-yellow-500 to-orange-500',
    'Delivered': 'from-green-500 to-emerald-500'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg p-6 shadow-lg"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6">📦 Order Tracking</h2>

      <div className="space-y-6">
        {orders.map((order, index) => (
          <motion.div
            key={order.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="border-2 border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-all"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="font-bold text-gray-800">{order.product}</p>
                <p className="text-sm text-gray-600">Order ID: {order.id}</p>
              </div>
              <motion.div
                className={`bg-gradient-to-r ${statusColors[order.status]} text-white px-3 py-1 rounded-full text-sm font-semibold`}
              >
                {order.status}
              </motion.div>
            </div>

            <div className="space-y-3">
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${order.progress}%` }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className={`bg-gradient-to-r ${statusColors[order.status]} h-full rounded-full`}
                />
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin size={16} />
                  <span>{order.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock size={16} />
                  <span>{order.deliveryDate}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default OrderTracking
