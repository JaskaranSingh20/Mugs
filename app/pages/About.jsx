import Image from 'next/image'
import React from 'react'
import CustomSlider from '../components/Slider'
import { sliderData } from '../utils/data'


const About = () => {
  return (
    <div className='  w-full md:min-h-[45vh] min-[1118px]:h-[100vh] md:mt-10  grid  md:gap-4 grid-cols-1 md:grid-cols-2' id='about'>
    
      <div className=' w-[100%] h-[100%] flex flex-col justify-center items-center'>
        <div className=' relative w-[100%] h-[75vh] md:h-[100%]'>
          <div className=' absolute bg-[#FD6F0099] w-[200px] h-[60px] xl:w-[374px] xl:h-[83px] top-[21vh] md:top-[140px] left-[50%] translate-x-[-50%]  z-10'></div>
          <Image src="/aboutImg.png" className=' object-contain' alt='About Image' fill/>
        </div>
        
      </div>

      <div className=' w-[100%] flex justify-center items-center md:items-start flex-col '>
        <h2 className=' text-[55px] md:text-[65px] leading-[97.5px] font-poppins-medium font-normal md:font-semibold'>About Me </h2>
        <p className='text-[18px]  md:text-[21px] leading-[31.5px] text-justify mb-[22px] font-poppins-medium font-normal ' >Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>

        {sliderData?.map((data, idx)=>{
          return <CustomSlider key={idx} title={data.title} value={data.value}/>
        })}
        
        
      </div>
    </div>
  )
}

export default About