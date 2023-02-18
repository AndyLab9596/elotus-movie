import React, { Fragment } from 'react'

export const SingleMovieSkeleton = () => {
    return (
        <Fragment>
            <div className='bg-zinc-800'>
                <div className='flex items-center max-w-7xl m-auto p-4 text-white text-lg'>
                    <div className='animate-pulse'>
                        <span className='inline-block w-12 h-7 animate-pulse bg-zinc-50 rounded-lg'></span>
                    </div>
                    <span className='block px-2'>|</span>
                    <div className='animate-pulse'>
                        <span className='inline-block w-12 h-7 animate-pulse bg-zinc-50 rounded-lg'></span>
                    </div>
                </div>
            </div>
            <div className='relative w-full h-auto p-4 animate-pulse'>
                <div className='relative h-full min-h-[40rem] flex flex-col md:flex-row max-w-7xl p-4 m-auto z-10 rounded-xl bg-zinc-800 bg-opacity-50'>
                    <div className="relative w-full h-96 md:h-auto md:w-1/3">
                        <div className='rounded-lg w-[416px] h-[624px] bg-zinc-300'></div>
                        <div className='absolute top-4 left-4 rounded-full bg-white w-10 h-10 flex justify-center items-center'>
                        </div>
                    </div>
                    <div className="text-white px-0 py-4 md:py-0 text-center md:text-left md:px-8 w-full md:w-2/3">
                        <div className='w-full h-10 bg-zinc-300 rounded-lg'>
                        </div>
                        <h3 className='text-lg font-bold'>Summary</h3>
                        <div className='mb-8 h-24 w-full bg-zinc-300 rounded-lg'></div>
                        <div>
                            <div>
                                <h3 className='text-lg font-bold' >Director</h3>
                                <div>
                                    <div className=' h-24 w-full bg-zinc-300 rounded-lg'></div>
                                </div>
                            </div>
                            <div className='mt-8'>
                                <h3 className='text-lg font-bold'>Movie data</h3>
                                <div className={`bg-cyan-800 px-2 py-1 m-2 rounded-full inline-block ml-0 w-40 h-7`}>
                                </div>
                                <div className={`bg-cyan-800 px-2 py-1 m-2 rounded-full inline-block ml-0 w-40 h-7`}>
                                </div>
                                <div className={`bg-cyan-800 px-2 py-1 m-2 rounded-full inline-block ml-0 w-40 h-7`}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
