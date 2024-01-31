'use client'
import {  herodetailsTwo } from '../Data';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { Button } from '@/components/ui/button';
import Link from 'next/link'


const AutoTwo = () => {
  

  return (
    <section className='w-full h-full '>
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      
      modules={[Autoplay, Pagination]}
      className="mySwiper w-full h-full mt-[5%] max"
    >
    {herodetailsTwo.map((item) => (
        <SwiperSlide className='w-full h-[80vh]'>
          <img src={item.image} className='w-full h-ful object-cover' key={item.id}/>
        <div className=' w-[600px] absolute h-[250px] lg:bottom-0 w left-5 flex flex-col gap-1 '>
          <h1 className='text-[45px] lg:text-[33px] text-white font-bold uppercase w-[500px] sm:w-[400px]' >{item.header}</h1>
          <p className='text-sm w-[550px] font-extralight lg:w-[400px] sm:w-[300px] text-white'>{item.small}</p>
          <Link href='/store'>
          <Button className='bg-[#EEE4DA] text-[#62554A] font-semibold w-[200px] uppercase hover:text-white'>Shop Now</Button>
          </Link>
        </div>
        
        </SwiperSlide>
    ))}
    
     
    </Swiper>
   
  </section>
  )
}

export default AutoTwo
