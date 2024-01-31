import React from 'react'
import { UserButton } from "@clerk/nextjs";


const UserButtonn = () => {

  return (
    <div className="">
         <UserButton afterSignOutUrl="/"/> 
    
  </div>
  )
}

export default UserButtonn
