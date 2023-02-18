import React from 'react';
import { useAppContext } from '../context/AppContext';

type Props = {
    title: string;
    children: React.ReactNode;
    className?: string;
    isHaveSwitch?: boolean
}

export const Grid = ({ title, children, className, isHaveSwitch }: Props) => {
    const { isGridLayout, onSwitchGridLayout } = useAppContext();

    const layoutClass = isGridLayout ? 'grid grid-cols-auto-fill gap-8' : 'flex flex-col items-start gap-y-8';

    return (
        <div className={className}>
            {isHaveSwitch ? (
                <div className="mx-auto shadow rounded-full h-10 mt-4 flex p-1 relative items-center mb-8 w-1/2">
                    <div className="w-full flex justify-center">
                        <button onClick={onSwitchGridLayout} type='button'>Grid</button>
                    </div>
                    <div className="w-full flex justify-center">
                        <button onClick={onSwitchGridLayout} type='button'>List</button>
                    </div>
                    <span
                        className={`bg-slate-600 shadow text-white flex items-center justify-center w-1/2 rounded-full h-8 transition-all top-[4px] absolute ${isGridLayout ? 'left' : 'right'}-1`}>
                        {isGridLayout ? 'Grid' : 'List'}
                    </span>
                </div>
            ) : null}
            <h2 className='text-xl font-bold pb-4'>{title}</h2>
            <div className={`${layoutClass}`}>
                {children}
            </div>
        </div>
    )
}