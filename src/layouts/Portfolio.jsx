import React from 'react'
import Container from '../components/Container'

import SubHeading from '../components/SubHeading'
import Heading from '../components/Heading'
import Flex from '../components/Flex'
import ListItem from '../components/ListItem'
import Image from '../components/Image'
import BannerImage from '../assets/banner.jpg'
import { GoArrowRight } from 'react-icons/go'
import CardPortfolio from '../components/CardPortfolio'
const Portfolio = () => {
     return (
          <section>
               <Container>
                    <SubHeading className='text-center' text="My Portfolio" />
                    <Heading className='text-center' text="My Work Example" />

                    <ul className='flex justify-center gap-x-6 mb-10'>

                         <ListItem text="All" />
                         <ListItem text="Branding" />
                         <ListItem text="Photography" />
                         <ListItem text="Fashion" />
                         <ListItem text="Product" />
                    </ul>
                    <Flex className='flex-wrap gap-[30px]'>
                         <CardPortfolio />
                         <CardPortfolio />
                         <CardPortfolio />
                         <CardPortfolio />
                        
                    </Flex>

               </Container>
          </section>
     )
}

export default Portfolio