import React from 'react'
import { motion } from 'framer-motion'
import { LogOut } from 'lucide-react'
import { useAuthStore } from '../../store/authStore'
import RoleSwitch from '../../components/common/RoleSwitch'

function WarehouseHandlerDashboard() {
  const { user, logout } = useAuthStore()

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      logout()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-4 fixed top-0 w-full z-40 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold">🏭 Warehouse Handler</h1>
            <p className="text-sm text-primary-100">Welcome, {user?.name}</p>
          </div>
          <div className="flex items-center gap-3">
            <RoleSwitch />
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 p-2 rounded-lg transition"
            >
              <LogOut size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-20 max-w-6xl mx-auto p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6"
        >
          <div className="bg-white rounded-lg p-4 shadow-md">
            <p className="text-sm text-gray-600">Storage Units</p>
            <p className="text-3xl font-bold text-primary-600">42</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md">
            <p className="text-sm text-gray-600">Occupancy</p>
            <p className="text-3xl font-bold text-green-600">78%</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md">
            <p className="text-sm text-gray-600">Inbound</p>
            <p className="text-3xl font-bold text-blue-600">15</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md">
            <p className="text-sm text-gray-600">Outbound</p>
            <p className="text-3xl font-bold text-yellow-600">23</p>
          </div>
        </motion.div>

        <div className="bg-white rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Warehouse Management</h2>
          <p className="text-gray-600">Manage inventory and storage units</p>
        </div>
      </div>
    </div>
  )
}

export default WarehouseHandlerDashboard
