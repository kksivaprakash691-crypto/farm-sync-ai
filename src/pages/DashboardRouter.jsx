import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import FarmerDashboard from '../dashboards/agriculture/FarmerDashboard'
import AgriOfficerDashboard from '../dashboards/agriculture/AgriOfficerDashboard'
import AgriLabTechDashboard from '../dashboards/agriculture/AgriLabTechDashboard'
import AgriProductSellerDashboard from '../dashboards/agriculture/AgriProductSellerDashboard'
import AgriToolsSellerDashboard from '../dashboards/agriculture/AgriToolsSellerDashboard'
import AgriMechanicDashboard from '../dashboards/agriculture/AgriMechanicDashboard'
import ConsumerDashboard from '../dashboards/consumer/ConsumerDashboard'
import WholesaleDealerDashboard from '../dashboards/consumer/WholesaleDealerDashboard'
import DeliveryPartnerDashboard from '../dashboards/supply-chain/DeliveryPartnerDashboard'
import WarehouseHandlerDashboard from '../dashboards/supply-chain/WarehouseHandlerDashboard'
import LogisticsManagerDashboard from '../dashboards/supply-chain/LogisticsManagerDashboard'
import RouteSupervisorDashboard from '../dashboards/supply-chain/RouteSupervisorDashboard'

function DashboardRouter() {
  const { role } = useAuthStore()

  const dashboardMap = {
    'farmer': <FarmerDashboard />,
    'agri-officer': <AgriOfficerDashboard />,
    'agri-lab-tech': <AgriLabTechDashboard />,
    'agri-product-seller': <AgriProductSellerDashboard />,
    'agri-tools-seller': <AgriToolsSellerDashboard />,
    'agri-mechanic': <AgriMechanicDashboard />,
    'house-usage': <ConsumerDashboard />,
    'restaurant': <ConsumerDashboard />,
    'cold-storage': <ConsumerDashboard />,
    'catering': <ConsumerDashboard />,
    'wholesale': <WholesaleDealerDashboard />,
    'delivery-partner': <DeliveryPartnerDashboard />,
    'warehouse-handler': <WarehouseHandlerDashboard />,
    'logistics-manager': <LogisticsManagerDashboard />,
    'route-supervisor': <RouteSupervisorDashboard />
  }

  return (
    <Routes>
      <Route path="/" element={dashboardMap[role] || <Navigate to="/" />} />
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  )
}

export default DashboardRouter
