import Image from 'next/image'
import React from 'react'

const ServiceCard = ({img, name, desc}) => {
  return (
    <div className=' bg-[#F8F8F8] dark:text-black w-[300px] h-[316px] rounded-[14px] flex items-start justify-center flex-col gap-4 px-[18px]'>
        <div className='relative w-[80px] h-[80px] '>
        <Image src={img} alt={name} fill className=' object-contain object-left '/>
        </div>
        <h2 className=' text-[32px] leading-[48px] font-poppins-medium font-semibold' >{name}</h2>
        <p className=' text-left text-[19px] leading-[28.5px] font-poppins-medium font-normal '>{desc}</p>
    </div>
  )
}

export default ServiceCard