// import React from 'react'
// import CustomBtn from '../components/CustomBtn'
// import { navData } from '../utils/data'
// import Navlink from '../components/Navlink'
// import NavLogo from '../components/NavLogo'

// const Navbar = () => {
//   return (
//     <div className=' mt-[61px] flex justify-between items-center w-[100%] h-[70px]'>
//      <NavLogo/>

//       <div className=' hidden md:flex  justify-between gap-3 items-center w-[70%] h-[70px] '>
//           {navData?.map((item)=>{
//               return <Navlink key={item.id} title={item.title} src={item.src}/>
//           })}
//         <CustomBtn title="Download CV" />
//       </div>
      
//     </div>
//   )
// }

// export default Navbar

// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'
// import { navData } from '../utils/data'

// const Navbar = () => {
//   return (
    

// <nav class="bg-transparent ">
//   <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//   <Link href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
//       <Image src="/logo.png" width={67} height={67} alt="Mumair Logo" />
//       <span class="self-center text-[48px] leading-[58.51px] font-normal whitespace-nowrap dark:text-white"><span className=' font-bold'>M</span>umair</span>
//   </Link>
//   <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//       <button type="button" class="text-white bg-[#FD6F00] font-medium rounded-lg text-[21px] leading-[31.5px] px-4 py-2 text-center">Download CV</button>
//       <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
//         <span class="sr-only">Open main menu</span>
//         <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
//         </svg>
//     </button>
//   </div>
//   <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
//     <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border  rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
//       {navData.map((data, idx)=>{
//         return <li>
//           <a href={data.src} key={idx} class=" block py-2 px-3 md:p-0 text-[#000] dark:text-white  rounded md:bg-transparent text-[21px] leading-[31.5px]" aria-current="page">{data.title}</a>
//         </li>

//       })}
      
//     </ul>
//   </div>
//   </div>
// </nav>

//   )
// }

// export default Navbar


"use client";

import Link from "next/link";
import { Button, Navbar } from "flowbite-react";
import { navData } from "../utils/data";
import CustomBtn from "../components/CustomBtn";

export function NavbarComp() {
  return (
    <Navbar fluid rounded className=" ml-[-30px] lg:ml-0 md:mt-[68px] bg-transparent dark:bg-transparent">
      <Navbar.Brand as={Link} href="#" className=" scale-[70%] xl:scale-100 ">
        <img src="/logo.png" className="w-[67px] h-[67px] mr-[20px]" alt="Mumair Logo" />
        <span className="self-center whitespace-nowrap text-[48px] leading-[58.51px] font-normal font-montserrat-medium dark:text-white"><span className=" font-montserrat-medium font-bold">M</span>umair</span>
      </Navbar.Brand>
        <Navbar.Toggle className="w-[40px] h-[40px] flex justify-center items-center" />
      <Navbar.Collapse className="w-full ml-10">
        {navData.map((data, idx)=>{
          return <Navbar.Link key={idx} href={data.src} className=" hover:bg-transparent dark:hover:bg-transparent text-[21px] leading-[31.5px]  md:text-[1.4vw] md:leading-[2vw] ml-[-10px]  mt-[10px]  dark:text-white  font-poppins-medium font-normal" >{data.title}</Navbar.Link>
        })}
        
        <CustomBtn title="Download CV" />
      </Navbar.Collapse>
    </Navbar>
  );
}


// "use client";

// import Link from "next/link";
// import { Navbar } from "flowbite-react";
// import { navData } from "../utils/data";
// import CustomBtn from "../components/CustomBtn";

// export function NavbarComp() {
//   return (
//     <Navbar fluid rounded className="md:mt-[68px]">
//       <Navbar.Brand as={Link} href="#" className=" ml-[-40px] md:ml-0 scale-[70%] md:scale-100 ">
//          <img src="/logo.png" className="w-[67px] h-[67px] mr-[20px]" alt="Mumair Logo" />
//         <span className="self-center whitespace-nowrap text-[48px] leading-[58.51px] font-normal dark:text-white"><span className=" font-bold">M</span>umair</span>
//        </Navbar.Brand>
//       <Navbar.Toggle className="  w-[50px] flex justify-center items-center " />
//       <Navbar.Collapse>
//       {navData.map((data, idx)=>{
//           return <Navbar.Link key={idx} href={data.src} className=" hover:bg-transparent dark:hover:bg-transparent text-[21px] leading-[31.5px] text-center " >{data.title}</Navbar.Link>
//         })}

//         <CustomBtn title="Download CV"/>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }