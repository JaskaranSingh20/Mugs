import Image from 'next/image'
import React from 'react'
import CustomBtn from '../components/CustomBtn'

const Hero = () => {
  return (
    <div className='w-full md:h-[45vh] min-[1118px]:h-[100vh] mt-[7.5vh]  grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-0 '>
      <div className=' md:h-[45vh] min-[1118px]:h-[100vh] w-[100%] flex md:justify-center justify-start items-center md:items-start flex-col'>
        <span className='text-[24px] leading-[36px] font-poppins-medium font-semibold'>Hi I am</span>
        <h2 className='text-[32px] leading-[48px] text-[#FD6F00]  font-poppins-medium font-semibold'>Muhammad Umair </h2>
        <h1 className='text-[70px] leading-[90px] md:text-[6.25vw] font-poppins-medium font-bold md:leading-[7.5vw] mt-[-10px]'>UI & UX</h1>
        <h1 className='text-[70px] leading-[90px] md:text-[6.25vw] font-poppins-medium font-bold md:leading-[7.5vw] mt-[-20px] md:ml-[13.125vw]' >Designer </h1>
        <p className='text-[18px] leading-7 md:text-[21px] md:leading-[31.5px] tracking-[3%] text-justify mt-[28px] mb-[22px] font-poppins-medium font-normal' >Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
        
        <CustomBtn title="Hire Me"/>
        
      </div>

      {/* Hero Right Image  */}
      <div className='  w-[100%] h-[70vh] md:h-[45vh] min-[1118px]:h-[100%]  flex flex-col justify-center items-center '>
        <div className=' relative w-[100%] h-[100%]'>
          <div className=' absolute bg-[#FD6F0099] w-[200px] h-[60px] xl:w-[374px] xl:h-[83px] top-[11.5vh] md:top-[78px] left-[50%] translate-x-[-50%]  z-10'></div>
          <Image src="/heroImg.png" className=' object-contain' alt='Hero Image' fill/>
        </div>
        <div className='relative  w-[205px] h-[32.5px] mt-[2.3rem]'>
          <Image src="/socials.png" className=' object-fit dark:invert' alt='social icons' fill/>
        </div>
      </div>
    </div>
  )
}

export default Hero