import React from 'react';
import Header from '../../Components/Header';
import { Outlet, useNavigation } from 'react-router';
import Marque from '../../Components/Marque';
import Navbar from '../../Components/Navbar';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';

const HomeLayouts = () => {
    const { state } = useNavigation();
    return (
        <div>
            <header>
                <Header></Header>
                <Marque></Marque>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5 mt-10'>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <LeftSidebar></LeftSidebar>
                </aside>
                <section className='main col-span-6'>
                    {state == 'loading' ? <p className='min-h-screen flex justify-center items-center'><span className="loading loading-spinner loading-xl"></span></p> : <Outlet></Outlet>}
                </section>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <RightSidebar></RightSidebar>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayouts;