import { FormControl, InputLabel, MenuItem,Select } from '@mui/material'
import React from 'react'

export const CustomDropDown = (props) => {
  let {Label, style, items, onChange, children, className} = props
  return (
    <div>
        <FormControl >
            <InputLabel>{Label}</InputLabel>
            <Select style={style} label={Label} onChange={onChange}>
            {items.map((item) => (
                <MenuItem key={item.key} value={item.value}>{item.key}</MenuItem>
            ))}
            </Select>
        </FormControl>
        <div className={className}>{children}</div>
    </div>
  )
}
