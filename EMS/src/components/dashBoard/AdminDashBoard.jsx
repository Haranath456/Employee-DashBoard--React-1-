import React from 'react'
import './AdminDashBoard.css'

const AdminDashBoard = () => {
  return (
    <div className='AdminDashBoardparentBody'>

        <div className='AdminHeader'>
            <h1><span>Hello</span> <br/>Haranath 👋</h1>
            <button className='AdminLogOutbtn'>Log Out</button>
        </div>

        <div className='AdminTaskCreateDiv'>
            <form>
                <div className='AdminTaskCreateDivleft'>
                    <label htmlFor="text">Task Title</label>
                    <input type="text" placeholder='Enter Task Title' required/>
                    <label htmlFor="Date">Date</label>
                    <input type="Date" required />
                    <label htmlFor="text">Assign To</label>
                    <input type="text" placeholder='Enter Employee Name' required />
                    <label htmlFor="text">Category</label>
                    <input type="text" placeholder='Design, Dev, etc...,'/>
                </div>
                <div className='AdminTaskCreateDivright'>
                    <label htmlFor="description"></label>
                    <textarea id="description"></textarea>
                    <button className=''>Create Task</button>
                </div>
            </form>
        </div>

        <div className='AdminTaskCardContainer'>
            <h1>Task Assigned</h1>
            <div className='AdminTaskCard'>
                <h3>Employee</h3>
                <h3>Task</h3>
                <h3>Category</h3>
                <h3>Date</h3>
            </div>
            
        </div>

    </div>
  )
}

export default AdminDashBoard
