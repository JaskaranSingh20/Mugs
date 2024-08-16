import React from 'react'

const CustomBtn = ({title, width , height}) => {

  return (
    <button className={`bg-[#FD6F00] text-[#FFFFFF] w-[188px] ${height ? `h-[${height}px]`: 'h-[52px]'}  ${title == "Contact Me" ? 'rounded-[14px] scale-75 h-[75px] md:scale-100 ':'rounded-[5px]'} text-[21px] leading-[31.5px]  text-center  md:text-[1.4vw] md:leading-[2vw]  px-[12px] xl:mr-0  xl:px-[12px] ml-[-10px] md:hidden xl:scale-100 min-[1118px]:block min-[1118px]:scale-50 font-poppins-medium font-normal`} >{title}</button>
  )
}

export default CustomBtn