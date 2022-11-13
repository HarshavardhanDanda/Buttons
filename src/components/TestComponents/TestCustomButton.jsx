import React from 'react'
import { CustomButton } from '../atoms/CustomButton';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import CalculateIcon from '@mui/icons-material/Calculate';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const TestButton = () => {
  let [count, setCount] = useState(0)
  const handleClick = () => {
     setCount(count+1)
    }
  const navigate = useNavigate()
  const openCalculator = () => {
     navigate('/calculator')
  }
  const openWeather = () => {
    navigate('/weather')
 }
 const openTaskManager = () => {
  navigate('/tasks')
}
  return (
    <div>
      <CustomButton startIcon={<AccountCircleOutlinedIcon />} endIcon={<AddIcCallOutlinedIcon />} variant="outlined" style={{color:"red"}}
              onClick={handleClick} > Harsha is {count} years old</CustomButton>&nbsp;
      <CustomButton startIcon={<CalculateIcon />} variant="contained" color="primary"
              onClick={openCalculator} > Calculator </CustomButton>
      <CustomButton startIcon={<CalculateIcon />} variant="contained" color="secondary"
              onClick={openWeather} > Weather </CustomButton>
      <CustomButton startIcon={<CalculateIcon />} variant="contained" color="secondary"
              onClick={openTaskManager} > Task Manager </CustomButton>
    </div>
  )
}
