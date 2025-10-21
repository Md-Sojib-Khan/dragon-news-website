import React from 'react';
import Navbar from '../../Components/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <header className='py-4'>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto flex justify-center items-center mt-28'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;