'use client'
import React from 'react'
import ThirdNav from '../component/ThirdNav'
import { Heart } from 'lucide-react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import {  useDispatch } from 'react-redux'
import { removeFromWish } from '../../../redux/WishlistReducer'
import { Button } from '@/components/ui/button'
import { look } from '../Data'





const page = () => {
  const wish = useSelector((state) => state.wish.wish);
  const wishh = useSelector((state) => state.wish.wish.length);
  const dispatch = useDispatch();
  const removeWish = (data) => {
   dispatch(removeFromWish(data));
  }
  console.log(wish)
  return (
    <div className='w-full max h-full'>
    <ThirdNav/>
        
      <div className='w-full max h-full mt-[10%] lg:mt-[26%] px-[3%]'>
        {/* header container */}
        <div className='w-full  h-full space-y-3 flex text-darkbrown  flex-col justify-start items-start'>
      <h1 className='text-5xl font-bold uppercase lg:text-3xl '>wishlists</h1>
      <h1 className='text-sm'>{wishh} Items</h1>
      </div>
      {/* items */}
      <div className='w-[95%] lg:w-full mx-auto  h-full items-start justify-start lg:justify-center lg:items-center  flex-wrap  flex gap-2 lg:gap-3 '>
      {wish == 0 ? (
        <div className='w-full h-full justify-center flex gap-4 items-center flex-col'>
          <h1 className='capitalize text-darkbrown text-sm'>you dont have any product in your wishlist</h1>
          <Button className='uppercase bg-lightbrown text-white outline-none'>see best sellers collection</Button>

          

        </div>
      ) : (
        <>
     {wish.map((item) => (
       <div className='w-[290px]  lg:w-[170px] flex flex-col gap-3 justify-center items-center lg:h-[320px] h-[400px]' key={item._id} >
       <div className='w-[280px] lg:w-[180px] lg:h-[300px] relative h-[280px] mx-auto flex  justify-center items-center'>
       <Image src={item?.image[0]} width={300} height={300} className=''/>
       <Heart className='absolute top-1 right-5 cursor-pointer' fill='black' size={20} onClick={() => removeWish(item)}/>
       
    
  
       </div>
       <div className='space-y-1 text-xs text-center  text-darkbrown '>
       <h3 className='uppercase '>{item.firstname}</h3>
       <h2 className='uppercase font-semibold'>{item.secondname}</h2>
       <p className='font-semibold text-sm'>${item.price}</p>
       </div>
      

       </div>
     ))}
        </>
      ) }
      
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
