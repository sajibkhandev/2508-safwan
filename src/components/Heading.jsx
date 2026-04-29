import React from 'react'

const Heading = ({text,className}) => {
  return (
    <h2 className={`text-4xl md:text-[50px] leading-[40px] md:leading-[60px] text-primary font-vol font-medium ${className}`}>{text}</h2>
  )
}

export default Heading