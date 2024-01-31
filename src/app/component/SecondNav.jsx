'use client'
 
import React, { useState, useEffect } from 'react';
import Image from 'next/image'

import NavigationMenu from "./NavigationMenu";
import { Search, ShoppingBag, User, Heart } from 'lucide-react'
import Kwen from './Kwen';
import {motion, AnimatePresence} from 'framer-motion';
import { opacity } from './anim';
import Overlay from './Overlay';
import { useRouter } from 'next/navigation';
import Link from 'next/link'
import ShopingCart from './Cart/ShoppingCart';
import { useSelector } from 'react-redux'



import {
  Sheet,
  SheetTrigger,
} from "@/components/ui/sheet"
import UserButtonn from './UserButton';

const SecondNav = () => {
  const [isActive, setIsActive] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const router = useRouter();
  const back = router.pathname === '/store' ? 'bg-black fixed' : 'white';
  const cart = useSelector((state) => state.cart.cart.length);
  const wish = useSelector((state) => state.wish.wish.length);

  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const navStyle = {
    backgroundColor: scrolling ? 'white' : 'transparent',
    Color: scrolling ? 'black' : 'black',
    transition: 'background-color 0.3s ease',
    position: 'fixed',
    width: '100%',
    zIndex: 100,
    top: 35,
    
  };
 
  return (
   
<div className='w-full max ' >
<div style={navStyle}  className={`w-full  h-[60px] ${back}  flex gap-7 items-center px-3  max justify-center absolute jj  bg-transparent z-20 text-white  lg:justify-between `}>
<motion.div variants={opacity} animate={isActive ? 'closed' : 'open'} className="w-[7%] flex justify-center items-center lg:w-[20%] opacity-0">
<Link href='/'>
<Kwen/>
</Link>
</motion.div>

<div className=" w-[75%] lg:hidden ">
  <NavigationMenu scrolling={scrolling}/>

</div>
<motion.div variants={opacity} animate={isActive ? 'closed' : 'open'} className="w-[15%] flex gap-4 justify-center items-center opacity-0">
<Image src='/mm.png' width={30} height={30} alt="flag" className='lg:hidden'/>
<div className={`flex gap-4  justify-center items-center ${scrolling ? 'text-darkbrown' : 'text-white'}`} >


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
 <div className={`burger ${isActive ? 'burgeractive' : ''} ${scrolling ? 'after:bg-black before:bg-black' : ''}  hidden lg:block cursor-pointer z-[100]`} onMouseDown={() => {setIsActive(!isActive)}}>

 </div>
</div>
<AnimatePresence mode='wait'>
{isActive && <Overlay/>}
</AnimatePresence>

</div>
  )
}

export default SecondNav
