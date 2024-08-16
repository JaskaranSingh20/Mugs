import React from 'react'
import { navData } from '../utils/data'
import NavLogo from '../components/NavLogo'
import Navlink from '../components/Navlink'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='bg-[#F8F8F8] dark:bg-[#1E1E1E] md:mt-[109px]' >
      <div className=' flex justify-center items-center flex-col pt-[109px]'>
        <NavLogo />

        <div className='flex flex-col md:flex-row justify-between gap-[10px] items-center w-[50%] h-[40vh] md:h-auto mt-[20px] md:mt-[69px] '>
          {navData?.map((item)=>{
              return <Navlink key={item.id} title={item.title} src={item.src}/>
          })}
        </div>

        <div className='relative  w-[205px] h-[32.5px] my-[30px] md:mt-[80px]  md:mb-[62px]'>
          <Image src="/socials.png" className=' object-fit dark:invert ' alt='social icons' fill/>
        </div>
      </div>
      <div className=' h-[84px] bg-[#545454]  dark:bg-[#121212] flex justify-center items-center'>
        <p className=' text-[#ffffff] font-poppins-medium font-normal '>© 2023 <span className=' text-[#FD6F00] font-poppins-medium font-bold'>Mumair</span> All Rights Reserved , Inc.</p>
      </div>
    </div>
  )
}

export default Footer