import React, { useRef } from 'react'
import Card from './Card'
import Adder from './Adder'


const Foreground = () => {
    const ref = useRef(null);
    const data = [
        {
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat!",
            fileSize: "0.7mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "com",
                tagColor: "green",
            }
        },
        {
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat!",
            fileSize: "0.5mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "process",
                tagColor: "blue",
            }
        },
        {
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat!",
            fileSize: "0.4mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "fail",
                tagColor: "red",
            }
        },
        {
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat!",
            fileSize: "0.6mb",
            close: false,
            tag: {
                isOpen: false,
                tagTitle: "Completed...",
                tagColor: "green",
            }
        },
        {
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat!",
            fileSize: "0.9mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "process",
                tagColor: "blue",
            }
        },
    ];
    
  return (
    <>
        <div ref={ref} className='fixed top-0 left-0 w-full h-full z-[3] flex gap-7 flex-wrap py-5 px-16'>
            {
                data.map((item, index) => (
                    <Card key={index} item={item} reference={ref} />
                ))
            }
            <Adder />
        </div>
    </>
  )
}

export default Foreground