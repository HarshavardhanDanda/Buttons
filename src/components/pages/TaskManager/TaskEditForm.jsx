import React from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
import './Tasks.css'
import { useState } from 'react';
import { useEffect } from 'react';

export const EditTaskForm = () => {
  const params = useParams()
  const navigate = useNavigate()
  const [data, setData] = useState({})
  const handleChangeTitle = (e) => {
      setData({...data, title: e.target.value})
  }
  const handleChangeDescription = (e) => {
    setData({...data, description: e.target.value})
  }
  const id = params.id
  useEffect(() => {
    const fetchData = async(id) => {
      const response = await axios.get(`http://localhost:8888/tasks/${id}`)
      const json = response.data
      setData(json)
    }
    fetchData(id);
  }, [])

  const handleSubmit = (id) => {
    const saveData = async() => {
      await axios.put(`http://localhost:8888/tasks/${id}`, data)
    }
    console.log(data)
    saveData();
    navigate('/tasks')
  }
  return (
    <div className='full-container'>
      <div className='heading'>Edit your Task Details</div>
        <form onSubmit={() => handleSubmit(data.id)}>
            <label>
                Update your Title:<div style={{height:"10px"}}></div>
                <input type="text" className='task-input' placeholder="Enter the task title"  onChange={handleChangeTitle} value={data.title}/>
            </label><br></br><br></br>
            <label>
                Update your Description:<div style={{height:"10px"}}></div>
                <textarea type="textarea" className='textarea' placeholder="Enter the task description" onChange={handleChangeDescription} value={data.description} />
            </label>
            <input className='task-submit' type="submit" value="Edit Task" />
        </form>
    </div>
  )
}
