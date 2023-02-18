import React, { useMemo } from 'react';
import { useAppContext } from '../context/AppContext';
import { useLocation } from 'react-router-dom'
import { MovieMode } from '../types';

type Props = {
    title: string;
    children: React.ReactNode;
    className?: string;
    isHaveSwitch?: boolean
}

export const Grid = ({ title, children, className, isHaveSwitch }: Props) => {
    const { isGridLayout, onSwitchGridLayout, onSwitchMovieMode, modeMovieFetching } = useAppContext();
    const location = useLocation();
    const isInMovieInfoPage = location.pathname.startsWith('/movie-info/')

    const layoutClass = useMemo(() => {
        if (isInMovieInfoPage) {
            return 'grid grid-cols-auto-fill gap-8'
        } else {
            return isGridLayout ? 'grid grid-cols-auto-fill gap-8' : 'flex flex-col items-start gap-y-8'
        }
    }, [isInMovieInfoPage, isGridLayout]);

    const handleChangeTitle = (mode: MovieMode) => {
        onSwitchMovieMode(mode)
    }

    return (
        <div className={className}>
            {isHaveSwitch ? (
                <div className='flex justify-between items-center'>
                    <div className='flex gap-x-2 justify-evenly items-center'>
                        <h2 className={`text-sm md:text-xl font-bold pb-4 cursor-pointer 
                        ${modeMovieFetching === 'now-playing' ? 'text-cyan-400' : 'text-cyan-800'} hover:text-cyan-800 ease-linear duration-300`}
                            onClick={() => handleChangeTitle('now-playing')}>
                            Now Playing
                        </h2>
                        {/* <span>/</span> */}
                        <h2 className={`text-sm md:text-xl font-bold pb-4 cursor-pointer text-left
                        ${modeMovieFetching === 'top-rated' ? 'text-cyan-400' : 'text-cyan-800'} text-cyan-400 hover:text-cyan-800 ease-linear duration-300`}
                            onClick={() => handleChangeTitle('top-rated')}>
                            Top Rated
                        </h2>
                    </div>
                    <div className="shadow rounded-full h-10 mt-4 flex p-1 relative items-center mb-8 w-1/2 self-end">
                        <div className="w-full flex justify-center">
                            <button onClick={onSwitchGridLayout} type='button'>Grid</button>
                        </div>
                        <div className="w-full flex justify-center">
                            <button onClick={onSwitchGridLayout} type='button'>List</button>
                        </div>
                        <span
                            className={`bg-slate-600 shadow text-white flex items-center justify-center w-1/2 rounded-full h-8 transition-all top-[4px] absolute
                             ${isGridLayout ? 'left-1' : 'right-1'}`}
                        >
                            {isGridLayout ? 'Grid' : 'List'}
                        </span>
                    </div>
                </div>
            ) : null}
            <div className={`${layoutClass}`}>
                {children}
            </div>
        </div>
    )
}