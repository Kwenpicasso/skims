import { Button } from '@/components/ui/button'
import React from 'react'
import Image from 'next/image'
import { arrivals } from '../Data'
const NewArrival = () => {
  return (
    <section className='w-full h-full max mt-[3%] lg:mt-0'>
      <div className='w-full mx-auto flex justify-center items-center'>
        <Button className='bb'>shop all new arrivals</Button>
      </div>

      <div className='long'>
     {arrivals.map((item) => (
         <div className='w-[300px] h-[480px]  sm:h-[330px] sm:w-[180px] lg:mt-2' key={item.id}>
         <div className='w-[300px] h-[400px] sm:h-[300px] sm:w-[180px] bg-black'>
         <Image src={item.moimage} width={300} height={300} alt='new' className='w-full h-full object-cover'/>
        </div>
        <h1 className='underline text-darkbrown font-semibold text-center font-mono text-lg uppercase mt-2'>{item.small}</h1>
         </div>
     ))}
       
      </div>
    </section>
  )
}

export default NewArrival
