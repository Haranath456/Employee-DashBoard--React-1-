import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashBoard from './components/dashBoard/EmployeeDashBoard'
import AdminDashBoard from './components/dashBoard/AdminDashBoard'
import { setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setuser] = useState(null)
  const authData = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    
  }, [authData])
  


  const handleLogin = (email, password) => {
    if( email == 'admin@example.com' && password == '456'){
      setuser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'Admin'}))
    }
    else if(authData && authData.employees.find((e) => email == e.email && password == e.password)){
      setuser('employee')
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'Employee'}))
    }
    else{
      alert('Invalid Credentials')
    }
  }

  

  return (
    <>
      {!user ? <Login handleLogin = {handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashBoard /> : <EmployeeDashBoard /> }
    </>
  )
}

export default App



