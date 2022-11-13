import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'
import { useState } from 'react'

export const DropDown = () => {
  const [val, setVal] = useState(0)
  const handleChange = (event) => {
    setVal(event.target.value)
  }
  return (
    <div>
        <FormControl style={{width: "300px"}}>
            <InputLabel>Age</InputLabel>
            <Select label="Age" onChange={handleChange} >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={100}>One Hundred</MenuItem>
            </Select>
        </FormControl>
        <div> You selected the value {val} </div>
    </div>
  )
}
