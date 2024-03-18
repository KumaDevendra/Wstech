import React from 'react'
import Typed from 'react-typed';
export default function Banner() {
  return (
    <div className='bg-sky-600 w-full py-[100px] font-bold'>
        <div className='max-w-[1240px] my-[100px] mx-auto text-center'>
          <div className='text-xl md:text-[40px] mt-6'>learn with us</div>
          <h1 className='text-3xl md:text-[90px] text-white mt-[58px]'>Groww with us</h1>
          <div className='text-[20px] md:text-[30px] mt-[55px]'>
                <Typed
                className='pl-3'
                    strings={['Web Development','Software development','UI/UX Designer']}
                    typeSpeed={100}
                    loop={true}
                    backSpeed={50}
                />
          </div>
          <button className='bg-black text-white p-3 rounded mt-6'>Get started</button>
        </div>
    
    </div>
  )
}

