import { create } from 'zustand'

export const useAuthStore = create((set) => ({
  isAuthenticated: false,
  showSplash: true,
  user: null,
  role: null,
  subRole: null,
  userType: null,
  setShowSplash: (show) => set({ showSplash: show }),
  setUserType: (type) => set({ userType: type }),
  setRole: (role) => set({ role }),
  setSubRole: (subRole) => set({ subRole }),
  setUser: (user) => set({ user, isAuthenticated: true }),
  logout: () => set({ isAuthenticated: false, user: null, role: null, subRole: null, userType: null }),
  switchRole: (role, subRole) => set({ role, subRole })
}))
