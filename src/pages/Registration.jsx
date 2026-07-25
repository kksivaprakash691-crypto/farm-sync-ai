import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuthStore } from '../store/authStore'
import { ChevronLeft, Upload } from 'lucide-react'

function Registration() {
  const navigate = useNavigate()
  const { role, userType, setUser } = useAuthStore()
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    mobileNumber: '',
    yearsInAgriculture: '',
    address: '',
    addressProof: '',
    agriCard: '',
    govtId: '',
    businessLicense: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileUpload = (e, fieldName) => {
    const file = e.target.files[0]
    if (file) {
      setFormData((prev) => ({ ...prev, [fieldName]: file.name }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.name || !formData.mobileNumber || !formData.address) {
      alert('Please fill all required fields')
      return
    }

    setUser({
      name: formData.name,
      mobileNumber: formData.mobileNumber,
      role,
      userType
    })

    navigate('/otp-verification')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 p-4">
      <div className="max-w-2xl mx-auto">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => navigate('/sub-role-select')}
          className="flex items-center gap-2 text-primary-600 font-semibold mb-8 hover:text-primary-700"
        >
          <ChevronLeft size={20} />
          Back
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-800">Register</h1>
          <p className="text-gray-600 mt-2">Complete your profile to continue</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-lg p-6 shadow-lg space-y-4"
        >
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
              placeholder="Enter your full name"
              required
            />
          </div>

          {userType === 'agriculture' && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Age *</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
                placeholder="Enter your age"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Mobile Number *</label>
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
              placeholder="Enter 10 digit mobile number"
              maxLength="10"
              required
            />
          </div>

          {role === 'farmer' && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Years in Agriculture *</label>
              <input
                type="number"
                name="yearsInAgriculture"
                value={formData.yearsInAgriculture}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
                placeholder="Enter years"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Address *</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
              placeholder="Enter your address"
              rows="3"
              required
            />
          </div>

          {(userType === 'agriculture' || (userType === 'consumer' && role !== 'house-usage')) && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Address Proof *</label>
              <div className="flex items-center gap-3">
                <input
                  type="file"
                  id="addressProof"
                  onChange={(e) => handleFileUpload(e, 'addressProof')}
                  className="hidden"
                  accept="image/*,.pdf"
                />
                <label
                  htmlFor="addressProof"
                  className="flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-lg cursor-pointer hover:bg-primary-200 transition"
                >
                  <Upload size={18} />
                  {formData.addressProof ? 'File Selected' : 'Upload'}
                </label>
                {formData.addressProof && <span className="text-sm text-gray-600">{formData.addressProof}</span>}
              </div>
            </div>
          )}

          {role === 'farmer' && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Agri Card Photo *</label>
              <div className="flex items-center gap-3">
                <input
                  type="file"
                  id="agriCard"
                  onChange={(e) => handleFileUpload(e, 'agriCard')}
                  className="hidden"
                  accept="image/*"
                />
                <label
                  htmlFor="agriCard"
                  className="flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-lg cursor-pointer hover:bg-primary-200 transition"
                >
                  <Upload size={18} />
                  {formData.agriCard ? 'File Selected' : 'Upload'}
                </label>
                {formData.agriCard && <span className="text-sm text-gray-600">{formData.agriCard}</span>}
              </div>
            </div>
          )}

          {(role === 'agri-officer' || role === 'agri-lab-tech') && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Government ID *</label>
              <div className="flex items-center gap-3">
                <input
                  type="file"
                  id="govtId"
                  onChange={(e) => handleFileUpload(e, 'govtId')}
                  className="hidden"
                  accept="image/*,.pdf"
                />
                <label
                  htmlFor="govtId"
                  className="flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-lg cursor-pointer hover:bg-primary-200 transition"
                >
                  <Upload size={18} />
                  {formData.govtId ? 'File Selected' : 'Upload'}
                </label>
                {formData.govtId && <span className="text-sm text-gray-600">{formData.govtId}</span>}
              </div>
            </div>
          )}

          {(role === 'agri-product-seller' || role === 'agri-tools-seller' || role === 'agri-mechanic' || (userType === 'consumer' && role !== 'house-usage')) && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Business License *</label>
              <div className="flex items-center gap-3">
                <input
                  type="file"
                  id="businessLicense"
                  onChange={(e) => handleFileUpload(e, 'businessLicense')}
                  className="hidden"
                  accept="image/*,.pdf"
                />
                <label
                  htmlFor="businessLicense"
                  className="flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-lg cursor-pointer hover:bg-primary-200 transition"
                >
                  <Upload size={18} />
                  {formData.businessLicense ? 'File Selected' : 'Upload'}
                </label>
                {formData.businessLicense && <span className="text-sm text-gray-600">{formData.businessLicense}</span>}
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all mt-6"
          >
            Continue to OTP
          </button>
        </motion.form>
      </div>
    </div>
  )
}

export default Registration
