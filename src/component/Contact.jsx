import React from 'react';
import { HiArchive } from "react-icons/hi";
import { FaHeadset } from "react-icons/fa6";
import { LuCheckCircle } from "react-icons/lu";

const Contact = () => {
  return (
    <div className=' max-w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-14  px-[3rem] pl-[6rem] lg:pl-[12rem] md:pl-[12rem]'>
       <div className='flex  relative'>
            <div><HiArchive className='w-[36px] h-[32px] text-[#D29A5A]' /></div>
            <div>
                <h3 className='text-[21px] font-normal mb-4 font-serif text-[#D29A5A]'>FREE SHIPPING WORLDWIDE</h3>
                <p className='text-[18px] font-normal mb-4 font-serif text-white'>Guaranteed Delivery</p>
            </div>
       </div>
       <div className='flex  relative'>
            <div><FaHeadset className='w-[36px] h-[32px] text-[#D29A5A]' /></div>
            <div>
                <h3 className='text-[21px] font-normal mb-4 font-serif text-[#D29A5A]'>24/7 CUSTOMER SERVICE</h3>
                <p className='text-[18px] font-normal mb-4 font-serif text-white'>Text Us 24/7 at 070-7782-9137</p>
            </div>
       </div>
       <div className='flex  relative'>
            <div><LuCheckCircle className='w-[36px] h-[32px] text-[#D29A5A]' /></div>
            <div>
                <h3 className='text-[21px] font-normal mb-4 font-serif text-[#D29A5A]'>QUALITY GUARANTEE!</h3>
                <p className='text-[18px] font-normal mb-4 font-serif text-white'>Send Within 30 Days</p>
            </div>
       </div>
    </div>
  )
}

export default Contact;
