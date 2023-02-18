import React from 'react';
import { NavLink } from "react-router-dom";
import SearchInput from './SearchInput';
import { RmdbLogoSmall } from './svg/RmdbLogoSmall';

interface IHeader {
    setQuery?: React.Dispatch<React.SetStateAction<string>>
}

export const Header: React.FC<IHeader> = ({ setQuery }) => {
    return (
        <div className='sticky flex top-0 z-40 w-full h-24 bg-zinc-900'>
            <div className='flex justify-between items-center w-full h-full max-w-7xl m-auto px-4'>
                <NavLink to="/">
                    <div className='flex items-center cursor-pointer'>
                        <div className='invisible md:visible'>
                            <span className='text-white text-3xl tracking-wider font-bold' >ELOTUS MOVIE</span>
                        </div>
                        <div className='absolute md:invisible pt-2'>
                            <RmdbLogoSmall className='w-[42px] h-[42px]' />
                        </div>
                    </div>
                </NavLink>
                {setQuery ? (
                    <div className='flex items-center relative'>
                        <SearchInput setQuery={setQuery} />
                    </div>
                ) : null}
            </div>
        </div>
    )
}