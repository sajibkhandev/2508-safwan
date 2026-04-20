import React from 'react'

const Heading = ({text,className}) => {
  return (
    <h2 className={`text-[50px] text-primary font-vol font-medium ${className}`}>{text}</h2>
  )
}

export default Heading