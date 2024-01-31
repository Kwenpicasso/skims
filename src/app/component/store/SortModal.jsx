'use client'
import { useRouter } from 'next/navigation'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import React from 'react'

const sortOptions = [
{name: 'Price, Low to High', value: '?price=asc'},
{name: 'Price, High to Low', value: '?price=desc'},
]
const  SortModal = () => {
  const router= useRouter();
  return (
    <Select onValueChange={(value) => router.replace(value)} className='outline-none border-none' >
  <SelectTrigger className="w-[100px] text-sm text-center bg-lightbrown text-white hover:bg-gray-200 hover:text-black font-medium ">
    <SelectValue className='' placeholder="Sort" />
  </SelectTrigger>
  <SelectContent >
    {sortOptions.map((option) => (
      <SelectItem key={option.name} value={option.value} className='text-left text-black'>{option.name}</SelectItem>
    ))}
   
  </SelectContent>
</Select>

  )
}

export default SortModal
