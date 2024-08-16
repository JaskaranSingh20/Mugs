import React from 'react'
import Heading from '../components/Heading'
import CustomBtn from '../components/CustomBtn'

const Contact = () => {
  let desc = "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"
  return (
    <div className='mt-[140px]' id='contact'>
      <Heading title="Lets Design Together" desc={desc}/>
      <div className='flex justify-center items-center flex-col md:flex-row gap-[25px] mt-[60px]'>
        <input type="text" placeholder='Enter your Email' className=' w-[90%] md:w-[627px] h-[50px] md:h-[75px] rounded-[14px] px-[26px] border border-[#AFAFAF] font-poppins-medium font-normal bg-[#F8F8F8]  text-[#797979] '/>
        <CustomBtn title="Contact Me" height={75}/>
      </div>
    </div>
  )
}

export default Contact