import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './Calculator.css'
import React from 'react'
import { useState } from 'react';
import { Header } from '../../organisms/Header';

export const Calculator = () => {

  const [val, setVal] = useState('')
  const [ans, setAns] = useState(0)
  const handleChange = (e) => {
    setVal(e.target.value)
  }
  // when we click click enter, we calculate result
  const clickEnter = (e) => {
    if(e.key === 'Enter'){
      setAns(eval(val))
    }
  }
  return (
    <div>
      <Header />
    <div className='main-container'>
      <div className='heading'>Simple Calculator</div>
      <div className='calc-screen'>
        <div className='input-block'><input type="text" placeholder='Enter the Input' value={val} onChange={handleChange} onKeyDown={clickEnter}/></div>
        <div className='result-block'>Result: {ans}</div>
      </div>
      <div className="calc-container">
          <button className="button" onClick={() => {setVal(val+"1")}}><text className='text'>1</text></button>
          <button className="button" onClick={() => {setVal(val+"2")}}><text className='text'>2</text></button>
          <button className="button" onClick={() => {setVal(val+"3")}}><text className='text'>3</text></button>
          <button className="button" onClick={() => {setVal(val+"4")}}><text className='text'>4</text></button>
          <button className="button" onClick={() => {setVal(val+"5")}}><text className='text'>5</text></button>
          <button className="button" onClick={() => {setVal(val+"6")}}><text className='text'>6</text></button>
          <button className="button" onClick={() => {setVal(val+"7")}}><text className='text'>7</text></button>
          <button className="button" onClick={() => {setVal(val+"8")}}><text className='text'>8</text></button>
          <button className="button" onClick={() => {setVal(val+"9")}}><text className='text'>9</text></button>
          <button className="button" onClick={() => {setVal(val+"0")}}><text className='text'>0</text></button>
          <button className="special-button" onClick={() => {setVal(val+"+")}}><text className='text' style={{color:'black'}}>+</text></button>
          <button className="special-button" onClick={() => {setVal(val+"-")}}><text className='text' style={{color:'black'}}>-</text></button>
          <button className="special-button" onClick={() => {setVal(val+"*")}}><text className='text' style={{color:'black'}}>*</text></button>
          <button className="special-button" onClick={() => {setVal(val+"/")}}><text className='text' style={{color:'black'}}>%</text></button>
          <button className="button" onClick={() => {setVal(val.substring(0, val.length-1))}}><text className='backIcon'><ArrowBackIosIcon style={{ fontSize: 13, color: "white" }}/></text></button>
          <button className="button" onClick={() => {setVal("");setAns(0)}}><text className='text'>CLR</text></button>
          <button className="button" onClick={() => {setVal(val+".")}}><text className='text'>.</text></button>
          <button className="button" onClick={() => {setAns(eval(val));console.log(ans)}} style={{flexGrow: 4}}><text className='text'>=</text></button>
      </div>
    </div>
    </div>
  )
}
