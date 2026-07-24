import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthStore } from './store/authStore'
import SplashScreen from './pages/SplashScreen'
import GetStarted from './pages/GetStarted'
import WhoAreYou from './pages/WhoAreYou'
import RoleSelect from './pages/RoleSelect'
import SubRoleSelect from './pages/SubRoleSelect'
import Registration from './pages/Registration'
import OTPVerification from './pages/OTPVerification'
import DashboardRouter from './pages/DashboardRouter'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const { isAuthenticated, showSplash, setShowSplash } = useAuthStore()

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [setShowSplash])

  return (
    <>
      <Router>
        <Routes>
          {showSplash && (
            <Route path="*" element={<SplashScreen />} />
          )}
          {!showSplash && !isAuthenticated && (
            <>
              <Route path="/" element={<GetStarted />} />
              <Route path="/who-are-you" element={<WhoAreYou />} />
              <Route path="/role-select" element={<RoleSelect />} />
              <Route path="/sub-role-select" element={<SubRoleSelect />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/otp-verification" element={<OTPVerification />} />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          )}
          {isAuthenticated && (
            <>
              <Route path="/dashboard/*" element={<DashboardRouter />} />
              <Route path="*" element={<Navigate to="/dashboard" />} />
            </>
          )}
        </Routes>
      </Router>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </>
  )
}

export default App
