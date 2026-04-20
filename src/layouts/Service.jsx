import React from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Heading from '../components/Heading'
import Flex from '../components/Flex'
import CardService from '../components/CardService'
import IconOne from '../assets/service-icon.png'

const Service = () => {
  return (
    <section className='pt-[220px] pb-[120px]'>
     <Container>
          <SubHeading className='text-center' text="MY SERVICES"/>
          <Heading className="w-[517px] mx-auto text-center pt-3" text="Provide Wide Range of Digital Services"/>

        <Flex className="justify-between pt-10">
          
          <CardService icon={IconOne} title="Ui/Ux Design" text="Dolor repellendus tempo ribus aue quibusdam offi ciis debitis rerum na aibus minima veniam."/>
          <CardService icon={IconOne} title="Mobile App Design" text="Dolor repellendus tempo ribus aue quibusdam offi ciis debitis rerum na aibus minima veniam."/>
          <CardService icon={IconOne} title="Web Design" text="Dolor repellendus tempo ribus aue quibusdam offi ciis debitis rerum na aibus minima veniam."/>
        </Flex>
        
         
         
     </Container>
    </section>
  )
}

export default Service