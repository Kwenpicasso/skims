import React from 'react'

const Video = () => {
  return (
    <div className='w-full max h-full mt-[3%]'>
      <p className="uppercase w-[60%] lg:w-[80%] mx-auto lg:text-2xl text-darkbrown text-4xl font-semibold text-center font-mono leading-normal">believe the hype<br/>our collections have over 100,000 five star reviews, and counting! </p>
      <div class="w-[60%] lg:w-[90%] h-full mt-[60px] relative mx-auto flex justify-center  items-center">
      <iframe width="760" height="415" src="https://www.youtube.com/embed/qSMCWiRUB64?si=ln4VkbiwBFccoFV4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    </div>
  )
}

export default Video
