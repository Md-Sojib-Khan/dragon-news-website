import React, { use } from 'react';
import { NavLink } from 'react-router';

const CategoriesPromise = fetch('/categories.json').then(res=>res.json())
const Categories = () => {
    const categories = use(CategoriesPromise);
    return (
        <div>
            <h1 className='font-bold text-primary'>All Category</h1>
            <div className='grid grid-cols-1 gap-2 mt-5'>
                {
                    categories.map(category => <NavLink to={`/category/${category.id}`} key={category.id} className='btn bg-base-100 border-0 text-[#9F9F9F] hover:bg-base-200'>{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;