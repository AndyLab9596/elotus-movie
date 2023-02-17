import React from 'react';
import { NavLink } from "react-router-dom";
import { RmdbLogo } from './svg/RmdbLogo';
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
                            <RmdbLogo className='w-[150px] h-[50px]' />
                        </div>
                        <div className='absolute md:invisible pt-2'>
                            <img src="../assets/rmdb-logo-small.svg" width={42} height={42} alt='rmdb-logo-small' />
                            <RmdbLogoSmall className='w-[42px] h-[42px]' />
                        </div>
                    </div>
                </NavLink>
                {/* {setQuery ? (
                    <div className='flex items-center relative'>
                        <SearchInput setQuery={setQuery} />
                    </div>
                ) : null} */}
            </div>
        </div>
    )
}