'use client'
import React, { useState } from 'react'
import { Heart } from 'lucide-react'
import {  useDispatch } from 'react-redux'
import { addTooWish } from '../../../../redux/WishlistReducer';

const Heartt = ({data}) => {
  const [add, setAdd] = useState(false);
  const dispatch = useDispatch();
  

  const addItemToWish = (data) => {
    setAdd(true)
   dispatch(addTooWish(data));
  }
  return (
    <div className='absolute top-0 right-0 cursor-pointer' onClick={() => addItemToWish(data)}>
    {add ? <Heart size={20} fill='black'/> : <Heart size={20}/>}
    </div>
  )
}

export default Heartt
