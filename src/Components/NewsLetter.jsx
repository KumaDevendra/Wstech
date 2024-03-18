import React from 'react'

export default function NewsLetter() {
  return (
    <div className='bg-sky-600 w-full p-2'>
      <div className='max-w-[1240px] mx-auto md:flex justify-between py-[80px]'>
        <div className='m-2'>
            <h1 className='text-[20px] md:text-4xl text-white font-bold'>Want to Learn more It skills?</h1>
            <p className='text-white'>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className='m-2'>
            <input type='text' className='py-2 px-4 mx-2 text-slate-600 rounded' placeholder='Email'/>
            <button className='w-[30%] bg-black py-2 px-3 text-white rounded'>Submit</button>
            <br/>
            <p className='text-white'>
              We care about protection of your data. Read our <br/>
              <a href="https://www.youtube.com" className=' text-black'>Privacy policy</a>
            </p> 
        </div>
      </div>
    </div>
  )
}
