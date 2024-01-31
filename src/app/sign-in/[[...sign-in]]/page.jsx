
import { SignIn } from "@clerk/nextjs";
import Image from 'next/image'
export default function Page() {
  return (
  
<section className="bg-white w-full h-full max">
    
  <div className="grid min-h-screen grid-cols-12 mt-[2%]">
    <section className="relative flex lg:h-32 items-end bg-gray-900  h-full col-span-6 lg:col-span-12">
      <img
        alt="Night"
        src="/kim.webp"
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      />

      <div className="relative left-[30px] bottom-[50px] lg:bottom-1">
       <Image src="/logo.svg" alt="logo" width={150} height={150} className="animate-bounce"/>

        <h2 className="mt-3 text-2xl font-bold uppercase lg:hidden text-darkbrown ">
          Welcome to SKIMS
        </h2>

        
      </div>
    </section>

    <main
      className="flex items-center justify-center px-8 py-8 sm:px-12 col-span-6 lg:px-16 lg:py-12 lg:col-span-12 "
    >
      <div className="max-w-3xl">
       

        <SignIn />
      </div>
    </main>
  </div>
</section>
  )
}