import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import RightSidebar from '../Layouts/HomeLayouts/RightSidebar';
import NewsDetailsCard from '../Components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetailsPage = () => {
    const [news, setNews] = useState({})
    const {id} = useParams();
    const data = useLoaderData();

    useEffect(()=>{
        const newsDetails = data.find(singleData => singleData.id == id);
        setNews(newsDetails)
    },[data, id])
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5 my-5'>
                <section className='col-span-9'>
                    <h3 className='font-bold text-primary'>Dragon News</h3>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RightSidebar></RightSidebar>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetailsPage;