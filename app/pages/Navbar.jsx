
"use client";

import Link from "next/link";
import { Button, Navbar } from "flowbite-react";
import { navData } from "../utils/data";
import CustomBtn from "../components/CustomBtn";

export function NavbarComp() {
  return (
    <Navbar fluid rounded className="  ml-[-30px] lg:ml-0 md:mt-[68px] bg-transparent dark:bg-transparent">
      <Navbar.Brand as={Link} href="#" className=" scale-[60%] lg:scale-[70%] xl:scale-100 ">
        <img src="/logo.png" className="w-[67px] h-[67px] mr-[20px]" alt="Mumair Logo" />
        <span className="self-center whitespace-nowrap text-[48px] leading-[58.51px] font-normal font-montserrat-medium dark:text-white"><span className=" font-montserrat-medium font-bold">M</span>umair</span>
      </Navbar.Brand>
        <Navbar.Toggle className="w-[40px] h-[40px] flex justify-center items-center" />
      <Navbar.Collapse className="w-full ml-10">
        {navData.map((data, idx)=>{
          return <Navbar.Link key={idx} href={data.src} className=" hover:bg-transparent dark:hover:bg-transparent text-[21px] leading-[31.5px]  md:text-[1.4vw] md:leading-[2vw] ml-[-20px]  mt-[10px]  dark:text-white  font-poppins-medium font-normal" >{data.title}</Navbar.Link>
        })}
        
        <CustomBtn title="Download CV" />
      </Navbar.Collapse>
    </Navbar>
  );
}
