import React from 'react'
import { useAppContext } from '../context/AppContext';
import Thumb from './Thumb';
import { useLocation } from 'react-router-dom'

type Props = {
    imgUrl: string;
    title: string;
    subtitle?: string;
    overview?: string;
    year?: string;
    rating?: number;
}

export const Card = ({ imgUrl, title, subtitle, overview, year, rating }: Props) => {
    const { isGridLayout } = useAppContext();
    const location = useLocation();
    const isInMovieInfoPage = location.pathname.startsWith('/movie-info/');

    if (!isGridLayout && !isInMovieInfoPage) {
        return (

            <div className="flex justify-center">
                <div className="flex flex-col md:flex-row md:max-w-full rounded-lg bg-white shadow-lg">
                    <img
                        className=" w-full h-96 md:h-auto object-cover md:w-72 rounded-t-lg md:rounded-none md:rounded-l-lg animate-fadeIn"
                        src={imgUrl}
                        alt="thumb" />
                    <div className="text-white px-0 py-4 md:py-0 text-center md:text-left md:px-8 w-full md:w-2/3 gap-y-2 flex flex-col justify-center items-center md:block">
                        <h2 className='text-2xl md:text-4xl font-bold pb-4 text-black'>
                            {title}
                        </h2>
                        <p className='text-slate-700 text-xl font-semibold'>({year})</p>
                        <div className='rounded-full bg-stone-600 w-12 h-12 flex justify-center items-center text-yellow-500 text-sm font-bold my-8'>
                            {rating}
                        </div>
                        <h3 className='text-lg font-bold text-black'>Summary</h3>
                        <p className='mb-8 text-sm md:text-lg text-black'>{overview}</p>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="relative h-full">
                <Thumb imgUrl={imgUrl} />
                <div className="absolute w-full bottom-0 px-4 py-2 rounded-b-xl bg-zinc-800">
                    <h2 className='text-cyan-200 text-center text-sm truncate'>
                        {title}
                    </h2>
                    {subtitle ? <p className='text-cyan-200 text-center text-xs truncate'>{subtitle}</p> : null}
                </div>
            </div>
        );
    }
}