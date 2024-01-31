
import React from 'react'

const Color = ({item}) => {
   
    
  return (
    <div className='w-full flex gap-2 justify-center items-center'>
          {item.pink ? (
            <span  className='w-3 h-3 rounded-full bg-pink-400 cursor-pointer'></span>
          ) : ''}
    {item.blue ? (
      <span   className='w-3 h-3 rounded-full bg-blue-700 cursor-pointer'></span>
    ) : ''}
    {item.red ? (
       <span className='w-3 h-3 rounded-full bg-red-400 cursor-pointer'></span>
    ) : ''}
    {item.black ? (
       <span className='w-3 h-3 rounded-full bg-black cursor-pointer'></span>
    ) : ''}
    {item.green ? (
       <span className='w-3 h-3 rounded-full bg-green-400 cursor-pointer'></span>
    ) : ''}
    {item.skyblue ? (
       <span className='w-3 h-3 rounded-full bg-blue-300 cursor-pointer'></span>
    ) : ''}
    {item.gray ? (
       <span className='w-3 h-3 rounded-full bg-gray-500 cursor-pointer'></span>
    ) : ''}
    {item.lemon ? (
       <span className='w-3 h-3 rounded-full bg-[#D7FF5F] cursor-pointer'></span>
    ) : ''}
    {item.purple ? (
       <span className='w-3 h-3 rounded-full bg-purple-500 cursor-pointer'></span>
    ) : ''}
   
    {item.brown ? (
       <span className='w-3 h-3 rounded-full bg-lightbrown cursor-pointer'></span>
    ) : ''}
    {item.orange ? (
       <span className='w-3 h-3 rounded-full bg-orange-400 cursor-pointer'></span>
    ) : ''}
   
   </div>
  )
}

export default Color
