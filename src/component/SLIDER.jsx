
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import slider from '../assets/slide4_image1.jpg'

export const SLIDER = () => {
  const backgroundImage = '../assets/slide4_image1.jpg';
  return (
    <>
     <div className='w-[85.5rem]'>
     <Swiper
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
      <SwiperSlide className='relative h-[53rem] bg-cover bg-top bg-no-repeat' style={{ backgroundImage: `url(${slider})` }}>
        <div className='relative flex justify-center items-center'>
          <div className='absolute top-[39rem]'>
            <Buttons label={'Meet Chef Matt'} className='border-white w-[359px] h-[76px] border-2 font-normal text-white  font-serif text-[22px] '/>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='relative h-[53rem] bg-cover bg-top bg-no-repeat' style={{ backgroundImage: `url(${slider})` }}>
        <div className='relative flex justify-center items-center'>
          <div className='absolute top-[39rem]'>
            <Buttons label={'Meet Chef Matt'} className='border-white w-[359px] h-[76px] border-2 font-normal text-white  font-serif text-[22px]'/>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='relative h-[53rem] bg-cover bg-top bg-no-repeat' style={{ backgroundImage: `url(${slider})` }}>
        <div className='relative flex justify-center items-center'>
          <div className='absolute top-[39rem]'>
            <Buttons label={'Meet Chef Matt'} className='border-white w-[359px] h-[76px] border-2 font-normal text-white  font-serif text-[22px]'/>
          </div>
        </div>
      </SwiperSlide>

          </Swiper>
     </div>
    </>
  )
}
