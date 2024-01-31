"use client"
import {
  SheetContent,

} from "@/components/ui/sheet"
import DropDownLink from "./DropdownLink"





export function FilterModal() {
  return (
    <SheetContent side='left' className=' w-[45%] z-[100]'>
   
   <DropDownLink/>
   
  </SheetContent>
  )
}
