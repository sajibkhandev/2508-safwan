import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import ListItem from '../components/ListItem'
import Button from '../components/Button'
import Logo from '../assets/logo.png'

const Navber = () => {
  return (
    <nav className='py-4'>
        <Container>
            <Flex className="justify-between items-center">
                <div>
                    <Image src={Logo} alt="logo image"/>
                </div>
                <div>
                    <ul className='flex gap-x-12'>
                        <ListItem text="Home"/>
                        <ListItem text="Pages"/>
                        <ListItem text="Services"/>
                        <ListItem text="Blog"/>
                        <ListItem text="Contact"/>
                    </ul>

                </div>
                 <div>
                    <Button text="Download CV"/>
                 </div>
            </Flex>

        </Container>
    </nav>
  )
}

export default Navber