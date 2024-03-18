import React from 'react'
import Logo from "../Asset/Img/Logo.svg";
import { FiSend } from "react-icons/fi";
export default function Footer() {
  return (
   <div className='max-w-[1240px] mx-auto my-10 h-[600px] grid grid-cols-3 space-x-[30px]'>
    <div className=' col-span-1 '>
      <h1>
        <img src={Logo} alt="" className='w-[188px] h-[70px]'/>
      </h1>
      <p className='text-[#435056] mt-[20px]'>WsCube Tech is the Vernacular Upskilling Edtech platform. By offering expert mentorship with our tech-powered courses in the first language of Indians, we equip learners with the skills to thrive in the global workforce.</p>
      <h2 className='text-xl font-bold mt-5'>Stay up to date</h2>
      <p className='text-[#435056] mt-[5px]'>Subscribe to our newsletter to receive the latest updates and offers.</p>
      
      <div className="relative w-[250px] mt-8 border border-[#a6a49f] rounded-full">
        <input type='text' class='w-full p-4 rounded-full' placeholder='Enter your email' />
            <button className='absolute right-1 top-1/2 -translate-y-1/2 p-4 rounded-full bg-[#FF9C00] hover:scale-125 duration-500'>
              <FiSend />
            </button>
      </div>

    </div>
   
    <div className=' col-span-2'>
  <div className='h-[600px] grid grid-cols-3'>
    <div className='col-span-1 w-[250px] space-y-10'>
      <h1 className='font-bold text-[20px]'>Popular online courses</h1>
      <ul className='space-y-[20px] text-[18px] text-[#435058]'>
        <li>Ethical Hacking Training</li>
        <li>Digital Marketing Training</li>
        <li>Python Training</li>
        <li>Android Training</li>
        <li>Web Development Training</li>
        <li>SEO Training</li>
        <li>Content Writing Training</li>
        <li>Flutter Training</li>
      </ul>
    </div>
    <div className='col-span-1 w-[250px] space-y-10'>
      <h1 className='font-bold text-[20px]'>Useful links</h1>
      <ul className='space-y-[20px] text-[18px] text-[#435058]'>
        <li>About Us</li>
        <li>Blog</li>
        <li>Sitemap</li>
        <li>We Are Hiring</li>
        <li>Self-Paced</li>
        <li>Reviews</li>
        <li>Contact Us</li>
        <li>Privacy Policy</li>
        <li>Terms & Conditions</li>
        <li>Refund Policy</li>
        <li>Verify Certificate</li>
      </ul>
    </div>
    <div className='col-span-1 w-[250px] space-y-10'>
      <h1 className='font-bold text-[20px]'>Our Centers</h1>
      <ul className='space-y-[20px] text-[18px] text-[#435058]'>
        <li>Jodhpur</li>
        <li>Jaipur</li>
      </ul>
    </div>
  </div>
</div>

   
   </div>

  )
}
