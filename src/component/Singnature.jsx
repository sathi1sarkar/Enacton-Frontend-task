import React from 'react'
import signature from '../assets/signature.png';
const Singnature = () => {
  return (
    <div className=' max-w-[90%] ml-[4rem] lg:ml-[9rem] md:ml-[9rem]  mx-auto grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 mt-14 border-t-4 border-[#D29A5A] '>
       <div className='flex items-center justify-center  relative'>
            <img src={signature} />
       </div>
    </div>
  )
}

export default Singnature;
