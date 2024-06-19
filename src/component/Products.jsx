import React, { useRef, useState } from 'react';
import leaf from '../assets/leaf.png';
import ProductSlider from './ProductSlider';

const Products = () => {
  return (
    <>
      <div className='h-auto  w-full  flex
        flex-col  relative overflow-hidden mx-auto py-0 md:py-0 pl-[5rem] md:pl-[11rem] lg:pl-[11rem] bg-[#130f0c]'>
            <div className='h-[20rem] md:h-[25rem] lg:h-[25rem] bg-contain relative top-[-8rem] md:top-[-7rem] bg-no-repeat' style={{ backgroundImage: `url(${leaf})` }}></div>
            <div className='w-[29rem] md:w-[34rem] lg:w-[34rem] relative z-10 flex flex-col items-start justify-start top-[-15rem] md:top-[-15rem]  pl-[2rem]'>
                <h2 className='text-2xl text-[#D29A5A] md:text-[38px] font-normal mb-4  font-serif border-b-2 border-[#D29A5A] leading-[50px]'>CHEF MATT PRODUCTS</h2>
                <p className="md:text-[18px] font-normal font-serif text-white mb-8">Shop Gourmet Chef Quality products from the Chef Matt brand. 
                Chef it yourself and Thank us later.</p>

                <div>
                    <ProductSlider/>
                </div>
            </div>

      </div>
    </>
  )
}

export default Products;
