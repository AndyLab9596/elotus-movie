import React from 'react';
import { useNavigate } from 'react-router-dom'

type Props = {
    title: string;
}

export const Breadcrumb = ({ title }: Props) => {
    const navigate = useNavigate()
    return (
        <div className='bg-zinc-800'>
            <div className='flex items-center max-w-7xl m-auto p-4 text-white text-lg'>
                <div onClick={() => navigate('/')}>
                    <span className='hover:opacity-80 cursor-pointer duration-300'>
                        Home
                    </span>
                </div>
                <span className='block px-2'>|</span>
                <span className='font-bold truncate'>{title}</span>
            </div>
        </div>
    )
}