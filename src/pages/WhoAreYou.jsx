import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuthStore } from '../store/authStore'

function WhoAreYou() {
  const navigate = useNavigate()
  const { setUserType } = useAuthStore()

  const userTypes = [
    {
      id: 'agriculture',
      label: 'Agriculture',
      icon: '👨‍🌾',
      description: 'Farmers, officers, labs & sellers',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'consumer',
      label: 'Consumer',
      icon: '🛍️',
      description: 'Households, restaurants & dealers',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'supply-chain',
      label: 'Supply Chain',
      icon: '🚚',
      description: 'Delivery, warehouse & logistics',
      color: 'from-purple-500 to-purple-600'
    }
  ]

  const handleSelect = (type) => {
    setUserType(type)
    navigate('/role-select')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 p-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 mt-8"
        >
          <h1 className="text-3xl font-bold text-gray-800">Who Are You?</h1>
          <p className="text-gray-600 mt-2">Select your role to get started</p>
        </motion.div>

        <div className="space-y-4">
          {userTypes.map((type, index) => (
            <motion.button
              key={type.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              onClick={() => handleSelect(type.id)}
              className="w-full bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all active:scale-95"
            >
              <div className="flex items-center gap-4">
                <div className="text-5xl">{type.icon}</div>
                <div className="flex-1 text-left">
                  <h3 className="text-xl font-bold text-gray-800">{type.label}</h3>
                  <p className="text-sm text-gray-600">{type.description}</p>
                </div>
                <div className="text-2xl text-primary-600">→</div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhoAreYou
