import React from 'react'

const Background = () => {
  return (
    <>
        <div className='fixedw-full h-screen z-[2]'>
            <div className='absolute top-[5%] py-10 w-full text-center text-lg font-semibold text-zinc-400'>
                Documents.
            </div>
            <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] leading-none tracking-tight font-semibold text-zinc-900'>
                Docs.
            </h1>
        </div>
    </>
  )
}

export default Background