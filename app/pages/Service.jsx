import React from 'react'
import Heading from '../components/Heading'
import { serviceData } from '../utils/data'
import ServiceCard from '../components/ServiceCard'

const Service = () => {
  let desc = "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"
  return (
    <div className=' mt-10  ' id='services'>
      <Heading title="Services" desc={desc}/>
      <div className='flex justify-center flex-wrap items-center gap-[31px] mt-[60px]'>
        {serviceData.map((data, idx)=>{
            return <ServiceCard key={idx} img={data.img} name={data.name} desc={data.desc}/>
        })}

      </div>
    </div>
  )
}

export default Service