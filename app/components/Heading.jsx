import React from 'react'

const Heading = ({title, desc}) => {
  return (
    <div className=' flex  flex-col justify-center items-center'>
        <h1 className=' text-[55px] leading-[60px] md:text-[65px] md:leading-[97.5px]  text-center md:text-justify font-poppins-medium font-semibold'>{title}</h1>
        <p className={`text-[18px] mt-4 md:mt-0 md:text-[21px] leading-[31.5px] ${title == "Testimonials"? 'w-[80%]' : 'w-[100%]'} md:w-[60%] text-justify md:text-center font-poppins-medium font-normal`}>{desc}</p>
      </div>
  )
}

export default Heading