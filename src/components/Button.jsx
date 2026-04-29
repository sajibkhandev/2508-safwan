import React from 'react'

const Button = ({text,className}) => {
  return (
    <button className={`bg-secondary py-4 px-1.5 md:py-6 md:px-2  text-white text-base md:text-lg font-jost font-medium ${className}`}><span className='border-2 border-white py-2 px-4 md:py-4 md:px-9'>{text}</span></button>
  )
}

export default Button