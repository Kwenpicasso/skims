import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function AccordionDemo() {
    return (
      <Accordion type="multiple" collapsible className="w-full h-screen mt-[10%]  text-darkbrown">
        <AccordionItem value="item-1">
          <AccordionTrigger>NEW</AccordionTrigger>
          <AccordionContent>
            <div className="w-full flex h-full flex-col ">
              {/* top */}
              <div className="w-full flex gap-2 capitalize text-sm flex-col justify-end items-start">
               
               <h1>all new arrivals</h1>
               <h1>back in stock</h1>
               <h1>2 hour delivery</h1>
              </div>
            </div>
            {/* middle */}
            <AccordionItem value="item-2">
          <AccordionTrigger className='font-semibold'>DROPS</AccordionTrigger>
          <AccordionContent>
            <div className="w-full flex justify-center gap-5 items-start">
            <div className="w-[2px] h-[148px] bg-darkbrown"></div>
            <div className="w-[70%] flex flex-col justify-start items-start text-sm gap-2 capitalize ">
            <p>new raw edge</p>
      <p>new essential bodysuits</p>
      <p>new stretch lace</p>
      <p>new fit everybody</p>
      <p>new skims jacquard</p>
            </div>
            </div>
          </AccordionContent>
        </AccordionItem>
            {/* bottom */}
            <div className="w-full flex flex-col justify-center gap-3 mt-3 items-center">
              <div className="w-full flex gap-4 justify-start items-start">
              <div className="w-[25%]">
              <img src='/c.webp' className='w-full h-full object-cover'/>
              </div>
              <div className="w-[60%] capitalize text-sm flex flex-col gap-2">
              <h1 className="uppercase font-semibold">the winter shop</h1>
              <p>The perfect everybody bra with next-level stretch and comfort</p>
              </div>
              </div>
              <div className="w-full flex gap-4 justify-start items-start">
              <div className="w-[25%]">
              <img src='/cc.webp' className='w-full h-full object-cover'/>
              </div>
              <div className="w-[60%] capitalize text-sm flex flex-col gap-2">
              <h1 className="uppercase font-semibold">the t-shirt shop</h1>
              <p>This is one bralette you'll never want to take off</p>
              </div>
              </div>
            </div>
          </AccordionContent>
          
        </AccordionItem>
        <AccordionItem>
          <h1 className="font-medium py-4">BEST SELLERS</h1>
          
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>BRAS</AccordionTrigger>
          <AccordionContent>
          <div className="w-full flex h-full flex-col ">
              {/* top */}
              <div className="w-full flex gap-2 capitalize text-sm flex-col justify-end items-start">
               
              <h1>all bras</h1>
              <h1>all bralettes</h1>
              <h1>find your size</h1>
              <h1>the bra guide</h1>
              <h1>lingerie</h1>
              </div>
            </div>
            {/* middle */}
            <AccordionItem value="item-4">
          <AccordionTrigger className='font-semibold'>SILHOUETTE</AccordionTrigger>
          <AccordionContent>
            <div className="w-full flex justify-center gap-5 items-start">
            <div className="w-[2px] h-[210px] bg-darkbrown"></div>
            <div className="w-[70%] flex flex-col justify-start items-start text-sm gap-2 capitalize ">
            <p>t-shirt</p>
            <p>scoop</p>
            <p>demi</p>
            <p>triangle</p>
            <p>plunge</p>
            <p>strapless</p>
            <p>balconette</p>
            <p>full coverage</p>
            </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        {/* bottom */}
            <AccordionItem value="item-5">
          <AccordionTrigger className='font-semibold'>LINNING</AccordionTrigger>
          <AccordionContent>
          <div className="w-full flex flex-col justify-center gap-3 mt-3 items-center">
              <div className="w-full flex gap-4 justify-start items-start">
              <div className="w-[25%]">
              <img src='/x.webp' className='w-full h-full object-cover'/>
              </div>
              <div className="w-[60%] capitalize text-sm flex flex-col gap-2">
              <h1 className="uppercase font-semibold">fits everybody t-shirt bra</h1>
              <p>The perfect everybody bra with next-level stretch and comfort</p>
              </div>
              </div>
              <div className="w-full flex gap-4 justify-start items-start">
              <div className="w-[25%]">
              <img src='/xx.webp' className='w-full h-full object-cover'/>
              </div>
              <div className="w-[60%] capitalize text-sm flex flex-col gap-2">
              <h1 className="uppercase font-semibold">cotton ib plunge bralette</h1>
              <p>This is one bralette you'll never want to take off</p>
              </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
            
          
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>UNDERWEAR</AccordionTrigger>
          <AccordionContent>
          <div className="w-full flex h-full flex-col ">
              {/* top */}
              <div className="w-full flex gap-2 capitalize text-sm flex-col justify-end items-start">
               
              <h1>all underwear</h1>
              <h1>bundle & save</h1>
              <h1>lingerie</h1>
              </div>
            </div>
            {/* middle */}
            <AccordionItem value="item-7">
          <AccordionTrigger className='font-semibold'>STYLE</AccordionTrigger>
          <AccordionContent>
            <div className="w-full flex justify-center gap-5 items-start">
            <div className="w-[2px] h-[160px] bg-darkbrown"></div>
            <div className="w-[70%] flex flex-col justify-start items-start text-sm gap-2 capitalize ">
            <p>thongs</p>
            <p>boxers</p>
            <p>boy shorts</p>
            <p>cheeky underwear</p>
            <p>briefs</p>
            <p>hosiery</p>
            </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        {/* bottom */}
            <AccordionItem value="item-8">
          <AccordionTrigger className='font-semibold'>LINNING</AccordionTrigger>
          <AccordionContent>
          <div className="w-full flex flex-col justify-center gap-3 mt-3 items-center">
              <div className="w-full flex gap-4 justify-start items-start">
              
      
              </div>
              <div className="w-full flex gap-4 justify-start items-start">
              <div className="w-[25%]">
              <img src='/xx.webp' className='w-full h-full object-cover'/>
              </div>
              <div className="w-[60%] capitalize text-sm flex flex-col gap-2">
              <h1 className="uppercase font-semibold">bundle and save</h1>
              <p>mix and match best-selling styles</p>
              </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>CLOTHING & LOUNGE</AccordionTrigger>
          <AccordionContent>
          <div className="w-full flex h-full flex-col ">
              {/* top */}
              <div className="w-full flex gap-2 capitalize text-sm flex-col justify-end items-start">
               
              <h1>all loungewear</h1>
              <h1>all clothing</h1>
              <h1>fabric guide</h1>
              </div>
            </div>
            {/* middle */}
            <AccordionItem value="item-7">
          <AccordionTrigger className='font-semibold'>CLOTHING LOUNGE</AccordionTrigger>
          <AccordionContent>
            <div className="w-full flex justify-center gap-5 items-start">
            <div className="w-[2px] h-[190px] bg-darkbrown"></div>
            <div className="w-[70%] flex flex-col justify-start items-start text-sm gap-2 capitalize ">
            <p>tees & tanks</p>
            <p>leggings & pants</p>
            <p>dresses</p>
            <p>bodysuits</p>
            <p>robes</p>
            <p>shorts</p>
            <p>skirts</p>
            </div>
            </div>
            <div className="w-full flex flex-col justify-center gap-3 mt-3 items-center">
              <div className="w-full flex gap-4 justify-start items-start">
              
      
              </div>
              <div className="w-full flex gap-4 justify-start items-start">
              <div className="w-[25%]">
              <img src='/xx.webp' className='w-full h-full object-cover'/>
              </div>
              <div className="w-[60%] capitalize text-sm flex flex-col gap-2">
              <h1 className="uppercase font-semibold">bundle and save</h1>
              <p>mix and match best-selling styles</p>
              </div>
              </div>
              <div className="w-full flex gap-4 justify-start items-start">
              <div className="w-[25%]">
              <img src='/xx.webp' className='w-full h-full object-cover'/>
              </div>
              <div className="w-[60%] capitalize text-sm flex flex-col gap-2">
              <h1 className="uppercase font-semibold">bundle and save</h1>
              <p>mix and match best-selling styles</p>
              </div>
              </div>
              <div className="w-full flex gap-4 justify-start items-start">
              <div className="w-[25%]">
              <img src='/xx.webp' className='w-full h-full object-cover'/>
              </div>
              <div className="w-[60%] capitalize text-sm flex flex-col gap-2">
              <h1 className="uppercase font-semibold">bundle and save</h1>
              <p>mix and match best-selling styles</p>
              </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
       
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-10">
          <AccordionTrigger>SHAPEWEAR</AccordionTrigger>
          <AccordionContent>
          <div className="w-full flex h-full flex-col ">
              {/* top */}
              <div className="w-full flex gap-2 capitalize text-sm flex-col justify-end items-start">
               
              <h1>all shapewear</h1>
              <h1>the shapewear guide</h1>
              
              </div>
            </div>
            {/* middle */}
            <AccordionItem value="item-11">
          <AccordionTrigger className='font-semibold'>STYLE</AccordionTrigger>
          <AccordionContent>
            <div className="w-full flex justify-center gap-5 items-start">
            <div className="w-[2px] h-[160px] bg-darkbrown"></div>
            <div className="w-[70%] flex flex-col justify-start items-start text-sm gap-2 capitalize ">
           <p>shapewear bodysuits</p>
           <p>shaping underwear</p>
           <p>shapewear shorts & leggings</p>
           <p>shapewear bras</p>
           <p>wasit trainers</p>
           <p>maternity shapewear</p>
            </div>
            
            </div>
            <div className="w-full flex flex-col mt-3 gap-3">
            <div className="w-full flex gap-4 justify-start items-start">
              <div className="w-[25%]">
              <img src='/xx.webp' className='w-full h-full object-cover'/>
              </div>
              <div className="w-[60%] capitalize text-sm flex flex-col gap-2">
              <h1 className="uppercase font-semibold">bundle and save</h1>
              <p>mix and match best-selling styles</p>
              </div>
              </div>
              <div className="w-full flex gap-4 justify-start items-start">
              <div className="w-[25%]">
              <img src='/xx.webp' className='w-full h-full object-cover'/>
              </div>
              <div className="w-[60%] capitalize text-sm flex flex-col gap-2">
              <h1 className="uppercase font-semibold">bundle and save</h1>
              <p>mix and match best-selling styles</p>
              </div>
              </div>
            </div>
            
          </AccordionContent>
        </AccordionItem>
       
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-12">
          <AccordionTrigger>MENS</AccordionTrigger>
          <AccordionContent>
          <div className="w-full flex h-full flex-col ">
              {/* top */}
              <div className="w-full flex gap-2 capitalize text-sm flex-col justify-end items-start">
               
              <h1>all mens</h1>
              <h1>lingerie</h1>
              <h1>bundles & save</h1>
              </div>
            </div>
            {/* middle */}
            <AccordionItem value="item-13">
          <AccordionTrigger className='font-semibold'>ALL MENS</AccordionTrigger>
          <AccordionContent>
            <div className="w-full flex justify-center gap-5 items-start">
            <div className="w-[2px] h-[170px] bg-darkbrown"></div>
            <div className="w-[70%] flex flex-col justify-start items-start text-sm gap-2 capitalize ">
            <p>t-shirt</p>
            <p>scoop</p>
            <p>demi</p>
            <p>tees</p>
            <p>tanks</p>
            <p>socks</p>
            </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        {/* bottom */}
            <AccordionItem value="item-14">
          <AccordionTrigger className='font-semibold'>SHOP BY</AccordionTrigger>
          <AccordionContent>
          <div className="w-full flex flex-col justify-center gap-3 mt-3 items-center">
              <div className="w-full flex gap-4 justify-start items-start">
              <div className="w-[25%]">
              <img src='/y.webp' className='w-full h-full object-cover'/>
              </div>
              <div className="w-[60%] capitalize text-sm flex flex-col gap-2">
              <h1 className="uppercase font-semibold">fleece lounge</h1>
              <p>classic styles made of stretchy ccotton with a soft feel and loose fit</p>
              </div>
              </div>
              <div className="w-full flex gap-4 justify-start items-start">
              <div className="w-[25%]">
              <img src='/yy.webp' className='w-full h-full object-cover'/>
              </div>
              <div className="w-[60%] capitalize text-sm flex flex-col gap-2">
              <h1 className="uppercase font-semibold">jersey lounge</h1>
              <p>stretchy, weighty cotton styles for ultimate comfort</p>
              </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
            
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-15">
          <AccordionTrigger>COLLECTIONS</AccordionTrigger>
          <AccordionContent>
          <div className="w-full flex h-full flex-col ">
              {/* top */}
              <div className="w-full flex gap-2 capitalize text-sm flex-col justify-end items-start">
               
              <h1>all bras</h1>
              <h1>all bralettes</h1>
              <h1>find your size</h1>
              <h1>the bra guide</h1>
              <h1>lingerie</h1>
              </div>
            </div>
            {/* middle */}
            <AccordionItem value="item-16">
          <AccordionTrigger className='font-semibold'>FEATURED</AccordionTrigger>
          <AccordionContent>
            <div className="w-full flex justify-center gap-5 items-start">
            <div className="w-[2px] h-[210px] bg-darkbrown"></div>
            <div className="w-[70%] flex flex-col justify-start items-start text-sm gap-2 capitalize ">
            <p>t-shirt</p>
            <p>scoop</p>
            <p>demi</p>
            <p>triangle</p>
            <p>plunge</p>
            <p>strapless</p>
            <p>balconette</p>
            <p>full coverage</p>
            </div>
            </div>
          </AccordionContent>
        </AccordionItem>
     
            
          </AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <h1 className="font-medium py-4">SALES</h1>
          
        </AccordionItem>
      </Accordion>
    )
  }
  