import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';


const Marque = ({ data }) => {
    const [title, setTitle] = useState([])

    useEffect(() => {
        const title = data.map(news => news.title)
        setTitle(title)
    }, [data])
    return (
        <div className='w-11/12 mx-auto flex gap-5 items-center bg-base-200 p-3 cursor-pointer'>
            <button className='bg-secondary text-white py-2 px-5'>Latest</button>
            <Marquee className='flex gap-5 text-primary font-bold' pauseOnHover={true}>
                <div className='space-x-5'>
                    {
                        title.map((item, index)=> <span key={index}>{item}</span>)
                    }
                </div>
            </Marquee>
        </div>
    );
};

export default Marque;