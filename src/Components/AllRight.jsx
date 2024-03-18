import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { FiYoutube } from "react-icons/fi";
export default function AllRight() {
  return (
    <div className='max-w-[100%] mx-auto bg-[#F8F9FD] h-[100px] flex justify-between items-center'>
      <ul className='flex space-x-4 text-[blue] text-[30px] ml-[110px] '>
        <li className='hover:scale-125 duration-500'><FaWhatsapp /></li>
        <li className='hover:scale-125 duration-500'><FaInstagram /></li>
        <li className='hover:scale-125 duration-500'><CiFacebook /></li>
        <li className='hover:scale-125 duration-500'><FiYoutube /></li>
      </ul>
      <div className='text-[19px] mr-[110px]'>
        <p>All rights reserved by
        <a href='https://www.wscubetech.com/' className='text-[blue]'> WsCube Tech</a></p>
      </div>
    </div>
  )
}
