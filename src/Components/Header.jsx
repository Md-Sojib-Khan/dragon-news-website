import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-10'>
            <img src={logo} alt="" />
            <p className='text-accent font-medium my-2'>Journalism Without Fear or Favour</p>
            <p className='font-semibold text-accent mb-5'>{format(new Date(), "EEEE, MMMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;