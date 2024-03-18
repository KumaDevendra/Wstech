import React from 'react'
import { FaArrowCircleUp } from "react-icons/fa";

const Gototop = () => {
    const goToBtn = () =>{
        window.scrollTo({top: 0, left: 0, behavior:"smooth"});
    };
  return (
    <div className='top-btn' onClick={goToBtn}>
        <div className='relative'>
        <button className='fixed text-[50px] bottom-[70px] right-[30px] '><FaArrowCircleUp /></button>
        </div>
    </div>
  )
}

export default Gototop;

