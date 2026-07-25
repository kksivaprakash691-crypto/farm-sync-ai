import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuthStore } from '../store/authStore'
import { ChevronLeft } from 'lucide-react'

function SubRoleSelect() {
  const navigate = useNavigate()
  const { role, setSubRole } = useAuthStore()

  const handleSelectSubRole = (subRoleId) => {
    setSubRole(subRoleId)
    navigate('/registration')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 p-4">
      <div className="max-w-2xl mx-auto">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => navigate('/role-select')}
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
          <h1 className="text-3xl font-bold text-gray-800">Confirm Your Role</h1>
          <p className="text-gray-600 mt-2">Role: <span className="font-semibold text-primary-600">{role}</span></p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-white rounded-lg p-6 shadow-lg"
        >
          <p className="text-gray-700 mb-6">You are registering as a <strong>{role}</strong>. Click continue to proceed with registration.</p>
          <button
            onClick={() => handleSelectSubRole(role)}
            className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            Continue
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default SubRoleSelect
