import React from 'react'
import { IoIosReturnRight } from "react-icons/io";
function Button() {
  return (
    <div className='min-w-40 px-3 bg-zinc-100 text-black py-2 rounded-full flex justify-between items-center'>
        <span className='text-sm font-regular'>Get Started</span>
        <IoIosReturnRight /> 
    </div>
  )
}

export default Button