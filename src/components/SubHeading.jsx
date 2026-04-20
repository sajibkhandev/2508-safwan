import React from 'react'

const SubHeading = ({text,className}) => {
  return (
     <h4 className={`text-lg text-secondary font-medium font-vol ${className}`}>{text}</h4>
  )
}

export default SubHeading