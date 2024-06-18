import React from 'react'
import chefabout1 from '../assets/chef1.png';
import chefabout2 from '../assets/chef2.jpg';
import chefabout3 from '../assets/chef3.png';
import chefabout4 from '../assets/chef4.png';

const About = () => {
  return (
    <div className=' max-w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  mt-[-8rem] px-[3rem] pl-[6rem] lg:pl-[12rem] md:pl-[12rem]'>
      <div className='flex flex-col relative'><img src={chefabout1} /></div>
      <div className='flex flex-col relative'><img src={chefabout2} /></div>
      <div className='flex flex-col relative mt-[-2px]'><img src={chefabout3} /></div>
      <div className='flex flex-col relative mt-[-2px]'><img src={chefabout4} /></div>
    </div>
  )
}

export default About;

