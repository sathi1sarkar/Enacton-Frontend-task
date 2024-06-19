import React from 'react';
import offer from '../assets/offer.png';
import Buttons from '../commoncomponents/buttons/Buttons';


import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';

const OfferSection = () => {
  return (
    <>
   
        <div className="offer w-[34.2rem] lg:w-[94rem] md:w-[56.6rem] mt-[-5rem] lg:mt-[-8] md:mt-[3rem] px-[3rem] pl-[6rem] lg:pl-[12rem] md:pl-[12rem]">
            <Swiper
            spaceBetween={0}
            centeredSlides={true}
            loop={true}
            autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            }}
           
            modules={[Autoplay]}
            className="mySwiper"
        >
            <SwiperSlide className='relative bg-contain md:bg-contain  bg-top bg-no-repeat  h-[17rem] lg:h-[30rem] md:h-[22rem] py-[3rem] ' style={{ backgroundImage: `url(${offer})` }}>
                <div className="relative z-10 flex flex-col items-center justify-center h-[17%] lg:h-[70%] md:h-[37%] w-[100%] text-black  ">
                    <h1 className="text-[18px] lg:text-[38px] md:text-[24px]  font-normal mb-1 lg:mb-4 md:mb-4 font-serif border-black border-b-2 leading-[21px] lg:leading-[50px] md:leading-[21px]">ONLINE ONLY</h1>
                    <p className="text-[11px] lg:text-[18px] md:text-[11px]  font-normal font-serif mb-4 md:mb-4 lg:mb-8">GET 20% OFF YOUR ORDER OF $50 OR MORE
                    Use code <b>“Chef20”</b></p>

                    <Buttons label={'Shop Now'} className='border-black  w-[199px] lg:w-[359px] md:w-[199px] h-[37px] lg:h-[76px] md:h-[37px] border-2 font-normal text-black  font-serif text-[16px] lg:text-[22px] md:text-[16px]' />
                </div>
            </SwiperSlide>
            <SwiperSlide className='relative bg-contain md:bg-contain  bg-top bg-no-repeat h-[17rem] lg:h-[30rem] md:h-[22rem] py-[3rem] ' style={{ backgroundImage: `url(${offer})` }}>
                <div className="relative z-10 flex flex-col items-center justify-center h-[17%] lg:h-[70%] md:h-[37%] w-[100%] text-black  ">
                    <h1 className="text-[18px] lg:text-[38px] md:text-[24px]  font-normal mb-1 lg:mb-4 md:mb-4 font-serif border-black border-b-2 leading-[21px] lg:leading-[50px] md:leading-[21px]">ONLINE ONLY</h1>
                    <p className="text-[11px] lg:text-[18px] md:text-[11px]  font-normal font-serif mb-4 md:mb-4 lg:mb-8">GET 20% OFF YOUR ORDER OF $50 OR MORE
                    Use code <b>“Chef20”</b></p>

                    <Buttons label={'Shop Now'} className='border-black  w-[199px] lg:w-[359px] md:w-[199px] h-[37px] lg:h-[76px] md:h-[37px] border-2 font-normal text-black  font-serif text-[16px] lg:text-[22px] md:text-[16px]' />
                </div>
            </SwiperSlide>
            <SwiperSlide className='relative bg-contain md:bg-contain  bg-top bg-no-repeat h-[17rem] lg:h-[30rem] md:h-[22rem] py-[3rem] ' style={{ backgroundImage: `url(${offer})` }}>
                <div className="relative z-10 flex flex-col items-center justify-center h-[17%] lg:h-[70%] md:h-[37%] w-[100%] text-black  ">
                    <h1 className="text-[18px] lg:text-[38px] md:text-[24px]  font-normal mb-1 lg:mb-4 md:mb-4 font-serif border-black border-b-2 leading-[21px] lg:leading-[50px] md:leading-[21px]">ONLINE ONLY</h1>
                    <p className="text-[11px] lg:text-[18px] md:text-[11px]  font-normal font-serif mb-4 md:mb-4 lg:mb-8">GET 20% OFF YOUR ORDER OF $50 OR MORE
                    Use code <b>“Chef20”</b></p>

                    <Buttons label={'Shop Now'} className='border-black  w-[199px] lg:w-[359px] md:w-[199px] h-[37px] lg:h-[76px] md:h-[37px] border-2 font-normal text-black  font-serif text-[16px] lg:text-[22px] md:text-[16px]' />
                </div>
            </SwiperSlide>

        </Swiper>
        </div>
    </>
    
  )
}

export default OfferSection
