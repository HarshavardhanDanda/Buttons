import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { ActionButton } from './ActionButton.jsx'
import { Header } from "../../organisms/Header";
import './Tasks.css'
import { useNavigate } from 'react-router-dom';

export const TaskHistory = () => {
    const [data, setData] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    const fetchData = async() => {
      const response = await axios.get('http://localhost:8888/history')
      const tasks = response.data;
      setData(tasks)
    }
    fetchData();
  }, [])

  const taskManager = () => {
    navigate('/tasks')
  }

  const handleRestore = async(id) => {
    const response = await axios.get(`http://localhost:8888/history/${id}`)
    const json = response.data;
    await axios.post('http://localhost:8888/tasks', json )
    await axios.delete(`http://localhost:8888/history/${id}`)
    window.location.reload()
  }

  return (
    <div className='total-container'>
      <Header />
      <div className="outer-container">
        <div className='task-manager-heading'>
           Task History
           <ActionButton children="Go Back" className="history Button" onClick={() => taskManager()}/>
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
                        <ActionButton children="Restore" className="delete Button" onClick={() => handleRestore(task.id)}/>
                    </div>
                    </td>
                  </tr>
                )
              }))}
          </tbody>
          </table>
      </div>
    </div>
  )
}
