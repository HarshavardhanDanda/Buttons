import React from 'react'
import { Logo } from "../atoms/Logo";
import { makeStyles } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { HeaderDropDown } from '../atoms/HeaderDropDown/HeaderDropDown';

const useStyles = makeStyles({
    html:{
      scrollBehavior: "smooth"
    },
    button:{
      "&:hover": {color:'red', cursor:"pointer"},
      width: 100,
      height: 35,
      border: "none",
      borderRadius: 5,
      backgroundColor: "#ffffff"
    },
    buttonText:{
      fontSize: 17,
      fontStyle: "Verdana"
    },
    block1:{
      position: "relative",
      // top: 0,
      padding: "0px 20px",
      backgroundColor: "#ffffff",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottomColor: "#ededed",
      borderBottomStyle: "solid",
      borderBottomWidth: 2,
    },
    block2:{
      width: 700,
      height: 70,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center"
    },
    searchIcon:{
      "&:hover": {cursor:"pointer"},
      color: "red",
      position: "relative",
    },
    transition:{
      "&.enter":{
        borderBottom: "none",
        width: 0
      },
      "&.enter-active":{
        width: 130,
        borderBottom: 2,
        borderBottomColor: "red",
        borderBottomStyle: "solid",
        transition: "width 100ms linear"
      },
      "&.enter-done":{
        borderBottom: 2,
        borderBottomColor: "red",
        borderBottomStyle: "solid",
      },
      "&.exit":{
        width: 130,
        borderBottom: 2,
        borderBottomColor: "red",
        borderBottomStyle: "solid",
      },
      "&.exit-active":{
        width: 0,
        borderBottom: 2,
        borderBottomColor: "red",
        borderBottomStyle: "solid",
        transition: "width 100ms linear"
      },
      '&::placeholder': {
        fontStyle:"Verdana",
        color:"red",
        fontWeight:600,
      }
    }
})
export const Header = (props) => {
  const navigate = useNavigate()
  const calculatorPage = () => {
    navigate('/calculator')
  }
  const weatherPage = () => {
    navigate('/weather')
  }
  const tasksPage = () => {
    navigate('/tasks')
  }
  const items = {
    "Calculator": calculatorPage,
    "Weather": weatherPage,
    "Task Manager": tasksPage
  }
  const classes = useStyles();
  const [searchState, setSearchState] = useState(false)

  const handleSearch = () => {
    console.log(searchState)
    if(searchState){
      setSearchState(false)
    }else{
      setSearchState(true)
    }
  }
  
  return (
      <div className={classes.block1}>
        <Logo />
        <div className={classes.block2}>
          <button className={classes.button}><span className={classes.buttonText} onClick={()=>{navigate('/')}}> Home</span></button>
          <HeaderDropDown items={items}>Applications</HeaderDropDown>
          <button className={classes.button}><span className={classes.buttonText}> Button3</span></button>
          <button className={classes.button}><span className={classes.buttonText}> Button4</span></button>
          <button className={classes.button}><span className={classes.buttonText}> Button5</span></button>
          <CSSTransition in={searchState} timeout={100} className={classes.transition} unmountOnExit>
            <input type="text"  placeholder="Search for button"/>
          </CSSTransition>
          <SearchIcon className={classes.searchIcon} onClick={handleSearch}/>
        </div>
      </div>
  )
}
