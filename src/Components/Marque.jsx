import React from 'react';
import Marquee from 'react-fast-marquee';


const Marque = () => {
    return (
        <div className='w-11/12 mx-auto flex gap-5 items-center bg-base-200 p-3 cursor-pointer'>
            <button className='bg-secondary text-white py-2 px-5'>Latest</button>
            <Marquee className='flex gap-5 text-primary font-bold' pauseOnHover={true}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, doloremque necessitatibus</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, doloremque necessitatibus</p>
            </Marquee>
        </div>
    );
};

export default Marque;