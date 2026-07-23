import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({ employees: [], admin: [] })

  useEffect(() => {
    if (!getLocalStorage().employees || !getLocalStorage().admin) {
      setLocalStorage()
    }

    const { employees, admin } = getLocalStorage()
    setUserData({ employees, admin})
  }, [])

  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
