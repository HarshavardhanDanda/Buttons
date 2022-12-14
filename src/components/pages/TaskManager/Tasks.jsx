import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { ActionButton } from './ActionButton.jsx'
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { Header } from "../../organisms/Header";
import './Tasks.css'

export const Tasks = () => {
  const navigate = useNavigate();
  
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async() => {
      const response = await axios.get('http://localhost:8888/tasks')
      const tasks = response.data;
      setData(tasks)
    }
    fetchData();
  }, [])

  const handleCreate = () => {
    navigate(`/tasks/create`)
  }

  const handleEdit = (id) => {
    navigate(`/tasks/edit/${id}`)
  }
  
  const handleDone = async(id) => {
    const response = await axios.get(`http://localhost:8888/tasks/${id}`)
    const json = response.data
    await axios.post(`http://localhost:8888/history`,json )
    await axios.delete(`http://localhost:8888/tasks/${id}`)
    window.location.reload()
  }

  const showHistory = () => {
    navigate('/tasks/history')
  }

  return (
    <div className='total-container'>
      <Header />
      <div className="outer-container">
        <div className='task-manager-heading'>
           Welcome to Task Manager 
           <ActionButton children="History" className="history Button" onClick={() => showHistory()}/>
        </div>
        <table>
          <thead>
              <tr>
                  <th>S.No</th>
                  <th>Task Title</th>
                  <th>Description</th>
                  <th>Added at</th>
                  <th>Actions</th>
              </tr>
          </thead>
          <tbody>
              {(data && data.length>0) && (data.map((task, i) => {
                i=i+1
                return(
                  <tr>
                    <td>{i}</td>
                    <td>{task.title}</td>
                    <td>{task.description}</td>
                    <td>{task.timestamp}</td>
                    <td>
                      <div style={{display: "flex", width: "200px", justifyContent: "space-around"}}>
                        <ActionButton children="Edit" className="edit Button" onClick={() => handleEdit(task.id)}/>
                        <ActionButton children="Done" className="delete Button" onClick={() => handleDone(task.id)}/>
                    </div>
                    </td>
                  </tr>
                )
              }))}
              <tr>
                <td  colSpan={5} className="create-task" onClick={() => handleCreate()}><span className="create-children"><AddIcon/>Create new Task</span></td>
              </tr>
          </tbody>
          </table>
      </div>
    </div>
  )
}
