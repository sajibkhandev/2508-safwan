import React from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Heading from '../components/Heading'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Vector from '../assets/voctor1.png'
import Avatar from '../assets/avatar.png'
import { FaStar } from 'react-icons/fa'


const Client = () => {
  return (
    <section className='pt-[127px] pb-[170px] bg-[#F9F4F1]'>
        <Container>
            <SubHeading className='text-center' text="Client Testimonial"/>
            <Heading className='text-center' text="Feedback From Client"/>
            <Flex className='justify-between'>
                
                <div className='w-[48%]'>
                <div className='relative shadow-lg mt-16 mb-10 z-10 w-full px-10 py-[30px] bg-white border-t-8 border-secondary'>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and this typesetting industry.</p>
                    <Image className='absolute -bottom-8 left-14' src={Vector}/>
                </div>

                <div className='flex items-center gap-x-8'>
                    <Image src={Avatar}/>
                    <div>
                        <h4 className='text-primary text-xl font-semibold font-vol'>Michale Doie</h4>
                        <p className='text-primary text-sm font-normal font-jost pt-1 pb-3'>Product Designer</p>
                        <ul className='flex items-center gap-x-1'>
                            <li><FaStar className='text-sm text-secondary'/></li>
                            <li><FaStar className='text-sm text-secondary'/></li>
                            <li><FaStar className='text-sm text-secondary'/></li>
                            <li><FaStar className='text-sm text-secondary'/></li>
                            <li><FaStar className='text-sm text-secondary'/></li>
                        </ul>

                    </div>
                </div>

                </div>
                <div className='w-[48%]'>
                <div className='relative shadow-lg mt-16 mb-10 z-10 w-full px-10 py-[30px] bg-white border-t-8 border-secondary'>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and this typesetting industry.</p>
                    <Image className='absolute -bottom-8 left-14' src={Vector}/>
                </div>

                <div className='flex items-center gap-x-8'>
                    <Image src={Avatar}/>
                    <div>
                        <h4 className='text-primary text-xl font-semibold font-vol'>Michale Doie</h4>
                        <p className='text-primary text-sm font-normal font-jost pt-1 pb-3'>Product Designer</p>
                        <ul className='flex items-center gap-x-1'>
                            <li><FaStar className='text-sm text-secondary'/></li>
                            <li><FaStar className='text-sm text-secondary'/></li>
                            <li><FaStar className='text-sm text-secondary'/></li>
                            <li><FaStar className='text-sm text-secondary'/></li>
                            <li><FaStar className='text-sm text-secondary'/></li>
                        </ul>

                    </div>
                </div>

                </div>
                
            </Flex>

        </Container>
    </section>
  )
}

export default Client