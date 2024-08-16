'use client'
import React, { useEffect, useState } from 'react'
import Heading from '../components/Heading'
import { projectBtn, projectData } from '../utils/data'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  let desc = "Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus"

  const [selectedBtn, setSelectedBtn] = useState(2);
  const [currElem, setCurrElem] = useState("Web Design");

  let filterprojectData = projectData.filter((currData)=>{
    return (currData.category === currElem);
}) ;

  function handleSelection(idx, data){
     setSelectedBtn(idx);
     setCurrElem(data.text);
    }
    

  return (
    <div id='projects' className=' mt-[139px] w-full'>
       <Heading title="My Projects" desc={desc}/>

      <div className='flex justify-center flex-wrap items-center gap-[17px]  text-[24px] leading-[36px] mt-[63px] '>
        {projectBtn.map((data,  idx)=>{
          return <button key={idx} className={` ${selectedBtn == idx ? 'bg-[#FD6F00] text-[#FFFFFF]' :'bg-[#F8F8F8] text-[#000]'} border-[#545454] border-[0.4px]  slate-600 px-5 py-[10px] rounded-xl font-poppins-medium font-normal `} onClick={()=> handleSelection(idx, data)} >{data.text}</button>
        })}
      </div>

      <div className=' w-full flex flex-wrap justify-center items-center gap-[10px] md:gap-[44px] mt-[106px]'>
        {filterprojectData?.map((data, idx)=>{
            return <ProjectCard key={idx} src={data.img} title={data.name} category={data.category}/>
        })}

      </div>
    </div>
  )
}

export default Projects