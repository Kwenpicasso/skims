'use client'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import {  useDispatch } from 'react-redux'
import { addTooCart } from '../../../../redux/CartReducer';


const CartButton = ({data}) => {
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);

  const addItemToCart = (data) => {
    setAdded(true);
   dispatch(addTooCart(data));
  }
  return (
    <Button className='bg-[#EEE4DA] rounded-3xl mt-4 text-[#62554A] font-semibold w-full uppercase hover:text-white hover:bg-darkbrown' onClick={() => addItemToCart(data)}>{added ? 'added to bag' : 'add to bag'}</Button>
  )
}

export default CartButton
