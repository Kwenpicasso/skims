'use client'
 
import React, { useState, useEffect } from 'react';
import Image from 'next/image'


import { Search, ShoppingBag, User, Heart } from 'lucide-react'
import {motion, AnimatePresence} from 'framer-motion';
import { opacity } from './anim';
import Overlay from './Overlay';
import ThirdNavMenu from './ThirdNavMenu';
import Logo from './Logo';
import Link from 'next/link'
import ShopingCart from './Cart/ShoppingCart';
import { useSelector } from 'react-redux'


import {
  Sheet,
  SheetTrigger,
} from "@/components/ui/sheet"
import UserButtonn from './UserButton';

const ThirdNav = () => {
  const [isActive, setIsActive] = useState(false);
  const cart = useSelector((state) => state.cart.cart.length);
  const wish = useSelector((state) => state.wish.wish.length);
  
  
 
 
  return (
   
<div className='w-full max fixed top-8 z-[100] ' >
<div  className='w-full   h-[60px] flex gap-7 items-center px-3  max justify-center absolute jj  bg-white  text-darkbrown  lg:justify-between '>
<motion.div variants={opacity} animate={isActive ? 'closed' : 'open'} className="w-[7%] flex justify-center items-center lg:w-[20%] opacity-0">
<Link href='/'>
<Logo/>
</Link>
</motion.div>

<div className=" w-[75%] lg:hidden ">
  <ThirdNavMenu/>

</div>
<motion.div variants={opacity} animate={isActive ? 'closed' : 'open'} className="w-[15%] flex gap-4 justify-center items-center opacity-0">
<Image src='/mm.png' width={30} height={30} alt="flag" className='lg:hidden'/>
<div className='flex gap-4 justify-center items-center' >

<Link href='/wishlist'>
<div className='relative'>
<Heart size={20} />
<span className='bg-darkbrown text-sm text-white w-5 h-5 absolute flex justify-center items-center text-center top-[-7px] right-[-4px] rounded-full'>{wish}</span>
</div>
</Link>
<Sheet>
      <SheetTrigger asChild className='cursor-pointer'>
      <div className='relative'>
      <ShoppingBag />
      <span className='bg-darkbrown text-sm text-white w-5 h-5 absolute flex justify-center items-center text-center top-[-7px] right-[-4px] rounded-full'>{cart}</span>
      </div>
      </SheetTrigger>
  {/* cart items */}
   <ShopingCart/>
  </Sheet>
  <UserButtonn/>
</div>
</motion.div>
 {/* burger menu */}
 <div className={`burg ${isActive ? 'burgactive' : ''}  hidden lg:block cursor-pointer z-[100]`} onMouseDown={() => {setIsActive(!isActive)}}>

 </div>
</div>
<AnimatePresence mode='wait'>
{isActive && <Overlay/>}
</AnimatePresence>
</div>
  )
}

export default ThirdNav
