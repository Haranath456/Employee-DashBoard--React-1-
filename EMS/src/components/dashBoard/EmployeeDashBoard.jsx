import React from 'react'
import './EmployeeDashBoard.css'

const EmployeeDashBoard = () => {
  return (
    <div className='EmployeeDashBoardparentBody'>

      <div className='EmployeeHeader'>
        <h1><span>Hello</span> <br/>Haranath 👋</h1>
        <button className='EmployeeLogOutbtn'>Log Out</button>
      </div>

      <div className='EmployeeTaskCouterDiv'>
        <div className='EmployeeTaskCounterCard' style={{ backgroundColor: 'blue'}}>
          <h1>0</h1>
          <h2>New Task</h2>
        </div>
        <div className='EmployeeTaskCounterCard'style={{ backgroundColor: 'green'}}>
          <h1>0</h1>
          <h2>New Task</h2>
        </div>
        <div className='EmployeeTaskCounterCard' style={{ backgroundColor: 'orange'}}>
          <h1>0</h1>
          <h2>New Task</h2>
        </div>
        <div className='EmployeeTaskCounterCard' style={{ backgroundColor: 'red'}}>
          <h1>0</h1>
          <h2>New Task</h2>
        </div>
      </div>

      <hr />

      <div className='EmployeeTaskDiv'>
        <div className='EmployeeTaskCard'>
          <div className='EmployeeTaskCardContent'>
            <div className='EmployeeTaskCardHead'>
              <h2>High</h2>
              <h3>20 Feb 2024</h3>
            </div>
            <h1>HAO</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elitt. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, quia! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, voluptates.</p>
          </div>
        </div>       
      </div>

      
    </div>
  )
}

export default EmployeeDashBoard
