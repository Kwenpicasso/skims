import React from 'react'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'

const ThirdNavMenu = () => {
  return (
    <div className='flex gap-6 items-center justify-center font-bold text-[11px] cursor-pointer text-darkbrown'>
      <div className="dropdown dropdown-hover ">
      <div tabIndex={0}  className="uppercase m-1 flex justify-center items-center">new <ArrowDown size={15}/></div>
  <div tabIndex={0} className="over left-[-100px] w-[1000px]">
    <div className=' w-[20%] p-3 uppercase text-black font-semibold flex flex-col gap-2 h-full'>
  <h1>all new arrivals</h1>
  <h1>back in stock</h1>
    </div>
    <div className=' w-[20%] h-full  flex flex-col p-3'>
    <h1 className='uppercase text-black font-semibold underline'>drops</h1>
    <div className='w-full flex flex-col gap-2 text-xs text-black font-light capitalize mt-2'>
      <p>new raw edge</p>
      <p>new essential bodysuits</p>
      <p>new stretch lace</p>
      <p>new fit everybody</p>
      <p>new skims jacquard</p>
    </div>
    </div>
    <div className=' w-[50%] h-full p-3 flex gap-2 justify-center '>
    <div className='oer'>
      <img src='/c.webp' className='w-full h-full object-cover'/>
      <h1>the winter shop</h1>
    </div>
    <div className='oer'>
      <img src='/cc.webp' className='w-full h-full object-cover'/>
       <h1>the t-shirt shop</h1>
    </div>
    <div className='oer'>
      <img src='/ccc.webp' className='w-full h-full object-cover'/>
      <h1>skims mens</h1>
    </div>
    </div>
  </div>
</div>
<h1 className='uppercase text-[11px]'>best sellers</h1>
<div className="dropdown dropdown-hover">
      <div tabIndex={1}  className="uppercase m-1 flex justify-center items-center">bras <ArrowDown size={15}/></div>
  <div tabIndex={1} className="over left-[-100px] w-[1000px]">
  <div className=' w-[20%] p-3 uppercase text-black font-semibold flex flex-col gap-2 h-full'>
  <h1>all bras</h1>
  <h1>all bralettes</h1>
  <h1>find your size</h1>
  <h1>the bra guide</h1>
  <h1>lingerie</h1>
    </div>
    <div className=' w-[15%] h-full  flex flex-col p-3'>
    <h1 className='uppercase text-black font-semibold underline'>silhouete</h1>
    <div className='w-full flex flex-col gap-2 text-xs text-black font-light capitalize mt-2'>
      <p>t-shirt</p>
      <p>scoop</p>
      <p>demi</p>
      <p>triangle</p>
      <p>plunge</p>
      <p>strapless</p>
      <p>blconette</p>
    </div>
    </div>
    <div className=' w-[15%] h-full  flex flex-col p-3'>
    <h1 className='uppercase text-black font-semibold underline'>lining</h1>
    <div className='w-full flex flex-col gap-2 text-xs text-black font-light capitalize mt-2'>
      <p>unlined</p>
      <p>lightly lined</p>
      <p>push-up</p>
      
    </div>
    </div>
    <div className=' w-[50%] h-full p-3 flex gap-2 justify-center items-start '>
    <div className='oee'>
      <Image src='/x.webp' width={150} height={150} alt='save' className=''/>
      <h1 className=''>fits t-shirt bra</h1>
      <p className='capitalize w-[180px] font-light text-xs'>The perfect everybody bra with next-level stretch and comfort</p>
    </div>
    <div className='oee'>
      <Image src='/xx.webp' width={150} height={150} alt='save' className=''/>
       <h1>the t-shirt shop</h1>
       <p className='capitalize w-[180px] font-light text-xs'>This is one bralette you'll never want to take off</p>
    </div>
    
    </div>
  </div>
</div>
<div className="dropdown dropdown-hover">
      <div tabIndex={2}  className="uppercase m-1 flex justify-center items-center">underwear<ArrowDown size={15}/></div>
  <div tabIndex={2} className="over left-[-100px] w-[800px]">
  <div className=' w-[20%] p-3 uppercase text-black font-semibold flex flex-col gap-2 h-full'>
  <h1>all underwear</h1>
  <h1>bundles & save</h1>
  <h1>lingerie</h1>
    </div>
    <div className=' w-[20%] h-full  flex flex-col p-3'>
    <h1 className='uppercase text-black font-semibold underline'>style</h1>
    <div className='w-full flex flex-col gap-2 text-xs text-black font-light capitalize mt-2'>
      <p>thongs</p>
      <p>boxers</p>
      <p>boy shorts</p>
      <p>cheeky underwear</p>
      <p>briefs</p>
      <p>hoisery</p>
    
    </div>
    </div>
    <div className=' w-[20%] h-full  flex flex-col p-3'>
    <h1 className='uppercase text-black font-semibold underline'>coverage</h1>
    <div className='w-full flex flex-col gap-2 text-black text-xs font-light capitalize mt-2'>
      <p>minimum</p>
      <p>medium</p>
      <p>maximum</p>
    </div>
    </div>
   
    <div className=' w-[30%] h-full p-3 flex gap-2 justify-center items-start '>
    <div className='flex justify-center items-center flex-col text-black uppercase text-center gap-2'>
      <Image src='/g.webp' width={150} height={150} alt='save' className=''/>
      <h1 className=''>bundle & save</h1>
      <p className='capitalize w-[180px] font-light text-xs'>mix & match best-selling styles at special pricing</p>
    </div>
   
    
    </div>
  </div>
</div>
<div className="dropdown dropdown-hover">
      <div tabIndex={0}  className="uppercase m-1 flex justify-center items-center">clothing & lounge<ArrowDown size={15}/></div>
  <div tabIndex={0} className="over left-[-300px] w-[1050px]">
  <div className=' w-[20%] p-3 uppercase text-black font-semibold flex flex-col gap-2 h-full'>
  <h1>all loungewear</h1>
  <h1>all clothing</h1>
  <h1>fabric guide</h1>
    </div>
    <div className=' w-[15%] h-full  flex flex-col p-3'>
    <h1 className='uppercase text-black font-semibold underline'>clothing & lounge</h1>
    <div className='w-full flex flex-col gap-2 text-black text-xs font-light capitalize mt-2'>
      <p>tees & tanks</p>
      <p>leggings & pants</p>
      <p>dresses</p>
      <p>bodysuits</p>
      <p>pajamas</p>
      <p>hoodies & sweaters</p>
      <p>catsuits & onesies</p>
      
    </div>
    </div>
    <div className=' w-[50%] h-full p-3 flex gap-2 justify-center '>
    <div className='oee'>
      <Image src='/a.webp' width={150} height={150} alt='save' className=''/>
      <h1 className=''>t-shirts</h1>
      <p className='capitalize w-[180px] font-light text-xs'>your one-stop for tees and tanks</p>
    </div>
    <div className='oee'>
      <Image src='/aa.webp' width={150} alt='save' height={150} className=''/>
      <h1 className=''>leggings & pants</h1>
      <p className='capitalize w-[180px] font-light text-xs'>versatile styles and silhouetes for weather</p>
    </div>
    <div className='oee'>
      <Image src='/aaa.webp' width={150} alt='save' height={150} className=''/>
      <h1 className=''>pajamas</h1>
      <p className='capitalize w-[180px] font-light text-xs'>from sleep sets to robes</p>
    </div>
    </div>
  </div>
</div>
<div className="dropdown dropdown-hover">
      <div tabIndex={0}  className="uppercase m-1 flex justify-center items-center">shapewear<ArrowDown size={15}/></div>
  <div tabIndex={0} className="over w-[1000px] left-[-500px]">
  <div className=' w-[20%] p-3 uppercase text-black font-semibold flex flex-col gap-2 h-full'>
  <h1>all shapewear</h1>
  <h1>the shapewear guide</h1>
  
    </div>
    <div className=' w-[15%] h-full  flex flex-col p-3'>
    <h1 className='uppercase text-black font-semibold underline'>style</h1>
    <div className='w-full flex flex-col text-xs gap-2 text-black font-light capitalize mt-2'>
      <p>shapewear bodysuits</p>
      <p>shaping underwear</p>
      <p>shapewear shorts & leggings</p>
      <p>shapewear bras</p>
      <p>backless shapewear</p>
      <p>maternity shapewear</p>
      <p>waist trainers</p>
      
    </div>
    </div>
    <div className=' w-[50%] h-full p-3 flex gap-2 justify-center '>
   
    <div className='flex justify-center items-center flex-col text-black uppercase text-center gap-2'>
      <Image src='/n.webp' width={150} height={150} alt='save' className=''/>
      <h1 className=''>seamless sculpt <br />thong bodysuit</h1>
      <p className='capitalize w-[180px] font-light text-xs'>the internet's favorite sculpting bodysuit</p>
    </div>
    <div className='flex justify-center items-center flex-col text-black uppercase text-center gap-2'>
      <Image src='/nn.webp' width={150} height={150} alt='save' className=''/>
      <h1 className=''>core control thong</h1>
      <p className='capitalize w-[180px] font-light text-xs'>ultimate compression for a sculpted cre and no visible panty lines</p>
    </div>
    </div>
  </div>
</div>
<div className="dropdown dropdown-hover">
      <div tabIndex={0}  className="uppercase m-1 flex justify-center items-center">mens<ArrowDown size={15}/></div>
  <div tabIndex={0} className="over w-[1050px] max left-[-600px]">
  <div className=' w-[20%] p-3 uppercase text-black font-semibold flex flex-col gap-2 h-full'>
  <h1>explore mens</h1>
  <h1>all mens</h1>
  <h1>bundles & save</h1>
  
    </div>
    <div className=' w-[15%] h-full  flex flex-col p-3'>
    <h1 className='uppercase text-black font-semibold underline'>shop by</h1>
    <div className='w-full flex flex-col text-xs gap-2 text-black font-light capitalize mt-2'>
      <p>loungewear</p>
      <p>hoodies & sweatshirts</p>
      <p>bottoms</p>
      <p>boxers & briefs</p>
      <p>tees & tanks</p>
      <p>socks</p>
      
    </div>
    </div>
    <div className=' w-[50%] h-full p-3 flex gap-2 justify-center '>
   
    <div className='flex justify-center items-center flex-col text-black uppercase text-center gap-2'>
      <Image src='/y.webp' width={150} height={150} alt='save' className=''/>
      <h1 className=''>fleece lounge</h1>
      <p className='capitalize w-[180px] font-light text-xs'>classic styles made of stretchy cotton with a soft feel and loose fit</p>
    </div>
    <div className='flex justify-center items-center flex-col text-black uppercase text-center gap-2'>
      <Image src='/yy.webp' width={150} height={150} alt='save' className=''/>
      <h1 className=''>jersey lounge</h1>
      <p className='capitalize w-[180px] font-light text-xs'>stretchy weighty cotton styles for ultimate comfort while lounging and beyond</p>
    </div>
    </div>
  </div>
</div>

<h1 className='uppercase text-[11px]'>sales</h1>
<div className="dropdown dropdown-hover">
      <div tabIndex={0}  className="uppercase m-1 flex justify-center items-center">collection<ArrowDown size={15}/></div>
  <div tabIndex={0} className="over w-[1050px] left-[-700px]">
  
    <div className=' w-[15%] h-full  flex flex-col p-3'>
    <h1 className='uppercase text-black font-semibold underline'>featured</h1>
    <div className='w-full flex flex-col text-xs gap-2 text-black font-light capitalize mt-2'>
      <p>fits everybody</p>
      <p>soft lounge</p>
      <p>seamless sculpt</p>
      <p>cotton collection</p>
      <p>cotton fleece</p>
      <p>shop all collection</p>

      
    </div>
    </div>
    <div className=' w-[15%] h-full  flex flex-col p-3'>
    <h1 className='uppercase text-black font-semibold underline'>shop</h1>
    <div className='w-full flex flex-col text-xs gap-2 text-black font-light capitalize mt-2'>
    <p>the t-shirt shop</p>
    <p>the sleep edit</p>
    <p>kim's picks</p>
    <p>the winter shop</p>
    <p>the dress shop</p>
      
    </div>
    </div>
    <div className=' w-[50%] h-full p-3 flex gap-2 justify-center '>
   
    <div className='oee'>
      <Image src='/yyy.webp' width={150} height={150} alt='save' className=''/>
      <h1 className=''>soft lounge</h1>
      <p className='small'>ultra-soft ribbed loungewear and sleepwear, designed for at home and beyond</p>
    </div>
    <div className='oee'>
      <Image src='/yyyy.webp' width={150} height={150} alt='save' className=''/>
      <h1 className=''>cotton</h1>
      <p className='small'>the selfie-worthy sets you've seen all over your feed</p>
    </div>
    <div className='oee'>
      <Image src='/yyyyy.webp' width={150} height={150} alt='save' className=''/>
      <h1 className=''>fits everybody</h1>
      <p className='small'>our best-selling buttery-soft styles with next-level stretch</p>
    </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default ThirdNavMenu
