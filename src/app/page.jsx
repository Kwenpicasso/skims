
import Auto from './component/Auto'
import AutoTwo from './component/AutoTwo'
import Justin from './component/Justin'
import NewArrival from './component/NewArrival'
import SecondNav from './component/SecondNav'
import Solutions from './component/Solutions'
import Three from './component/Three'
import Trending from './component/Trending'
import Two from './component/Two'
import Video from './component/Video'
import Loading from './loading'



export default function Home() {

  return (
   <>
   <SecondNav/>
   {/* hero sections */}
 <div className='lg:hidden'>
<Auto/>
 </div>
 <div className='hidden lg:block'>
  <AutoTwo/>
 </div>
 {/* justin sections */}
 <Justin/>

 {/* new arrival sections */}
 <NewArrival/>
 {/* trending sections */}
 <Trending/>
 {/* two sections */}
 <Two/>
 {/* three sections */}
 <Three/>
 {/* video sections */}
 <Video/>
 {/* solution sections */}
 <Solutions/>
 

 



   </>
  )
}
