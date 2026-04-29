import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import Button from '../components/Button'
import ContactImage from '../assets/contact.png'

const Contant = () => {
  return (
    <section className='py-[120px] px-3 md:px-0'>
     <Container>
          <Flex className="flex-wrap">
               <div className='md:w-5/12'>
               <Image className='mx-auto w-[60%] md:w-auto' src={ContactImage}/>
               </div>
               <div className='md:w-7/12 pt-10 md:pt-0'>
                         <SubHeading text="Get In Touch"/>
                         <Heading text="Feel Free to Contact"/>

                        <Flex className='flex-wrap justify-between gap-y-14 '>
                          <input className='w-full md:w-[46%] outline-none border-b border-[#00413d66] py-3 ' type="text" placeholder='Enter Name'/>
                         <input className='w-full md:w-[46%] outline-none border-b border-[#00413d66] py-3 ' type="text" placeholder='Enter Email'/>
                         <input className='w-full md:w-[46%] outline-none border-b border-[#00413d66] py-3 ' type="text" placeholder='Phone'/>
                         <input className='w-full md:w-[46%] outline-none border-b border-[#00413d66] py-3 ' type="text" placeholder='Password'/>
                         <input className='w-full outline-none border-b border-[#00413d66] py-3 ' type="text" placeholder='Subject'/>
                      
                        </Flex>
                         <Button className='mt-12' text={`Contact Us`}/>
               </div>
          </Flex>
     </Container>
     </section>

  )
}

export default Contant