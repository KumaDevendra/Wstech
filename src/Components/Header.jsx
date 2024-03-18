import React from 'react'
import {AiOutlineMenu } from "react-icons/ai";
export default function Header() {
  return (
    <div className='bg-sky-600 p=4 h=100px '>
      <div className='max-w-[1240px] py-[15px] mx-auto flex justify-between items-center'>
        <div className='text-3xl font-bold'>Ws tech</div>
        <AiOutlineMenu className='text-white text-2xl md:hidden block'/>
        {/* <AiOutlineCloseCircle className='text-white text-3xl md:hidden block' /> */}
        <ul className='hidden md:flex text-white gap-5'>
          <li>Home</li>
          <li>Company</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
      {/* {responsive layout} */}
        {/* <ul className='md:hidden w-full h-screen text-white fixed bg-black top-66 left-[-100]'>
          <li className='p-3'>Home</li>
          <li className='p-3'>Company</li>
          <li className='p-3'>Contact</li>
          <li className='p-3'>About</li>
        </ul> */}
      </div>
    </div>
  )
}
