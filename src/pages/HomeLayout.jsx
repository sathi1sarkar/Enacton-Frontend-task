import React from 'react'
import SideNavbar from '../component/SideNavbar'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import slider from '../assets/slide4_image1.jpg';
import Buttons from '../commoncomponents/buttons/Buttons';
import Products from '../component/Products';
import OfferSection from '../component/OfferSection';
import About from '../component/About';
import CallToAction from '../component/CallToAction';
import Contact from '../component/Contact';
import Singnature from '../component/Singnature';


const HomeLayout = ({children}) => {
  const backgroundImage = '../assets/slide4_image1.jpg';
  return (
    <>
     <style>
        {`
        
        `}
    </style>
   <main>
    <div className='flex'>
      <div>
      
      <aside class="h-screen sticky top-0 z-40">
        <SideNavbar />
       </aside>

     
      </div>
      <div className=''>
        <div className='banner w-[35.2rem] lg:w-[98.8vw] md:w-[57.4rem]'>
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
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
          <SwiperSlide className='relative h-[22rem] lg:h-[53rem] md:h-[38rem] bg-cover bg-top bg-no-repeat' style={{ backgroundImage: `url(${slider})` }}>
            <div className='relative flex justify-center items-center'>
              <div className='absolute top-[14rem] lg:top-[39rem] md:top-[27rem]'>
                <Buttons label={'Meet Chef Matt'} className='border-white w-[359px] h-[76px] border-2 font-normal text-white  font-serif text-[22px] '/>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='relative h-[22rem] lg:h-[53rem] md:h-[38rem] bg-cover bg-top bg-no-repeat' style={{ backgroundImage: `url(${slider})` }}>
            <div className='relative flex justify-center items-center'>
              <div className='absolute top-[14rem] lg:top-[39rem] md:top-[27rem]'>
                <Buttons label={'Meet Chef Matt'} className='border-white w-[359px] h-[76px] border-2 font-normal text-white  font-serif text-[22px]'/>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='relative h-[22rem] lg:h-[53rem] md:h-[38rem] bg-cover bg-top bg-no-repeat' style={{ backgroundImage: `url(${slider})` }}>
            <div className='relative flex justify-center items-center'>
              <div className='absolute top-[14rem] lg:top-[39rem] md:top-[27rem]'>
                <Buttons label={'Meet Chef Matt'} className='border-white w-[359px] h-[76px] border-2 font-normal text-white  font-serif text-[22px]'/>
              </div>
            </div>
          </SwiperSlide>

          </Swiper>
        </div>

        <Products/>

        <OfferSection />

        <About />
        <CallToAction />
        <Contact />
        <Singnature />
      </div>
    </div>
   </main>
   </>
  )
}

export default HomeLayout
