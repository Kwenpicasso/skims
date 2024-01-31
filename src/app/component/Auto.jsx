'use client'
import { herodetails, heromobile } from '../Data';
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


const Auto = () => {
  

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
      className="mySwiper w-full h-[80vh] mt-[1%] max"
    >
    {herodetails.map((item) => (
        <SwiperSlide className='w-full h-[80vh]'>
          <img src={item.image} className='w-full h-[80vh]  object-cover object-center' key={item.id}/>
        <div className='absolute w-[600px] h-[250px] bottom-0 w left-5 flex flex-col gap-1 '>
          <h1 className='text-[45px] lg:text-[32px] text-white font-bold uppercase w-[500px] sm:w-[350px]' >{item.header}</h1>
          <p className='text-base w-[550px] lg:w-[400px] sm:w-[300px] text-white'>{item.small}</p>
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

export default Auto
