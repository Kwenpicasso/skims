
import ThirdNav from '@/app/component/ThirdNav'
import CartButton from '@/app/component/store/CartButton'
import ImageGallery from '@/app/component/store/ImageGallery'
import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Trending from '@/app/component/Trending'
import { client } from '@/Utils/ConfigSanity'
import DetailColor from '@/app/component/store/DetailColor'





const Description = async ({params}) => {

  // querying the data of the products from sanity studio
async function getData(slug) {
  const query = `*[_type == 'product' && slug.current == '${slug}'][0]{
    'image': mainimage[].asset->url,
    _id,
      firstname,
      secondname,
      class,
      price,
      oldprice,
      'size': size[],
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

  
  const data = (await getData(params.slug))

  return (
    <div className='w-full h-full max sm:pt-[15%] lg:pt-[6%]'>
      <ThirdNav/>
      <div className='w-[95%] mt-[8%] max h-full flex gap-8 p-3 lg:flex-col '>
      {/* images gallery */}
     <ImageGallery data={data}/>
      {/* images desc */}
      <div className='w-[40%] h-full  flex flex-col pl-[2%] lg:w-full gap-2 px-5 ' >
     
      <>
       <h3 className='uppercase text-sm text-gray-500 '>
        {data.firstname}
       </h3>
      <div className='w-full flex gap-2 font-bold uppercase text-2xl '>
      <h1>{data.secondname}</h1>
      <div className='flex gap-1'>
      {data.oldprice ? (
        <p className='text-gray-500 opacity-40 line-through'>${data.oldprice}</p>
      ) : ''}
      <p className='text-red-700'>${data.price}</p>
      </div>
      </div>
       <div className='w-[50%] flex gap-3 items-center lg:w-full'>
       <div className="rating w-[90px] space-x-2">
                 <input type="radio" name="rating-2" className="mask mask-star-2 bg-lightbrown " />
                 <input type="radio" name="rating-2" className="mask mask-star-2 bg-lightbrown" checked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-lightbrown" />
                 <input type="radio" name="rating-2" className="mask mask-star-2 bg-lightbrown" />
                 <input type="radio" name="rating-2" className="mask mask-star-2 bg-lightbrown" />
                
        </div>
         <p className='text-black'>44</p>
         <div className='w-[1px] h-[25px] bg-black'>
         </div>
         <h2 className='text-sm text-black'>118 Reviews</h2>
       </div>
   {/* colors */}
    <DetailColor data={data}/>
      </>
     

       {/* size */}
       <div className='w-full flex mt-3 flex-col gap-3 uppercase text-lg font-semibold'>
        <div className='w-full flex justify-between items-center'>
        <h1>size</h1>
        <h1 className='underline'>size guide</h1>
        </div>

       </div>
      
         <div className='w-full flex justify-start items-start gap-2 font-semibold uppercase'>
         {data.size[0] ? (
          <span className='w-7 h-7 border border-darkbrown p-5 rounded-full flex justify-center items-center text-center'>{data.size[0]}</span>
         ) : ''}
         {data.size[1] ? (
          <span className='w-7 h-7 border border-darkbrown p-5 rounded-full flex justify-center items-center text-center'>{data.size[1]}</span>
         ) : ''}
         {data.size[2] ? (
          <span className='w-7 h-7 border border-darkbrown p-5 rounded-full flex justify-center items-center text-center'>{data.size[2]}</span>
         ) : ''}
         {data.size[3] ? (
          <span className='w-7 h-7 border border-darkbrown p-5 rounded-full flex justify-center items-center text-center'>{data.size[3]}</span>
         ) : ''}
         {data.size[4] ? (
          <span className='w-7 h-7 border border-darkbrown p-5 rounded-full flex justify-center items-center text-center'>{data.size[4]}</span>
         ) : ''}
         {data.size[5] ? (
          <span className='w-7 h-7 border border-darkbrown p-5 rounded-full flex justify-center items-center text-center'>{data.size[5]}</span>
         ) : ''}
         {data.size[6] ? (
          <span className='w-7 h-7 border border-darkbrown p-5 rounded-full flex justify-center items-center text-center'>{data.size[6]}</span>
         ) : ''}
        
         </div>
    
  {/* add to cart button */}
  <CartButton data={data}/>

  
  <Accordion type="single" collapsible className="w-full text-darkbrown border-t-[1px] border-darkbrown mt-[20px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>DETAILS</AccordionTrigger>
        <AccordionContent>
        Super soft and stretchy, this Thong is certain to become part of your regular rotation. This ultra-comfortable style is made of buttery fabric and features a no cut design that prevents digging
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>FIT & FABRIC</AccordionTrigger>
        <AccordionContent>
        Low Rise, Thong Back, 100% Cotton Gusset, No-Cut Finishing Prevents Digging
Fiona Is Size 2, 32d, And 5’ 3”, Wearing Skims Size S
76% Polyamide / 24% Elastane
Machine Wash Cold, Non Chlorine Bleach, Cool Iron, Do Not Dry Clean
Imported
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>SHIPPING & RETURNS</AccordionTrigger>
        <AccordionContent>
        All returns must be postmarked within 30 days of order date. We offer express tracked pre-paid returns for a US$15 or local currency equivalent fee (deducted from final refund) or self-postage returns at own cost.
         <br/>
         We ask that you wear underwear when first trying-on your purchase, as we reserve the right to refuse returns that show any signs of wear. Products must be returned unworn, unwashed, in their original condition and with all tags and liners attached.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  

      </div>
      
       
    </div>
    <Trending/>
    </div>
  )
}

export default Description
