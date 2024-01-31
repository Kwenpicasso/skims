import React from 'react'
import { InputWithButton } from './SubscribeButton'
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Footer = () => {
  return (
    <footer className='w-full max h-full mt-[5%] bg-[#F3EEE5]'>
      <div className='w-[90%]  mx-auto p-[4%] flex justify-between items-start'>
      {/* left */}
      <div className='w-[20%] h-full flex flex-col gap-4 justify-center items-center lg:hidden'>
      <h1 className='uppercase font-semibold text-darkbrown text-2xl font-mono'>help</h1>
      <div className='w-full text-lightbrown capitalize flex flex-col gap-2 justify-center items-center'>
        <h3>return policy</h3>
        <h3>start return</h3>
        <h3>track order</h3>
        <h3>size guides</h3>
        <h3>bra calculator</h3>
        <h3>ordering</h3>
        <h3>shipping</h3>
        <h3>international</h3>
        <h3>FAQs</h3>
        <h3>careers</h3>
      </div>
      </div>
      {/* middle */}
      <div className='w-[60%] h-full  flex flex-col gap-4 justify-start items-center lg:w-full'>
      <h1 className='uppercase font-semibold text-darkbrown sm:text-2xl w-full text-center text-3xl font-mono'>stay in the know</h1>
      <p className='text-lightbrown text-center w-[70%] lg:w-full'>Be the first one to receive new releases, special offers, and more</p>
      <InputWithButton/>
      <p className='text-lightbrown  text-center text-xs w-[69%] lg:w-full'>By signing up you agree to receive recurring automated marketing messages from SKIMS. View & Privacy</p>
      <p className="text-lightbrown text-center">Text <strong className='text-darkbrown'>SKIMS</strong> to <strong className='text-darkbrown' >68805</strong> to never miss a drop!</p>
      <p className="mb-6 text-lightbrown text-center w-[69%] text-xs lg:w-full">By signing up via text, you agree to receive recurring automated promotional and personalized marketing text messages (e.g. cart reminders) from SKIMS at the cell number used when signing up. Consent is not a condition of any purchase. Reply HELP for help and STOP to cancel. Msg frequency varies. Msg &amp; data rates may apply. View&nbsp;<a href="https://attnl.tv/p/23H" target="" rel="noreferrer">Terms</a>&nbsp;&amp;&nbsp;<a href="http://attn.tv/skims/terms.html" target="" rel="noreferrer">Privacy</a>.</p>
      <div className='text-darkbrown  flex justify-center gap-5 items-center w-[60%] mx-auo'>
      <Facebook />
      <Instagram />
      <Twitter />
      <Youtube />
      </div>
       
  <Accordion type="single" collapsible className="w-full text-darkbrown mt-[20px] hidden lg:block">
      
      <AccordionItem value="item-1">
        <AccordionTrigger>HELP</AccordionTrigger>
        <AccordionContent>
        <div className='w-full text-lightbrown capitalize flex flex-col gap-2 justify-center items-center'>
        <h3>return policy</h3>
        <h3>start return</h3>
        <h3>ordering</h3>
        <h3>shipping</h3>
        <h3>international</h3>
        <h3>FAQs</h3>
        <h3>careers</h3>
      </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>MORE</AccordionTrigger>
        <AccordionContent>
        <div className='w-full text-lightbrown capitalize flex flex-col gap-2 justify-center items-center'>
        <h3>about</h3>
        <h3>influencers</h3>
        <h3>stocks</h3>
        <h3>resources</h3>
        <h3>e-gift card</h3>
        <h3>contact us</h3>
        
      </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
      </div>
      {/* right */}
      <div className='w-[20%] h-full flex flex-col gap-4 justify-start items-center lg:hidden'>
      <h1 className='uppercase font-semibold text-darkbrown text-2xl font-mono'>more</h1>
      <div className='w-full text-lightbrown capitalize flex flex-col gap-2 justify-center items-center'>
        <h3>about</h3>
        <h3>influencers</h3>
        <h3>stocks</h3>
        <h3>resources</h3>
        <h3>e-gift card</h3>
        <h3>contact us</h3>
        
      </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer
