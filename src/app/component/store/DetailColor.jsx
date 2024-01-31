'use client'
import React, { useState } from 'react'


const DetailColor = ({data}) => {
    const [color, setColor] = useState('');
  
  return (
    <div className='w-full mt-3 flex flex-col gap-2 uppercase font-semibold'>
    <h3 className='uppercase'>
     color:{color}
    </h3>
    <div  className='w-full flex gap-2 justify-start items-start  opacity-60'>
    {data.pink ? (
         <span  onClick={e=>setColor('Pink')}  className='w-6 h-6 rounded-full  bg-pink-400 cursor-pointer hover:border-[2px] hover:border-black '></span>
       ) : ''}
       {data.blue ? (
         <span onClick={e=>setColor('Blue')} className='w-6 h-6 rounded-full bg-blue-700 cursor-pointer hover:border-[2px] hover:border-black '></span>
       ) : ''}
       {data.red ? (
          <span onClick={e=>setColor('red')} className='w-6 h-6 rounded-full bg-red-400 cursor-pointer hover:border-[2px] hover:border-black '></span>
       ) : ''}
       {data.black ? (
          <span onClick={e=>setColor('black')} className='w-6 h-6 rounded-full bg-black cursor-pointer hover:border-[2px] hover:border-red-400 '></span>
       ) : ''}
       {data.green ? (
          <span onClick={e=>setColor('green')} className='w-6 h-6 rounded-full bg-green-400 cursor-pointer hover:border-[2px] hover:border-black '></span>
       ) : ''}
       {data.skyblue ? (
          <span onClick={e=>setColor('skyblue')} className='w-6 h-6 rounded-full bg-blue-300 cursor-pointer hover:border-[2px] hover:border-black '></span>
       ) : ''}
       {data.gray ? (
          <span onClick={e=>setColor('gray')} className='w-6 h-6 rounded-full bg-gray-500 cursor-pointer hover:border-[2px] hover:border-red-400 '></span>
       ) : ''}
       {data.lemon ? (
          <span onClick={e=>setColor('lemon')} className='w-6 h-6 rounded-full bg-[#D7FF5F] cursor-pointer hover:border-[2px] hover:border-black '></span>
       ) : ''}
       {data.purple ? (
          <span onClick={e=>setColor('Purple')} className='w-6 h-6 rounded-full bg-purple-500 cursor-pointer hover:border-[2px] hover:border-black '></span>
       ) : ''}
      
       {data.brown ? (
          <span onClick={e=>setColor('brown')} className='w-6 h-6 rounded-full bg-lightbrown cursor-pointer hover:border-[2px] hover:border-red-400 '></span>
       ) : ''}
       {data.orange ? (
          <span onClick={e=>setColor('orange')} className='w-6 h-6 rounded-full bg-orange-400 cursor-pointer hover:border-[2px] hover:border-black '></span>
       ) : ''}
     </div>
    </div>
  
  )
}

export default DetailColor
