import React from 'react'

const Background = () => {
    return (
        <div className='fixed w-full h-screen z-[2]'>
            <div className='absolute top-[5%] w-full py-10 flex justify-center text-200 text-zinc-600 font-semibold text-xl'>Documents  </div>
            <strong className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-normal text-zinc-900 text-[13vw] leading-none tracking-tighter text-center'>
                Docs.
            </strong>
        </div>
    )
}

export default Background