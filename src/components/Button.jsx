import React from 'react'

const Button = ({text,className}) => {
  return (
    <button className={`bg-secondary py-6 px-2  text-white text-lg font-jost font-medium ${className}`}><span className='border-2 border-white py-4 px-9'>{text}</span></button>
  )
}

export default Button