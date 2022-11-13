import React from 'react'
import { Button } from '@material-ui/core'

export const CustomButton = (props) => {
  let {startIcon, endIcon, variant, style, children, onMouseEnter, onMouseLeave, onClick, className,disabled, color} = props
  return (
    <Button startIcon={startIcon} endIcon={endIcon} variant={variant} style={style} color={color}
             onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick}
             className={className} disabled={disabled}> {children} </Button>
  )
}
