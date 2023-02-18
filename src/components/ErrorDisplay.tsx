import React from 'react'
import { Header } from './Header'

export const ErrorDisplay: React.FC<{ error: Error | string }> = ({ error }) => {
    return (
        <main>
            <Header />
            <div role="alert" className=''>
                <div className="bg-red-500 text-white font-bold px-4 py-2">
                    Something went wrong
                </div>
                <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                    <p>{error instanceof Error ? error.message : error}</p>
                </div>
            </div>
        </main>
    )
}