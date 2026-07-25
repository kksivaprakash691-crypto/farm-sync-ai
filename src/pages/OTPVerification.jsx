import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuthStore } from '../store/authStore'
import { ChevronLeft } from 'lucide-react'

function OTPVerification() {
  const navigate = useNavigate()
  const { user } = useAuthStore()
  const [otp, setOtp] = useState('')
  const [timeLeft, setTimeLeft] = useState(30)
  const [error, setError] = useState('')
  const [verified, setVerified] = useState(false)

  const mockOTP = '123456'

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const handleOtpChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 6)
    setOtp(value)
    setError('')
  }

  const handleVerify = () => {
    if (otp === mockOTP) {
      setVerified(true)
      setTimeout(() => {
        navigate('/dashboard')
      }, 1500)
    } else {
      setError('Invalid OTP. Try ' + mockOTP)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 p-4">
      <div className="max-w-md mx-auto mt-12">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => navigate('/registration')}
          className="flex items-center gap-2 text-primary-600 font-semibold mb-8 hover:text-primary-700"
        >
          <ChevronLeft size={20} />
          Back
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl font-bold text-gray-800">Verify OTP</h1>
          <p className="text-gray-600 mt-2">We've sent a code to your phone</p>
          {user?.mobileNumber && (
            <p className="text-sm text-gray-500 mt-1">+91 •••••••{user.mobileNumber.slice(-4)}</p>
          )}
        </motion.div>

        {!verified ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white rounded-lg p-6 shadow-lg space-y-6"
          >
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Enter OTP</label>
              <input
                type="text"
                value={otp}
                onChange={handleOtpChange}
                maxLength="6"
                className="w-full px-4 py-3 text-center text-2xl tracking-widest border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 font-mono"
                placeholder="000000"
              />
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>

            <div className="text-center">
              {timeLeft > 0 ? (
                <p className="text-sm text-gray-600">
                  OTP expires in <span className="font-bold text-primary-600">{timeLeft}s</span>
                </p>
              ) : (
                <p className="text-sm text-red-600">OTP has expired</p>
              )}
            </div>

            <button
              onClick={handleVerify}
              disabled={otp.length !== 6 || timeLeft === 0}
              className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Verify OTP
            </button>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                Didn't receive code? 
                <button
                  disabled={timeLeft > 0}
                  className="text-primary-600 font-semibold hover:text-primary-700 disabled:text-gray-400 ml-1"
                >
                  Resend
                </button>
              </p>
            </div>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-3 text-center">
              <p className="text-xs text-blue-600">Demo OTP: <strong>{mockOTP}</strong></p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg p-6 shadow-lg text-center"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-800">Verified!</h2>
            <p className="text-gray-600 mt-2">Redirecting to dashboard...</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default OTPVerification
