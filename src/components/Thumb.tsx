import React from 'react';

type Props = {
    imgUrl: string;
}

const Thumb = ({ imgUrl }: Props) => {
    return (
        <img
            src={imgUrl}
            placeholder='blur'
            className='rounded-lg object-cover'
            alt="thumb"
        />
    )
}

export default Thumb