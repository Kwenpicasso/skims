import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'
import ThirdNav from '../component/ThirdNav'

const LoadingStor = () => {
  return (
   <>
   <ThirdNav/>
   <div className='w-full max h-full mt-[10%] lg:mt-[20%] px-[3%] '>
      {/* header container */}
      <Skeleton className='w-[500px] rounded-btn lg:w-[300px]  h-[100px] space-y-2 flex text-darkbrown  flex-col justify-start items-start'>
      
      </Skeleton>
      <Skeleton className='rounded-btn gap-2 mt-[3%] w-full h-[150px]'>

      </Skeleton>
      <div className='w-full h-full flex gap-5 mt-[3%]'>
      <Skeleton className='w-[20%] lg:hidden flex flex-col px-4 h-screen sticky top-[100px] overflow-y-auto overflow-x-hidden z-10 '>
         
        </Skeleton>
        <Skeleton className='w-[80%] h-screen lg:justify-center lg:items-center flex flex-col lg:w-full space-y-3 '>
          
        </Skeleton>
      </div>
      <div className='w-full h-full mt-[4%] lg:pt-[14%]'>
      <Skeleton className='flex justify-center mx-auto items-center w-[300px] h-[60px]'></Skeleton>
      <Skeleton className='w-full h-[300px] mt-[3%]'>

      </Skeleton>
      </div>
   </div>

   </>
  )
}

export default LoadingStor
