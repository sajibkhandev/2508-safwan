import React from 'react'
import Image from '../components/Image'

import { GoArrowRight } from "react-icons/go";


const CardService = ({icon,text,title,className}) => {
     return (
          <div className={`group hover:scale-105 duration-300 w-[370px] py-[50px] px-[30px] shadow-xl ${className}`}>
               <Image src={icon} />
               <h3 className='pt-[26px] pb-4 text-2xl text-primary font-vol font-extrabold'>{title}</h3>
               <p className='w-[245px] pb-[30px] text-base text-[#00423eb3] font-jost font-normal'>{text}</p>
               <GoArrowRight className='text-4xl group-hover:text-secondary duration-300'/>

          </div>
     )
}

export default CardService