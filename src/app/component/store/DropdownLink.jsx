'use client'
import React from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

  import { useSearchParams } from 'next/navigation'
  import { useRouter } from 'next/navigation'
  


const filters = [


  {
    id: 'type',
    name: 'Type',
    options: [
      {value: 'Bodysuits', label: 'Bodysuits'},
      {value: 'Bras', label: 'Bras'},
      {value: 'Jacquard', label: 'Jacquard'},
      {value: 'Stretch', label: 'Stretch'},
      {value: 'Boxers', label: 'Boxers'},
      {value: 'Pants', label: 'Pants'},
    ]
  },
  {
    id: 'material',
    name: 'Material',
    options: [
      {value: 'Cotton', label: 'Cotton'},
      {value: 'Modal', label: 'Modal'},
      {value: 'Stretch', label: 'Stretch'},
      {value: 'Wool', label: 'Wool'},
      
    ]
  },
  {
    id: 'size',
    name: 'Size',
    options: [
      {value: 'XL', label: 'XL'},
      {value: 'L', label: 'L'},
      {value: 'M', label: 'M'},
      {value: 'S', label: 'S'},
    ]
  },
 
 
]
const DropDownLink = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchValues = Array.from(searchParams.entries())
  return (
    <div className='space-y-3 '>
        {/* 1st section */}
    {filters.map((section,i) => (
          <Accordion key={i} type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className='font-semibold uppercase text-sm text-black'>{section.name}</AccordionTrigger>
            <AccordionContent className='' >
           {section.options.map((option) => (
             <div key={option.value} className='flex flex-col  gap-3 capitalize'>
           
           
             <div className="flex mb-2 w-full justify-start items-center gap-3 ">
              
               <Checkbox id={option.id} 
                    checked={searchValues.some(([key, value]) => key === section.id && value === option.value)}
                    onClick={(e) => {
                      e.preventDefault();
                      const params = new URLSearchParams(searchParams)
                      const checked = e.currentTarget.dataset.state === 'checked'
                      checked ? params.delete(section.id) : params.set(section.id, option.value)
                      router.replace(`?${params.toString()}`)
                     }}
                />
               
               <label
                 htmlFor={option.id}
                 className="text-xs text-black font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
               >
                 {option.label}
               </label>
             </div>
             </div>
))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
    ))}




      
    </div>
  )
}

export default DropDownLink
