import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import { motion } from "framer-motion"

const Card = ({item, reference}) => {
  return (
    <>
        <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1}} dragElastic={0.1} dragTransition={{bounceStiffness: 100, bounceDamping: 30}} className='card relative flex-shrink-0 w-60 h-72 rounded-[30px] bg-zinc-900/80 text-slate-300 px-7 py-8 overflow-hidden text-xl backdrop-blur-[20px] cursor-grab'>
            <FaRegFileAlt className='cursor-pointer'/>
            <p className='text-sm font-semibold my-5 leading-tight'>{item.description}</p>
            <div className='footer absolute bottom-0 left-0 w-full'>
                <div className='flex items-center justify-between px-7 py-2 mb-3'>
                    <h5 className='text-sm font-semibold'>{item.fileSize}</h5>
                    <span className='cursor-pointer'>
                        {item.close ? <IoCloseCircle size="1em" /> : <FaFileDownload size="0.8em" />}
                    </span>
                </div>
                {item.tag.isOpen && (
                    <div className={`tag w-full h-10 ${item.tag.tagColor === "green" ? "bg-green-600" : item.tag.tagColor === "red" ? "bg-rose-500" : "bg-blue-500"} flex items-center justify-center py-2`}>
                        <h3 className='text-sm font-semibold'>{`${item.tag.tagTitle === "com" ? "Completed." : item.tag.tagTitle === "fail" ? "Failed!" : "Processing..."}`}</h3>
                    </div>
                )}
                
            </div>
        </motion.div>
    </>
  )
}

export default Card