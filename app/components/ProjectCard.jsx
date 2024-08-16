import Image from 'next/image'
import React from 'react'

const ProjectCard = ({src, category, title}) => {
  return (
    <div className=' scale-[70%] h-[450px] md:scale-100 w-[445px] md:w-[400px]  md:h-[601px] '>
        <div className='  relative w-[445px] md:w-[400px] h-[489px] '>
            <Image src={src}  className='h-[100%] object-fill rounded-xl z-10' alt='projects' fill/>
        </div>
        <h5 className=' text-[#FD6F00] text-[19px] leading-[28.5px]  mt-[37px] font-poppins-medium font-normal '>{category}</h5>
        <h3 className='mt-[10px]  text-[24px] leading-[36px] font-bold font-poppins-medium'>{title}</h3>
    </div>
  )
}

export default ProjectCard