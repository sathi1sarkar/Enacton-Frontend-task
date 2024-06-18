import React from 'react';
import offer from '../assets/offer.png';
import Buttons from '../commoncomponents/buttons/Buttons';


import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';

const OfferSection = () => {
  return ( 
        <div className="kaka 'w-[34.2rem] lg:w-[1355.8px] md:w-[38.6rem] ">
            <Swiper
            spaceBetween={0}
            centeredSlides={true}
            loop={true}
            autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
        >
            <SwiperSlide className='relative bg-contain md:bg-contain  bg-top bg-no-repeat  h-[30rem]' style={{ backgroundImage: `url(${offer})` }}>
                <div className="relative z-10 flex flex-col items-center justify-center h-[70%] w-[100%] text-black  ">
                    <h1 className="text-2xl md:text-[38px] font-normal mb-4 font-serif border-black border-b-2 leading-[50px]">ONLINE ONLY</h1>
                    <p className="md:text-[18px] font-normal font-serif mb-8">GET 20% OFF YOUR ORDER OF $50 OR MORE
                    Use code <b>“Chef20”</b></p>

                    <Buttons label={'Shop Now'} className='border-black  w-[359px] h-[76px] border-2 font-normal text-black  font-serif text-[22px]' />
                </div>
            </SwiperSlide>
            <SwiperSlide className='relative bg-contain md:bg-contain  bg-top bg-no-repeat h-[30rem] ' style={{ backgroundImage: `url(${offer})` }}>
                <div className="relative z-10 flex flex-col items-center justify-center h-[70%] w-[100%] text-black  ">
                    <h1 className="text-2xl md:text-[38px] font-normal mb-4 font-serif border-black border-b-2 leading-[50px]">ONLINE ONLY</h1>
                    <p className="md:text-[18px] font-normal font-serif mb-8">GET 20% OFF YOUR ORDER OF $50 OR MORE
                    Use code <b>“Chef20”</b></p>

                    <Buttons label={'Shop Now'} className='border-black  w-[359px] h-[76px] border-2 font-normal text-black  font-serif text-[22px]' />
                </div>
            </SwiperSlide>
            <SwiperSlide className='relative bg-contain md:bg-contain  bg-top bg-no-repeat h-[30rem] ' style={{ backgroundImage: `url(${offer})` }}>
                <div className="relative z-10 flex flex-col items-center justify-center h-[70%] w-[100%] text-black  ">
                    <h1 className="text-2xl md:text-[38px] font-normal mb-4 font-serif border-black border-b-2 leading-[50px]">ONLINE ONLY</h1>
                    <p className="md:text-[18px] font-normal font-serif mb-8">GET 20% OFF YOUR ORDER OF $50 OR MORE
                    Use code <b>“Chef20”</b></p>

                    <Buttons label={'Shop Now'} className='border-black  w-[359px] h-[76px] border-2 font-normal text-black  font-serif text-[22px]' />
                </div>
            </SwiperSlide>

        </Swiper>
        </div>
    
  )
}

export default OfferSection
