import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

function GetStarted() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="w-32 h-32 mx-auto mb-8 bg-white rounded-full flex items-center justify-center shadow-lg">
          <div className="text-6xl">🌾</div>
        </div>
        <h1 className="text-4xl font-bold text-primary-700 mb-4">FARM SYNC AI</h1>
        <p className="text-lg text-gray-600 mb-2">Smart Agriculture Platform</p>
        <p className="text-sm text-gray-500">Connecting farmers, agriculture experts, and consumers</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="w-full max-w-md"
      >
        <button
          onClick={() => navigate('/who-are-you')}
          className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all"
        >
          Get Started
          <ArrowRight size={20} />
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-12 text-center text-sm text-gray-600 max-w-md"
      >
        <p className="mb-4">Join India's smart agriculture ecosystem:</p>
        <div className="flex justify-around gap-4">
          <div className="text-center">
            <div className="text-2xl mb-2">👨‍🌾</div>
            <p className="text-xs">Farmers</p>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">🏪</div>
            <p className="text-xs">Consumers</p>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">🚚</div>
            <p className="text-xs">Supply Chain</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default GetStarted
