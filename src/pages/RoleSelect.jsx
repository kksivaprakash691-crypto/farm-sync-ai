import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuthStore } from '../store/authStore'
import { ChevronLeft } from 'lucide-react'

function RoleSelect() {
  const navigate = useNavigate()
  const { userType, setRole } = useAuthStore()

  const roles = {
    agriculture: [
      { id: 'farmer', label: 'Farmer' },
      { id: 'agri-officer', label: 'Agri Officer' },
      { id: 'agri-lab-tech', label: 'Agri Lab Tech' },
      { id: 'agri-product-seller', label: 'Agri Product Seller' },
      { id: 'agri-tools-seller', label: 'Agri Tools/Equipment/Spare Parts Seller' },
      { id: 'agri-mechanic', label: 'Agri Tools/Equipment/Spare Parts Mechanic' }
    ],
    consumer: [
      { id: 'house-usage', label: 'House Usage' },
      { id: 'restaurant', label: 'Restaurant/Hotels' },
      { id: 'cold-storage', label: 'Cold Storage' },
      { id: 'catering', label: 'Catering Services' },
      { id: 'wholesale', label: 'Wholesale Dealer' }
    ],
    'supply-chain': [
      { id: 'delivery-partner', label: 'Delivery Partner' },
      { id: 'warehouse-handler', label: 'Warehouse Handler' },
      { id: 'logistics-manager', label: 'Logistics Manager' },
      { id: 'route-supervisor', label: 'Route Supervisor' }
    ]
  }

  const currentRoles = roles[userType] || []

  const handleSelectRole = (roleId) => {
    setRole(roleId)
    navigate('/sub-role-select')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 p-4">
      <div className="max-w-2xl mx-auto">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => navigate('/who-are-you')}
          className="flex items-center gap-2 text-primary-600 font-semibold mb-8 hover:text-primary-700"
        >
          <ChevronLeft size={20} />
          Back
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-bold text-gray-800">Select Your Role</h1>
          <p className="text-gray-600 mt-2">Choose your specific role in the platform</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-3">
          {currentRoles.map((role, index) => (
            <motion.button
              key={role.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              onClick={() => handleSelectRole(role.id)}
              className="w-full bg-white rounded-lg p-4 shadow-md hover:shadow-lg hover:border-primary-300 transition-all active:scale-95 border-2 border-transparent text-left"
            >
              <h3 className="font-semibold text-gray-800">{role.label}</h3>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RoleSelect
