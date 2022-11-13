import React, { useState } from 'react'
import { CustomDropDown } from '../atoms/CustomDropDown'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    dropdown:{
        color: "red"
    }
})

export const TestDropDown = () => {
  const [val, setVal] = useState(0)
  const handleChange = (event) => {
      setVal(event.target.value)
  }
  const styles= useStyles();

  return (
    <CustomDropDown Label="DropDown" style={{width: "300px", color: "blue", borderRadius: "25px", paddingLeft:"100px"}} onChange={handleChange} className={styles.dropdown}
            items ={[
                {key: "First" , value: 10},
                {key: "Second" , value: 20},
                {key: "Third" , value: 30},
            ]}
    >You Selected the value {val}</CustomDropDown>
  )
}
