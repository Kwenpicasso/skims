'use client'
import React from 'react'
import { useSelector } from 'react-redux'
import { X } from 'lucide-react'
import {  useDispatch } from 'react-redux'
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

import {
  
  SheetContent,
  SheetHeader,
  SheetTitle,
  
} from "@/components/ui/sheet"
import { Button } from '@/components/ui/button';
import Image from 'next/image'
import { decrementQuantity, incrementQuantity, removeFromCart } from '../../../../redux/CartReducer'


const ShopingCart = () => {
 
  const cart = useSelector((state) => state.cart.cart);
  const cartt = useSelector((state) => state.cart.cart.length);
  const total = cart?.map((data) => data.price * data.quantity).reduce((prev,curr) => prev+curr,0)
  const dispatch = useDispatch();
  const increment = (data) => {
   dispatch(incrementQuantity(data));
  }
  const decrement = (data) => {
   dispatch(decrementQuantity(data));
  }
  const remove = (data) => {
   dispatch(removeFromCart(data));
  }
 
  const config = {
    public_key: process.env.NEXT_PUBLIC_FLUTTER_PUBLISHABLE_KEY,
    tx_ref: Date.now(),
    amount: total,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'user@gmail.com',
       
    },
    customizations: {
      title: 'SKIMS',
      description: 'Payment for items in cart',
      logo: '/logo.svg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);
  
  return ( 
   
  
    <SheetContent className='w-[35%] lg:w-[60%] sm:w-[90%] md:w-[90%] z-[100] '>
    <SheetHeader>
      <SheetTitle className='text-xl flex justify-center items-center text-black md:text-lg mb-3'>SHOPPING BAG ({cartt})</SheetTitle>
    </SheetHeader>
 <div className='h-full flex flex-col justify-between'>
  <div className='mt-1 flex-1 overflow-y-auto me'>
    <ul className='my-1 divide-y divide-gray-200'>
     {cart == 0 ? (
       <div className='w-full flex flex-col justify-center items-center'>
       <Image src='/empty.png' width={300} height={350} alt='emptycart'/>
       <div className='w-full flex flex-col justify-center items-center gap-2'>
        <h1 className='text-base text-black uppercase'>hi!!! your bag is empty</h1>
        <div className='w-full mx-auto flex justify-center items-center'>
         
          
        </div>
       </div>
      </div>
     ) : (
     <>
     {cart.map((data) => (
      <li key={data._id} className='flex py-3'>
       <div className='h-24 w-24 relative flex-shrink-0  rounded-md border border-gray-200'>
       <Image src={data?.image[0]} width={100} height={100} alt='item' className='object-cover '/>
       <div className='absolute right-[-8px] top-[-8px] z-[500] bg-lightbrown w-5 h-5 cursor-pointer rounded-full flex justify-center items-center' onClick={() => remove(data)}>
       <X  size={15} className='text-white'/>
       </div>
       </div>

       <div className='ml-4 flex flex-1 flex-col'>
       <div>
        <div className='flex w-full justify-between text-base sm:text-xs font-medium text-gray-900'>
         <h3 className='capitalize w-full'>{data?.secondname}</h3>
         <h3 className='ml-4'>${data?.price}</h3>
        </div>
        <p className='capitalize text-xs'>{data?.firstname}</p>
        
       </div>
       
       <div className='flex flex-1 items-end justify-between text-sm'>
       <h1 className='text-black sm:text-xs'>QTY:{data?.quantity}</h1>
       <div className='w-[80px] justify-center items-center p-1 rounded-3xl flex border border-gray-200 gap-4 text-center text-sm'>
        <span onClick={() => decrement(data)} className='cursor-pointer'>-</span>
        <span>{data?.quantity}</span>
        <span onClick={() => increment(data)} className='cursor-pointer'>+</span>
       </div>
       </div>
       </div>
      </li>
     ))}
     </>
     )}
    </ul>


  </div>
  <div className='border-t border-gray-200 px-4 py-6'>
    <div className='flex justify-between text-base font-medium text-black'>
      <p>Subtotal:</p>
      <p>${total}</p>
      

     
    </div>
    <div className='mt-6'>
    <Button   onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
               console.log(response);
                closePaymentModal() // this will close the modal programmatically
            },
            onClose: () => {},
          });
        }}  className='w-full bg-lightbrown rounded-3xl hover:bg-darkbrown border-transparent border outline-none'>Proceed To Checkout</Button>
    
      </div>
      <div className='mt-6 flex justify-center text-center text-sm text-gray-500'>
        <p>
          OR <button>Continue Shopping</button>
        </p>

      </div>
      





      


  </div>
 </div>
    
  </SheetContent>
     
     
    

  )
}

export default ShopingCart
