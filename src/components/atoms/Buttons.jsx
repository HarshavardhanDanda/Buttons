import React, { useState } from 'react'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { Button } from '@material-ui/core';


const styles = {
  color: "red",
  backgroundColor: "black"
}

export const Buttons = () => {

  const [val, setVal] = useState(1)
  const [orient, setOrient] = useState(true)
  const [rotate, setRotate] = useState({
    transform: "rotate(0deg)"
  })
  const handleClick = () => {
    setVal(val+1)
  }
  const handleOrient = () => {
    if(orient) {
      setOrient(false)
    }else{
      setOrient(true)
    }
  }

  const handleRotation = () => {
    if(orient){
      setRotate({
        transform: "rotate(180deg)"
       })
    }else{
      setRotate({
        transform: "rotate(0deg)"
       })
    }  
  }

  return (
    <div>
        <Button variant="outlined" onClick={handleClick}> Useless Button  - <b>{val}</b> </Button><br></br>
        <Button variant="contained" style={styles} onClick={() => {handleRotation();handleOrient()}}> Useless Button  - <ExpandMoreRoundedIcon style={rotate}/> </Button><br></br>
    </div>
  )
}
