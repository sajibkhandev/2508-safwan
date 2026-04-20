import React from 'react'
import Container from '../components/Container'
import Button from '../components/Button'

const Banner = () => {
  return (
    <section className='group relative bg-primary py-[221px]'>
     <div  className='bg-banner bg-no-repeat bg-center bg-cover absolute top-0 right-0 w-0 h-full group-hover:w-5/12 duration-300'></div>
     <Container>
          <h1 className='relative z-10 text-[100px] text-white font-bold font-vol leading-[110px]'>Hello!<br />I’m Zarror Nibors</h1>
          <p className='w-[670px] text-xl text-[#ffffff80] font-jost font-normal pt-[14px] pb-[50px]'>I’am freelance <span className='text-white'>UI/UX Desogner</span> based in Indonesia who loves to craft attractive design experiences for the web.</p>
          <Button text="Contact Me"/>
     </Container>
    </section>
  )
}

export default Banner