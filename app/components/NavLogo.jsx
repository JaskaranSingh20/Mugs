"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavLogo = () => {
  return (
    <Link href="#" className='flex items-center justify-between gap-2'>
    <Image src="/logo.png" alt='Mumair Logo' width={67} height={67}/>
    <h3 className=' text-[48px] font-normal font-poppins-medium '><span className=' font-poppins-medium
     font-bold'>M</span>umair</h3>
  </Link>
  )
}

export default NavLogo