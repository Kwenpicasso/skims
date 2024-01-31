'use client'
import React, { useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay} from 'swiper/modules';


const FirstNav = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navStyle = {
    position: 'fixed',
    width: '100%',
    zIndex: 100,
    top: 0,
  };
  return (
   
      <div className='w-full max bg-[#AB8F80]'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        style={navStyle}
        className="mySwiper w-full h-[35px] bg-[#AB8F80] text-white font-bold uppercase text-base font-mono fixed max sm:text-sm "
      >
       
    
      <SwiperSlide className='text-center mt-2'>international shipping available</SwiperSlide>
        <SwiperSlide className='underline text-center mt-2'>curated pick up for you</SwiperSlide>
        <SwiperSlide className='text-center mt-2'>return policy</SwiperSlide>
        <SwiperSlide className='text-center mt-2'>free shopping on domestic orders $75</SwiperSlide>
      
      </Swiper>
    </div>
  )
}

export default FirstNav
