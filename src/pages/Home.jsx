import React from 'react'
import HomeLayout from './HomeLayout'
import { SLIDER } from '../component/SLIDER';
import Products from '../component/Products';
import OfferSection from '../component/OfferSection';
import About from '../component/About';
import CallToAction from '../component/CallToAction';


const Home = () => {
  return (
    <HomeLayout>
      <SLIDER/>
      <Products />
      <OfferSection />
      <About />
      <CallToAction/>
    </HomeLayout>
  )
}

export default Home;
