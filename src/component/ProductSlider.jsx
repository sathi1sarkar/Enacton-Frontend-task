import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import productImage1 from '../assets/Ellipse 5.png'
import productImage2 from '../assets/Ellipse 6.png'
import productImage3 from '../assets/Ellipse 7.png'
import productImage4 from '../assets/Ellipse 8.png'

//import './styles.css';

// import required modules
import { FreeMode, Pagination, Navigation } from 'swiper/modules';

const ProductSlider = () => {
  return (
    <>
    
    <style>
      {`
      .swiper-button-prev{
        color:white;
        margin-top: -50px;
        padding-right: 14rem;
      }
      .swiper-button-next{
        color:white;
        margin-top: -50px;
        padding-left: 14rem;
      }
       
      `}
    </style>
    <div className='h-[14rem] px-[56rem] md:px-[40rem] lg:px-[3rem] pl-0 md:pl-0 lg:pl-0' style={{'width': '1253px','line-height': '10'}}>
        <Swiper 
        slidesPerView={4}
        spaceBetween={-50}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        freeMode={true}
        loop={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper"
        navigation={true}
      >
        <SwiperSlide className='text-red  w-[100px !important]'>
         
          <div className='text-center leading-[20px]'>
                <div className='flex justify-center'>
                  <img src={productImage1} className='' />
                </div>
            <h3 className='text-[18px] font-normal mb-4 font-serif text-[#D29A5A]'>CINNAMON HONEY</h3>
            <span className='text-white'><del>$12.00</del> $9.00</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className='text-red  w-[100px !important]'>
          <div className='text-center leading-[20px]'>
            <div className='flex justify-center'>
              <img src={productImage2}  className=''/>
            </div>
            <h3 className='text-[18px] font-normal mb-4 font-serif text-[#D29A5A]'>COCONUT OIL</h3>
            <span className='text-white'><del>$20.00</del> $16.00</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className='text-red  w-[100px !important]'>
          <div className='text-center leading-[20px]'>
            <div className='flex justify-center'>
              <img src={productImage3} className=''/>
            </div>
            <h3 className='text-[18px] font-normal mb-4 font-serif text-[#D29A5A]'>MANGO HONEY</h3>
            <span className='text-white'><del>$12.00</del> $9.00</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className='text-red  w-[100px !important]'>
          <div className='text-center leading-[20px]'>
            <div className='flex justify-center'>
              <img src={productImage4} className=''/>
            </div>
            <h3 className='text-[18px] font-normal mb-4 font-serif text-[#D29A5A]'>HONEY HABANERO</h3>
            <span className='text-white'><del>$9.00</del> $6.00</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className='text-red  w-[100px !important]'>
          <div className='text-center leading-[20px]'>
            <div className='flex justify-center'>
              <img src={productImage1} className='' />
            </div>
            <h3 className='text-[18px] font-normal mb-4 font-serif text-[#D29A5A]'>CINNAMON HONEY</h3>
            <span className='text-white'><del>$12.00</del> $9.00</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className='text-red  w-[100px !important]'>
          <div className='text-center leading-[20px]'>
            <div className='flex justify-center'>
              <img src={productImage3} className=''/>
            </div>
            <h3 className='text-[18px] font-normal mb-4 font-serif text-[#D29A5A]'>CINNAMON HONEY</h3>
            <span className='text-white'><del>$12.00</del> $9.00</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className='text-red  w-[100px !important]'>
          <div className='text-center leading-[20px]'>
           <div className='flex justify-center'>
              <img src={productImage1} className=''/>
           </div>
            <h3 className='text-[18px] font-normal mb-4 font-serif text-[#D29A5A]'>CINNAMON HONEY</h3>
            <span className='text-white'><del>$12.00</del> $9.00</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className='text-red  w-[100px !important]'>
          <div className='text-center leading-[20px]'>
            <div className='flex justify-center'>
            <img src={productImage4} className='' />
            </div>
            <h3 className='text-[18px] font-normal mb-4 font-serif text-[#D29A5A]'>CINNAMON HONEY</h3>
            <span className='text-white'><del>$12.00</del> $9.00</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className='text-red  w-[100px !important]'>
          <div className='text-center leading-[20px]'>
            <div className='flex justify-center'>
             <img src={productImage3} className=''/>
            </div>
            <h3 className='text-[18px] font-normal mb-4 font-serif text-[#D29A5A]'>CINNAMON HONEY</h3>
            <span className='text-white'><del>$12.00</del> $9.00</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </>
  )
}

export default ProductSlider ;
