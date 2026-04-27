import Image from '../components/Image'
import BannerImage from '../assets/banner.jpg'
import { GoArrowRight } from 'react-icons/go'
const CardPortfolio = () => {
  return (
    <div className='group w-[570px] h-[520px]'>
             <div className='relative w-full h-[420px] bg-[#C4C4C4]'>
               <Image className='w-full h-full' src={BannerImage}/>
               <div className='w-full h-full group-hover:bg-[#00413d66] duration-300 absolute top-0 left-0'>
                    <div className='w-[70px] h-[70px] rounded-full group-hover:bg-white absolute top-6 right-8 duration-300 flex justify-center items-center'>
                         <GoArrowRight className='text-transparent group-hover:text-secondary duration-300 text-2xl'/>
                    </div>

               </div>
             </div>
             <div className='bg-primary py-[22px] px-[18px]'>
               <h5 className='text-2xl text-white font-vol font-semibold'>Motion Graphics</h5>
               <p className='text-base text-[#ffffffb3] font-jost font-normal'>Website</p>
             </div>

          </div>

  )
}

export default CardPortfolio