import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
const Two = () => {
  return (
    <div className='w-full h-full mt-[4%] max flex gap-6 justify-between  lg:flex-col lg:px-3'>
      <div className=' h-full w-[50%] relative lg:w-full'>
      <img src='/kim.webp' className='w-full object-cover'/>
      <div className='absolute w-[600px] h-[250px] bottom-[-80px] w left-5 flex flex-col gap-1 '>
          <h1 className='text-[40px] lg:text-2xl text-white font-bold uppercase w-[500px] sm:w-[300px]' >two piece sets</h1>
          <p className='text-base md:text-sm w-[550px] lg:w-[300px] font-extralight sm:w-[200px] text-white'>Everyday sets for lounging and beyond</p>
          <Link href='/store'><Button className='bbb'>Shop Now</Button></Link>
        </div>
      </div>
      <div className='h-full w-[50%] relative lg:w-full'>
      {/* <Image src='/2.webp' width={700} height={700} className='object-cover'/> */}
      <img src='/2.webp' className='w-full object-cover'/>
      <div className='absolute w-[600px] h-[250px] bottom-[-80px] w left-5 flex flex-col gap-1 '>
          <h1 className='text-[40px] lg:text-2xl text-white font-bold uppercase w-[500px] sm:w-[300px]' >the sleep edit</h1>
          <p className='text-base md:text-sm w-[550px] lg:w-[400px] sm:w-[200px] font-extralight text-white '>Your old pajamas can’t compete with our ultra-soft and comfy sleep sets</p>
          <Link href='/store'><Button className='bbb'>Shop Now</Button></Link>
        </div>
      </div>
     
    </div>
  )
}

export default Two
