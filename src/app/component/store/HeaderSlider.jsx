import React from 'react'
import Image from 'next/image'
import { storehead } from '@/app/Data'


const HeaderSliderr = () => {
  return (
    <div className="carousel rounded-sm gap-2 mt-[3%] wuwu">
   {storehead.map((item) => (
     <div className="carousel-item  flex flex-col gap-1 justify-center items-center">
     <Image src={item.moimage} width={150} height={150} alt="flag" className=''/>
     <h1 className='uppercase text-xs text-darkbrown font-semibold'>{item.small}</h1>
     </div> 
   ))}
   
  </div>
  )
}

export default HeaderSliderr
