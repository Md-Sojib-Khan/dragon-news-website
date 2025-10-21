import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext/AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext)
    const location = useLocation();

    if (loading) {
        return <p className='min-h-screen flex justify-center items-center'><span className="loading loading-spinner loading-xl"></span></p>
    }
    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to={'/auth/login'}></Navigate>;
};

export default PrivateRoute;