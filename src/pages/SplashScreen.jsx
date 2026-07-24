import React from 'react'
import { motion } from 'framer-motion'

function SplashScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-600 via-secondary-500 to-primary-700 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center"
      >
        <motion.div
          animate={{ rotateZ: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          className="mb-8 inline-block"
        >
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl">
            <div className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
              🌾
            </div>
          </div>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl font-bold text-white mt-8"
        >
          FARM SYNC AI
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-white text-opacity-80 mt-4"
        >
          Smart Agriculture Platform for India
        </motion.p>
      </motion.div>
    </div>
  )
}

export default SplashScreen
