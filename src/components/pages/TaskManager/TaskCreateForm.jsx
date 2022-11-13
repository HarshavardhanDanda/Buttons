import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './Tasks.css'
import { useState, useEffect } from 'react';

export const CreateTaskForm = () => {
  const navigate = useNavigate();
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()}/${current.getFullYear()}  ${current.getHours()}:${current.getMinutes()}`
  const [data, setData] = useState({})
  const handleSubmit = () => {
    const saveData = async() => {
        await axios.post(`http://localhost:8888/tasks`, data)
    }
    saveData()
    navigate('/tasks')
  }
  const handleChangeTitle = (e) => {
     setData({...data, title: e.target.value, timestamp: date})
  }
  const handleChangeDescription = (e) => {
    setData({...data, description: e.target.value, timestamp: date})
 }
  return (
    <div className='full-container'>
      <div className='heading'>Enter your Task Details</div>
        <form onSubmit={() => handleSubmit()}>
            <label>
                Title:<div style={{height:"10px"}}></div>
                <input type="text" className='task-input' placeholder="Enter the task title"  onChange={handleChangeTitle}/>
            </label><br></br><br></br>
            <label>
                Description:<div style={{height:"10px"}}></div>
                <textarea type="textarea" className='textarea' placeholder="Enter the task description" onChange={handleChangeDescription} />
            </label>
            <input className='task-submit' type="submit" value="Add Task" />
        </form>
    </div>
  )
}
