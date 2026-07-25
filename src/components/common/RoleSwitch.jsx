import React, { useState } from 'react'
import { useAuthStore } from '../../store/authStore'
import { Users, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

function RoleSwitch() {
  const { role, userType, setRole, switchRole } = useAuthStore()
  const [isOpen, setIsOpen] = useState(false)

  const roles = {
    agriculture: [
      { id: 'farmer', label: 'Farmer' },
      { id: 'agri-officer', label: 'Agri Officer' },
      { id: 'agri-lab-tech', label: 'Lab Tech' },
      { id: 'agri-product-seller', label: 'Product Seller' }
    ],
    consumer: [
      { id: 'house-usage', label: 'House Usage' },
      { id: 'restaurant', label: 'Restaurant' },
      { id: 'wholesale', label: 'Wholesale' }
    ],
    'supply-chain': [
      { id: 'delivery-partner', label: 'Delivery' },
      { id: 'warehouse-handler', label: 'Warehouse' },
      { id: 'logistics-manager', label: 'Logistics' }
    ]
  }

  const availableRoles = roles[userType] || []

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white bg-opacity-20 hover:bg-opacity-30 px-3 py-2 rounded-lg transition flex items-center gap-2"
      >
        <Users size={18} />
        <span className="text-sm font-semibold">{role}</span>
        <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl z-50 min-w-max"
          >
            {availableRoles.map((r) => (
              <button
                key={r.id}
                onClick={() => {
                  switchRole(r.id, r.id)
                  setIsOpen(false)
                }}
                className={`w-full text-left px-4 py-2 hover:bg-primary-100 transition ${
                  role === r.id ? 'bg-primary-600 text-white font-semibold' : 'text-gray-800'
                }`}
              >
                {r.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default RoleSwitch
