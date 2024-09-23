import React from 'react'
import { FaPlus } from "react-icons/fa6";

const Adder = () => {
  return (
    <span className='absolute bottom-10 right-10 text-slate-300 text-4xl p-3 rounded-[10px] bg-zinc-400/70 backdrop-blur-[10px] hover:scale-[1.1] transition-all duration-300 z-[10] cursor-pointer'>
        <FaPlus />
    </span>
  )
}

export default Adder