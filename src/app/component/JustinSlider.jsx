import * as React from "react"
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { client } from '@/Utils/ConfigSanity'
import Link from 'next/link'




// querying the data of the products from sanity studio
async function getData() {
  const query = `*[_type == 'product'][0...8] | order(_createdAt desc){
    'image': mainimage[0].asset->url,
    _id,
      mainname,
      price,
      class,
      'slug': slug.current
    }`; 
  const data = await client.fetch(query);
  return data;
  
}
export async function CarouselSize() {
    const data = (await getData())
    
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[90%] mx-auto"
    >
      <CarouselContent>
        
          {data.map((item) => (
           
            <CarouselItem key={item._id} className="sm:basis-1/2 lg:basis-1/3 basis-1/4 w-full ">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6 lg:p-0">
                  <Link href={`/store/${item.slug}`}>
                  
                <div className='w-[700px]  h-[400px] text-center flex flex-col justify-center items-center '>
    <div className='sm:w-[200px] relative w-[300px] flex justify-center items-center flex-col'>
    <Image src={item.image}  width={300} height={300} alt="justin" className=' w-full block' />
    {item.class ? (
      <h1 className='cc capitalize'>{item.class}</h1>
    ) : ''}
    </div>
    <h1 className=' w-[300px] sm:w-[140px] mx-auto flex justify-center items-center uppercase text-center text-darkbrown text-xs font-semibold mt-2'>{item.mainname}</h1>
    <h1 className=' w-[300px] sm:w-[200px] text-darkbrown text-xs font-semibold flex justify-center items-center mt-2'>${item.price}</h1>
     </div> 
     </Link>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
           
          ))}
      
      </CarouselContent>
      <CarouselPrevious className='lg:ml-3' />
      <CarouselNext className='lg:mr-3'/>
    </Carousel>
  )
}
