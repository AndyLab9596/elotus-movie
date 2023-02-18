import React from 'react';

type Props = {
    imgUrl: string;
}

const Thumb = ({ imgUrl }: Props) => {
    return (
        <img
            src={imgUrl}
            placeholder='blur'
            className='rounded-lg object-cover animate-fadeIn'
            alt="thumb"
        />
    )
}

export default Thumb