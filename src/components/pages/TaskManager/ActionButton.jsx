import React from 'react'

export const ActionButton = (props) => {
  let {children, className, onClick} = props;
  return (
    <button className={className} onClick={onClick}>{children}</button>
  )
}
