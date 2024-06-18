import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import sideImage from '../assets/Chef-Matt-rev.png';
import signture from '../assets/signature.png';
import { FaShoppingBag } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const SideNavbar = () => {
    const [SidenavIsActive , setSidenavIsActive] = useState(false)

    const Active = ()=>{
        setSidenavIsActive(true);

    }
    const Inactive = ()=>{
        setSidenavIsActive(false);
        
    }
  return (
    <>
     <style>
        {`
      
        `}
    </style>
    <div className='flex relative'>
    { !SidenavIsActive ?
      <div className='sidebar flex absolute justify-center items-center flex-col w-[62px] lg:w-[150px] md:w-[150px] border-r-8 border-[#D29A5A] h-[70rem] lg:h-lvh md:h-[70rem]'>
        <div className="absolute inset-0 bg-black opacity-60 "></div>
        <div className='z-10 flex justify-center pt-20'><FaBars onClick={()=>Active()} className='text-3xl text-[#f8fafc]'/></div>
        <div className="relative z-10 flex flex-col  justify-center h-full w-full text-white pt-10">
         
          <div>
            <img src={sideImage} />
          </div>
        </div>
      </div>
      :


      <div className='sidebar relative flex justify-center items-center flex-col w-[345px] border-r-8 border-[#D29A5A] h-[70rem] lg:h-lvh md:h-[70rem]' style={{position:'absolute'}}>
        <div className="absolute inset-0 bg-black opacity-1 lg:opacity-60 md:opacity-1 "></div>
        <div className='z-10 flex justify-center pt-20'> <IoCloseSharp onClick={()=>Inactive()} className='text-3xl text-[#f8fafc]'/></div>
        <div className="relative z-10 flex flex-col  h-full w-full text-white pt-0">
         <div className='flex justify-center'><img src={signture} className="w-[70%]"/></div>
          
          <ul className='pl-[3rem]'>
            <li className='text-2xl md:text-[22px] font-normal mb-4 font-serif  leading-[24px] text-[#D29A5A]'>HOME</li>
            <li className='text-2xl md:text-[22px] font-normal mb-4 font-serif  leading-[24px] text-[#fff]'>PRODUCTS</li>
            <li className='text-2xl md:text-[22px] font-normal mb-4 font-serif  leading-[24px] text-[#fff]'>MEET CHEF MATT</li>
            <li className='text-2xl md:text-[22px] font-normal mb-4 font-serif  leading-[24px] text-[#fff]'>FAQ</li>
            <li className='text-2xl md:text-[22px] font-normal mb-4 font-serif  leading-[24px] text-[#fff]'>CONNECT WITH US</li>
          </ul>

          <div className="relative flex justify-center items-center flex-col leading-[24px] top-[15rem] lg:top-[5rem] md:top-[10rem]">
            <h4 className="text-[16px]  font-normal mb-4 font-serif text-[#fff]">TEXT SUPPORT 24/7   <span className="text-[#D29A5A] ml-[34px]">070-7782-9137</span></h4>
            <hr className='border-t-2 border-[#fff] w-full' />
            <div className='flex items-center justify-center pt-[24px] '>
               <button type='button' className='flex items-center justify-center text-white text-[16px] md:text-[22px] font-normal mb-4 font-serif  '><FaShoppingBag className='ml-4'/> CART</button>
               <button type='button' className='flex items-center justify-end text-white text-[16px] md:text-[22px] font-normal mb-4 font-serif ml-[60px]'><FaRegHeart /> WISHLIST</button>
            </div>
          </div>
        </div>
      </div>
    }
    </div>
    </>
  )
}

export default SideNavbar;
