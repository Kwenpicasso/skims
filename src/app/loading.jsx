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
import { arrivals } from './Data'
import SecondNav from './component/SecondNav'



const Loading = () => {
  return (
    <>
    <SecondNav/>
    <div className="flex items-center flex-col justify-center mt-[8%] space-x-4">
    <div className='w-full h-[80vh]  max flex justify-center items-center'>
    <Skeleton className="w-full h-[80vh] lg:h-[60vh] rounded-md mx-5" />
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
                <CardContent className="flex items-center justify-center ">
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


    <section className='w-full h-full max mt-[3%] lg:mt-0'>
      <div className='w-full mx-auto flex justify-center items-center'>
        <Skeleton className='w-[300px] rounded-sm p-6 bg-[#EEE4DA] text-white font-semibold uppercase text-center'></Skeleton>
      </div>

      <div className='w-full flex gap-4 flex-wrap mt-4 lg:gap-1 justify-between md:justify-around sm:justify-between xl:justify-around items-end'>
     {arrivals.map((item) => (
         <div className='w-[300px] h-[480px]  sm:h-[330px] sm:w-[180px] lg:mt-2' key={item.id}>
         <Skeleton className=' bg-[#EEE4DA] w-[300px] h-[400px] sm:h-[300px] sm:w-[180px]'>
        
        </Skeleton>
        
         </div>
     ))}
       
      </div>
    </section>

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
   
    <div className='w-full h-full mt-[4%] max flex gap-6 justify-between items-center lg:justify-center  lg:flex-col lg:px-3'>
     <Skeleton className='w-[50%] h-[600px]  lg:w-[95%] mx-auto'>

     </Skeleton>
      <Skeleton className='h-[600px] w-[50%] lg:w-[95%] mx-auto'>
     
      </Skeleton>
     
    </div>
    
    

    <div className='w-full h-[80vh] mt-[4%]  max flex justify-center items-center'>
    <Skeleton className="w-full h-[80vh] lg:h-[60vh] rounded-md mx-5" />
    </div>

    <div className='w-full max h-full mt-[3%]'>
      <Skeleton className="uppercase h-[200px] w-[60%] lg:w-[80%] mx-auto lg:text-2xl text-darkbrown text-4xl font-semibold text-center font-mono leading-normal"></Skeleton>
      <div class="w-[60%] lg:w-[90%] h-full mt-[60px] relative mx-auto flex justify-center  items-center">
      <Skeleton className='w-[760px] h-[415px]' width="760" height="415" src="https://www.youtube.com/embed/qSMCWiRUB64?si=ln4VkbiwBFccoFV4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Skeleton>
    </div>
    </div>
    <section className='w-full max h-full mt-[5%] '>
    <Skeleton className="uppercase h-[200px] w-[60%] lg:w-[80%] mx-auto font-mono lg:text-2xl  text-darkbrown text-4xl font-semibold text-center leading-normal"></Skeleton>
 <Skeleton className='uppercase text-darkbrown text-center text-xl font-mono mt-9 lg:text-2l mx-auto font-semibold w-[100px] h-[30px]'></Skeleton>
    

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
  </section>
  </div>
    </>
  )
}

export default Loading
