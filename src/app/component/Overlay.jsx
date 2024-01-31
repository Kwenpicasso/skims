import React from 'react'
import {motion} from 'framer-motion';
import { height } from './anim';
import { AccordionDemo } from './NavAccordion';
const Overlay = () => {
  return (
    <motion.div variants={height} initial='initial' animate='enter' exit='exit' className='w-full me overflow-hidden z-[50] top-8 h-screen fixed overflow-y-scroll  bg-white p-4'>
      
     <AccordionDemo/>

    </motion.div>
  )
}

export default Overlay
