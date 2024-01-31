
import React from 'react'
import Image from 'next/image'
import { client } from '@/Utils/ConfigSanity'
import Link from 'next/link'
import Color from './Color'







const Essential = async ({price, size, type, material}) => {

  const priceOrder = price ? `| order(price ${price})` : ''
  const order = `${priceOrder}`;
  const productFilter = `_type == 'product'`
  const sizeFilter = size ? `&& '${size}' in size` : ''
  const typeFilter = type ? `&& '${type}' in type` : ''
  const materialFilter = material ? `&& '${material}' in material` : ''
  const filter =`*[${productFilter}${sizeFilter}${typeFilter}${materialFilter}]`
  
  
 
// querying the data of the products from sanity studio
async function getData() {
  
  
  const query = `${filter}  | order(_createdAt asc) ${order}{
    'image': mainimage[0].asset->url,
    _id,
      firstname,
      secondname,
      class,
      price,
      'slug': slug.current,
      'pink': pink[0].asset->url,
      'black': black[0].asset->url,
      'red': red[0].asset->url,
      'green': green[0].asset->url,
      'blue': blue[0].asset->url,
      'skyblue': skyblue[0].asset->url,
      'gray': gray[0].asset->url,
      'lemon': lemon[0].asset->url,
      'purple': purple[0].asset->url, 
      'brown': brown[0].asset->url,
      'orange': orange[0].asset->url,
    }`; 
  const data = await client.fetch(query);
  return data;
  
}
  const data = (await getData())
 
  return (
    <>
       <div className='w-[70%] lg:w-full ml-5 lg:ml-0 mt-[3%] space-y-2 flex  text-darkbrown   flex-col justify-start items-start'>
      <h1 className='text-3xl font-bold uppercase lg:text-2xl '>essential bodysuits</h1>
      <p className='capitalize text-sm'>The most flattering contouring bodysuits in our beloved Cherry Blossom and a new cream colorway</p>
      </div>
       <div className='w-[95%] lg:w-full mx-auto  h-full items-start justify-start lg:justify-center lg:items-center  flex-wrap  flex gap-2 lg:gap-3 '>
       {data.map((item) => (
         
       
         <div className='w-[290px]  lg:w-[170px] flex flex-col gap-3 justify-center items-center lg:h-[320px] h-[400px]' key={item._id}>
           <Link href={`/store/${item.slug}`}>
         <div className='w-[280px] lg:w-[180px] lg:h-[300px] relative h-[280px] mx-auto flex  justify-center items-center'>
         <Image src={item.image} width={250} height={250} alt='save' className=''/>
       
         {item.class ? (
      <h1 className='cc capitalize'>{item.class}</h1>
    ) : ''}
         </div>
         <div className='space-y-1 text-xs text-center  text-darkbrown '>
         <h3 className='capitalize '>{item.firstname}</h3>
         <h2 className='uppercase font-semibold'>{item.secondname}</h2>
         <p className='font-semibold text-sm'>${item.price}</p>
         </div>
         </Link>
           
         {/* color balls */}
        <Color item={item}/>
 
         </div>
        
         
       ))}
      
      
      

        
       </div>
    </>
  )
}

export default Essential
