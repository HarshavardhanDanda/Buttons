import React from 'react'
import { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import './HeaderDropDown.css'

export const HeaderDropDown = (props) => {
  const {items, children} = props
  const [value, setValue] = useState(false)

  const handleClick = () => {
    setValue(!value)
  }

  return (
    <div className='dropdown-div'>
        <button className='label' onClick={handleClick}>{children}{value ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}</button>
          {value && <div  className='options'> {Object.keys(items).map((name) => (
              <button className='options-button' onClick={items[name]}>{name}</button>
          ))}  
          </div>}
    </div>
  )
}
