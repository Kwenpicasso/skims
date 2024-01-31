
import ThirdNav from '@/app/component/ThirdNav'
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Loading = () => {
  return (
    <div className='w-full h-full max'>
    <ThirdNav/>
    <div className='w-[90%] mt-[8%] max h-full flex gap-8 p-3 lg:flex-col lg:pt-[10%]'>
    <div className='w-[55%] h-full flex gap-4 lg:w-full lg:flex-col-reverse '>
    {/* four images */}
    <div className='w-[25%] flex flex-col justify-center items-center gap-3 lg:flex-row lg:w-full'>
      <Skeleton className='w-[150px] h-[150px]  sm:h-[100px] '>
    
      </Skeleton>
      <Skeleton className='w-[150px] h-[150px]  sm:h-[100px] '>
    
      </Skeleton>
      <Skeleton className='w-[150px] h-[150px]  sm:h-[100px] '>
    
      </Skeleton>
      <Skeleton className='w-[150px] h-[150px]  sm:h-[100px] '>
    
      </Skeleton>
      
     

    </div>
    {/* big image */}
    <Skeleton className='w-[80%] h-[600px]  lg:w-full'>
    
    </Skeleton>
  </div>
    {/* images desc */}
    <div className='w-[40%] h-full  flex flex-col pl-[2%] lg:w-full gap-2 px-5 ' >
      <Skeleton className='uppercase text-sm h-[20px] w-[50%] rounded-btn '>
        
       </Skeleton>
      <Skeleton className='w-full flex h-[30px] rounded-btn  gap-2 font-bold uppercase text-2xl '>
    
      </Skeleton>
       <Skeleton className='h-[25px] w-[50%] rounded-btn  flex gap-3 items-center lg:w-full'>
       
       </Skeleton>
   {/* colors */}
       <Skeleton className='w-[50%] h-[25px] rounded-btn  mt-3 flex flex-col gap-2 uppercase font-semibold'>
       
       
       </Skeleton>

       {/* size */}
       <Skeleton className='w-full flex h-[30px] rounded-btn  mt-3 flex-col gap-3 uppercase text-lg font-semibold'>
        

       </Skeleton>
       <div className='w-full flex justify-start items-start gap-2 font-semibold'>
       <Skeleton className='w-7 h-7 border p-5 rounded-full flex justify-center items-center text-center'></Skeleton>
       <Skeleton className='w-7 h-7 border p-5 rounded-full flex justify-center items-center text-center'></Skeleton>
       <Skeleton className='w-7 h-7 border  p-5 rounded-full flex justify-center items-center text-center'></Skeleton>
       <Skeleton className='w-7 h-7 border  p-5 rounded-full flex justify-center items-center text-center'></Skeleton>
       <Skeleton className='w-7 h-7 border p-5 rounded-full flex justify-center items-center text-center'></Skeleton>
       <Skeleton className='w-7 h-7 border p-5 rounded-full flex justify-center items-center text-center'></Skeleton>
       
       </div>
  
      <Skeleton className='w-full h-[400px] mt-[20px] rounded-btn '>

      </Skeleton>
  


      </div>

    </div>
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[90%] mx-auto"
    >
      <CarouselContent>
        {Array.from({ length: 8 }).map((_, index) => (
          <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/2 basis-1/4 w-full ">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                <div className='w-[700px]  h-[400px] text-center flex flex-col justify-center items-center '>
    <Skeleton className='sm:w-[200px] h-[300px] bg-[#EEE4DA] relative w-[300px] flex justify-center items-center flex-col'>
    
    <Skeleton className='absolute bottom-4 w-[80px] text-center flex justify-center items-center text-xs h-[7px] text-black rounded-sm p-3 bg-[#EEE4DA]'></Skeleton>
    </Skeleton>
    <Skeleton className=' w-[300px] h-[30px] sm:w-[200px] mx-auto flex justify-center items-center uppercase text-center text-darkbrown text-xs font-semibold mt-2 bg-[#EEE4DA]'></Skeleton>
    <Skeleton className=' w-[300px] sm:w-[200px] text-darkbrown text-xs font-semibold flex justify-center items-center mt-2'></Skeleton>
     </div> 
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      
    </Carousel>

      
    </div>
  )
}

export default Loading
