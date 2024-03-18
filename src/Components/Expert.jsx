import React from 'react'
import Laptop from "../Asset/Img/Laptop.jpg";
export default function Expert() {
  return (
    <div className='max-w-[1240px] p-2 mx-auto my-10 h-[310px]  md:grid grid-cols-2'>
        <div className=' col-span-1 md:w-[80%] text-center'>
            <img src={Laptop} alt="" style={{ borderRadius: '50px' }} className='inline'/>
        </div>
        <div className='col-span-1 flex flex-col justify-center'>
            <h1 className='text-[#00df9a] font-bold my-2'>Learn From Expert</h1>
            <p className='my-2 text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quisquam, temporibus reprehenderit vitae voluptas eaque odit distinctio repudiandae recusandae facilis non tenetur beatae nostrum earum?</p>
            <button className='w-[30%] bg-black text-white p-3 rounded'>Get started</button>   
        </div>
    </div>
  )
}
