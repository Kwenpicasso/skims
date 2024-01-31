
import React from 'react'
import { CarouselSize } from './ThreeSlider'



const Three = () => {
  return (
    <section className='w-full max flex gap-2 lg:gap-0 justify-between  h-full mt-[3%] lg:flex-col'>
      <div className=' w-[55%]  h-[80vh] lg:w-full lg:h-[40vh] relative'>
      <img src='/b.webp' className='w-full h-full object-cover'/>
      <div className='hidden lg:block absolute space-y-3 top-[40%] left-4 text-white font-mono'>
      <h1 className='text-[35px] lg:text-3xl  font-bold uppercase w-[500px] sm:w-[300px]'>3 fits for $360</h1>
       <p className='text-sm'>Shop our best-selling styles at special pricing.</p>
       <p className='font-semibold underline uppercase'>shop all</p>
      </div>
      </div>
      <div className='w-[43%] lg:h-[400px] lg:w-full'>
      <div className='lg:hidden'>
      <h1 className='text-[35px] lg:text-3xl text-darkbrown font-bold uppercase w-[500px] sm:w-[300px] font-mono'>3 fits for $360</h1>
       <p className='text-base'>Shop our best-selling styles at special pricing.</p>
      </div>
      <CarouselSize/>
      </div>
    </section>
  )
}

export default Three
