import React from 'react'
import Container from '../components/Container'
import Button from '../components/Button'

const Banner = () => {
  return (
    <section className='px-3 md:px-0 group relative bg-primary py-[100px] md:py-[221px]'>
     <div  className='hidden md:block bg-banner bg-no-repeat bg-center bg-cover absolute top-0 right-0 w-0 h-full group-hover:w-5/12 duration-300'></div>
     <Container>
          <h1 className='text-center text-4xl sm:text-5xl md:text-[100px] md:text-left relative z-10 text-white font-bold font-vol leading-[58px] md:leading-[110px]'>Hello!<br />I’m Zarror Nibors</h1>
          <p className='md:w-[670px] text-center md:text-left text-xl text-[#ffffff80] font-jost font-normal pt-[14px] pb-[50px]'>I’am freelance <span className='text-white'>UI/UX Desogner</span> based in Indonesia who loves to craft attractive design experiences for the web.</p>
          <div className='text-center md:text-left'>
            <Button text="Contact Me"/>
          </div>
     </Container>
    </section>
  )
}

export default Banner