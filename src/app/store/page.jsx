
import React from 'react'
import HeaderSliderr from '../component/store/HeaderSlider'
import DropDownLink from '../component/store/DropdownLink'

import Essential from '../component/store/Essential'
import Image from 'next/image'
import { look } from '../Data'
import ThirdNav from '../component/ThirdNav'



import { Button } from '@/components/ui/button';

import {
  Sheet,
  SheetTrigger,
} from "@/components/ui/sheet"
import { FilterModal } from '../component/store/FilterModal'
import SortModal from '../component/store/SortModal'

const SHEET_SIDES = ["Filter"] 

const page = ({searchParams}) => {
  const {price, size, type , material, color} = searchParams
  
  return (
    
   <div className='w-full max'>
   <ThirdNav/>
     <div className='w-full max h-full mt-[10%] lg:pt-[20%] px-[3%] '>
      
       
        {/* header container */}
      <div className='w-full  h-full space-y-2 flex text-darkbrown  flex-col justify-start items-start'>
      <h1 className='text-5xl font-bold uppercase lg:text-3xl '>new arrivals</h1>
      <p className='capitalize lg:text-sm'>shop the latest collections and must-have styles from SKIMS</p>
      </div>
      <HeaderSliderr/>
     {/* gallery */}
      <div className='w-full h-full flex gap-5 mt-[3%] heading-border border-t-[1px] border-black-2 pt-[20px]'>
        {/* left */}
      <div className='w-[20%] lg:hidden flex flex-col px-4 h-screen sticky top-[100px] overflow-y-auto overflow-x-hidden z-10 '>
         <DropDownLink/>
        </div>
        {/* right */}
        <div className='w-[80%] h-full lg:justify-center lg:items-center flex flex-col lg:w-full  space-y-3  '>
      <div className='w-full flex justify-between items-center '>
    {/* sort modal */}
    <SortModal/>
{/* filter mobile */}
<div className="hidden lg:block">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="outline" className='py-4 bg-lightbrown text-white'>{side}</Button>
          </SheetTrigger>
         <FilterModal/>
        </Sheet>
      ))}
    </div>
{/* filter mobile end */}
      </div>
      {/* first section */}
       <Essential price={price} size={size} type={type} material={material} color={color}/>
     
        </div>
      </div>
      
      {/* learn more section */}
      <div className='w-full h-[400px] mt-[4%] lg:pt-[14%]'>
      <h1 className='text-5xl font-bold uppercase lg:text-3xl text-center sm:text-xl text-darkbrown'>looking for more ?</h1>
      <div className='w-full flex justify-between items-center mt-[3%]  lg:carousel lg:rounded-sm lg:gap-2'>
      {look.map((item) => (
         
        <div className='w-[320px] h-[320px] relative flex justify-center items-center lg:carousel-item lg:w-[300px]' key={item.id}>
        <Image src={item.moimage} width={400} height={300} className=' object-cover' />
        <h1 className='text-3xl lg:text-xl text-white font-bold uppercase top-[50%] absolute'>{item.small}</h1>
        </div>
        
      ))}
    
      </div>
     
      
     
  
  
      </div>

    </div>
   </div>
  )
}

export default page
