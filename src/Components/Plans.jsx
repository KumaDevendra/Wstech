import React from 'react'
import Meeting from "../Asset/Img/Meeting.jpg";
import Coding from "../Asset/Img/Coding.jpg";
import Placement from "../Asset/Img/Placement.jpg";
export default function Plans() {
  return (
    <div className='py-[100px]'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-3 gap-6'>
            <div className='shadow-xl  h-[500px] bg-gray-100 hover:scale-105 duration-500 rounded-[20px]'>
              <div className=''>
                <img src={Meeting} alt="" class="w-[100%] h-[232px] rounded-t-lg" />
                <h1 className='text-[30px] font-bold'>Online Meeting</h1>
                <p>In today's fast-paced digital landscape, online meetings have become an indispensable tool for fostering effective communication and collaboration. Our online meeting platform provides a feature-rich environment that enables teams to connect effortlessly, regardless of geographical boundaries</p>
                <a href="https://aws.amazon.com/what-are-online-meetings" class="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded mt-[1rem] ">
                 Read More→
                </a>
              </div>
            </div>
            <div className='shadow-xl  h-[500px] bg-gray-100 hover:scale-105 duration-500 rounded-[20px]'>
              <div>
                <img src={Coding} alt="" class="w-[100%] h-[232px] rounded-t-lg"/>
                <h1 className='text-[30px] font-bold'>Coding</h1>
                <p className=''>Coding is the language that empowers us to transform ideas into reality. Whether you're crafting a website, developing software, or solving complex problems, coding is the key to unlocking innovation.</p>
                <a href="https://www.bestcolleges.com/bootcamps/guides/what-is-coding-used-for" class="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded mt-[4rem] ">
                 Read More→
                </a>
              </div>
            </div>
            <div className='shadow-xl  h-[500px] bg-gray-100 hover:scale-105 duration-500 rounded-[20px]'>
              <div>
                <img src={Placement} alt="" class="w-[100%] h-[232px] rounded-t-lg" />
                <h1 className='text-[30px] font-bold'>Self-Placement</h1>
                <p>In the ever-evolving landscape of careers, self-placement emerges as a powerful strategy for charting your professional course. It's more than just finding a job; it's about aligning your skills, passions, and ambitions to create a fulfilling career journey.</p>
                <a href="https://files.eric.ed.gov/fulltext/ED622178.pdf" class="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded mt-[3rem] ">
                 Read More→
                </a>
              </div>
            </div>
        </div>
      
    </div>
  )
}
