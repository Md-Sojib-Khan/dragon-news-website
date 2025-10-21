import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
    const { details, title, image_url, category_id } = news;
    return (
        <div className='space-y-4 mt-5'>
            <img className='w-full h-[400px] object-cover' src={image_url} alt="" />
            <h2 className='text-2xl font-bold text-primary'>{title}</h2>
            <p>{details}</p>
            <Link to={`/category/${category_id}`} className='btn btn-secondary'><FaArrowLeft />All news in this category</Link>
        </div>
    );
};

export default NewsDetailsCard;