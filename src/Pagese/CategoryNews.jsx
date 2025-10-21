import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Components/NewsCard';

const CategoryNews = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const [categoryNews, setCategoryNews] = useState([]);

    useEffect(() => {
        if (id == 0) {
            return setCategoryNews(data)
        } else if (id == '1') {
            const filterdNews = data.filter(news => news.others.is_today_pick == true);
            setCategoryNews(filterdNews)
        } else {
            const filterdNews = data.filter(news => news.category_id == id)
            setCategoryNews(filterdNews)
        }
    }, [data, id])
    return (
        <div>
            <h1 className='font-bold text-primary mb-5'>Total <span className='text-secondary'>{categoryNews.length}</span> News Found</h1>
            <div className='grid grid-cols-1 gap-5'>
                {
                    categoryNews.map(news => <NewsCard news={news} key={news.id}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;