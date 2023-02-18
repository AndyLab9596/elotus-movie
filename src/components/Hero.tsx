import React from 'react';
type IHero = {
    imgUrl: string;
    title: string;
    text: string;
}

export const Hero: React.FC<IHero> = ({ imgUrl, title, text }) => {
    return (
        <div className='relative w-full h-auto'>
            <div className='absolute top-4 flex flex-col-reverse max-w-7xl mt-20 ml-16 z-10 pb-12 text-center md:text-left'>
                <div className='text-white max-w-2xl px-4'>
                    <h2 className='hidden sm:block text-2xl md:text-5xl font-bold pb-8'>
                        {title}
                    </h2>
                    <p className='hidden sm:block text-lg md:text-xl'>
                        {text}
                    </p>
                </div>
            </div>
            <img className='w-full object-cover object-center' src={imgUrl} alt='hero' />
        </div>
    )
}