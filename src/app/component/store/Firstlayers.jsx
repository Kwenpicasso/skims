import React from 'react'
import Image from 'next/image'
import {  Heart } from 'lucide-react'
import { client } from '@/Utils/ConfigSanity'
import Link from 'next/link'




const Firstlayers = async ({price, size}) => {
  const priceOrder = price ? `| order(price ${price})` : ''
  const order = `${priceOrder}`;
  const productFilter = `_type == 'product'`
  const sizeFilter = size ? `&& '${size}' in size` : ''
  const filter =`*[${productFilter}${sizeFilter}]`
  // querying the data of the products from sanity studio
async function getData() {
  const query = `${filter}[14...19] | order(_createdAt asc) ${order}{
    'image': mainimage[0].asset->url,
    _id,
      firstname,
      secondname,
      class,
      price,
      'slug': slug.current
    }`; 
  const data = await client.fetch(query);
  return data;
  
}
  const data = (await getData())
  return (
    <>
    <div className='w-full lg:w-full ml-5 lg:ml-0 mt-[3%] space-y-2 flex  text-darkbrown  heading-border border-t-[1px] border-black-2 pt-[20px] flex-col justify-start items-start'>
    <h1 className='text-3xl font-bold uppercase lg:text-2xl '>skims first layers</h1>
    <p className='capitalize text-sm'>All-new styles in our next-level knits for max warmth and comfort under winter layers</p>
    </div>
     <div className='w-[95%] lg:w-full mx-auto  h-full lg:justify-center lg:items-center items-start justify-start  flex-wrap  flex gap-2 lg:gap-3 '>
     {data.map((item) => (
         
      <Link href={`/store/${item.slug}`}>
         <div className='w-[290px]  lg:w-[170px] flex flex-col gap-3 justify-center items-center lg:h-[320px] h-[400px]' key={item._id}>
         <div className='w-[280px] lg:w-[180px] lg:h-[300px] relative h-[280px] mx-auto flex  justify-center items-center'>
         <Image src={item.image} width={250} height={250} alt='save' className=''/>
         <Heart className='absolute top-1 right-5' size={20} />
         {item.class ? (
      <h1 className='cc capitalize'>{item.class}</h1>
    ) : ''}
         </div>
         <div className='space-y-1 text-xs text-center  text-darkbrown '>
         <h3 className='capitalize '>{item.firstname}</h3>
         <h2 className='uppercase font-semibold'>{item.secondname}</h2>
         <p className='font-semibold text-sm'>${item.price}</p>
         </div>
         {/* color balls */}
         <div className='w-full flex gap-2 justify-center items-center'>
          <span className='w-3 h-3 rounded-full bg-blue-700'></span>
          <span className='w-3 h-3 rounded-full bg-red-400'></span>
          <span className='w-3 h-3 rounded-full bg-pink-400'></span>
          <span className='w-3 h-3 rounded-full bg-green-400'></span>
          <span className='w-3 h-3 rounded-full bg-black'></span>
          <span className='w-3 h-3 rounded-full bg-blue-400'></span>
         </div>
 
         </div>
      </Link>
         
       ))}

   
    
     
    
     
      
      
      
     </div>
  </>
  )
}

export default Firstlayers
