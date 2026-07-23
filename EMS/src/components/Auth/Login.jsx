import React, { useState } from 'react'
import './Login.css'

const Login = ({handleLogin}) => {


  const [Mail, setMail] = useState('')
  const [Password, setPassword] = useState('')


  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(Mail, Password)
    setMail('')
    setPassword('')
  }

  return (
    <div className='parentDivForm'>
      <div className='formDiv'>
        <div className='loginText'>
            <h3>Login to your account</h3>
            <p>Enter your email to login to your account</p>
        </div>
        <form
          onSubmit = {(e) => {
            submitHandler(e)
          }}
        >
            <label htmlFor="email">Email</label>
            <input
            value={Mail}
            onChange={(e) => {
              setMail(e.target.value)
            }}
            type="email" id="email" placeholder="Enter Your Email" required />
            <label htmlFor="password">Password</label>
            <input
            value={Password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            type="password" id="password" placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
