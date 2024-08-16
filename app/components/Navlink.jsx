import Link from 'next/link'
import React from 'react'

const Navlink = ({title, src}) => {
  return (
    <Link href={src} className=' text-[21px] font-poppins-medium font-normal ' >{title}</Link>
  )
}

export default Navlink