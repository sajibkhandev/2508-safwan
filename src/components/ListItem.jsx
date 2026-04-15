import React from 'react'

const ListItem = ({text,className}) => {
  return (
    <li className={`text-lg text-primary font-normal font-jost hover:text-secondary duration-300 cursor-pointer ${className}`}>{text}</li>
  )
}

export default ListItem