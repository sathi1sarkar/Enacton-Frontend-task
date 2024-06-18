import React from 'react';
import callImage from '../assets/call_action.jpg';


const CallToAction = () => {
  return (
    <>
         <div className='call-to-action mt-[3rem] px-[3rem] pl-[6rem] lg:pl-[12rem] md:pl-[12rem]'>
          <div className="relative h-[17rem] lg:h-[25rem] md:h-[17rem] bg-cover bg-center "
              style={{ backgroundImage: `url(${callImage})` }}>
              
                  <div className="relative z-10 flex flex-col items-start justify-start h-full text-white pt-[2rem] pl-[2rem]  lg:pt-[7rem] lg:pl-[7rem]  md:pt-[2rem] md:pl-[2rem]">
                      <h1 className="text-2xl md:text-[38px] font-normal mb-4 font-serif border-b-2 leading-[50px]">SIGN UP SPECIAL PROMOTIONS</h1>
                      <p className="md:text-[18px] font-normal font-serif mb-8">Get exclusive deals you won’t find anywhere else straight to your inbox!</p>
                    

                      <form>
                          <div className='flex'>
                              <input type='email' className='backdrop-invert-0 bg-white/30 w-[180px] lg:w-[516px] 
                              md:w-[400px] h-[40px] border-2 border-white placeholder-white pl-0 md:pl-10 mr-3' placeholder='Enter Your Email Address' />
                              <button type='button' className='btn bg-[#D29A5A] w-[80px] md:w-[188px] h-[40px] font-serif  border-2 border-[#D29A5A]'>Subscribe</button>
                          </div>
                          
                      </form>
                  </div>
          </div>
         </div>
      
    </>
  )
}

export default CallToAction
