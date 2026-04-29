import Container from "../components/Container";
import Image from "../components/Image";
import Flex from "../components/Flex";
import FooterLogo from "../assets/footerlogo.png";
import React from "react";
import ListItem from "../components/ListItem";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary pt-[150px] pb-[100px]">
      <Container>
       <Flex className="flex-col items-center">
         <Image className='w-20' src={FooterLogo} />
         <ul className="flex gap-x-7 justify-center pt-[60px] pb-[50px]">
            <ListItem className='text-white border-r border-secondary pr-7' text="home"/>
            <ListItem className='text-white border-r border-secondary pr-7' text="home"/>
            <ListItem className='text-white border-r border-secondary pr-7' text="home"/>
            <ListItem className='text-white border-r border-secondary pr-7' text="home"/>
            <ListItem className='text-white ' text="home"/>
         </ul>

         <Flex className='justify-center gap-x-5 border-b  border-white pb-20 w-full'>
            <div className="w-[60px] h-[60px] bg-secondary rounded-full flex justify-center items-center">
            <FaInstagram  className="text-lg text-white"/>
            </div>
            <div className="w-[60px] h-[60px] bg-secondary rounded-full flex justify-center items-center">
            <FaInstagram  className="text-lg text-white"/>
            </div>
            <div className="w-[60px] h-[60px] bg-secondary rounded-full flex justify-center items-center">
            <FaInstagram  className="text-lg text-white"/>
            </div>
        
         </Flex>
         <p className="text-white pt-6">Copyright © 2023 Design By Estiak. All rights reserved.</p>
       </Flex>
      </Container>
    </footer>
  );
};

export default Footer;
