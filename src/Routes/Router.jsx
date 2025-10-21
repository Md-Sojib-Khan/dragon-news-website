import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts/HomeLayouts";
import Home from "../Pagese/Home";
import CategoryNews from "../Pagese/CategoryNews";
import About from "../Pagese/About";
import Career from "../Pagese/Career";
import AuthLayout from "../Layouts/AuthLayout/AuthLayout";
import Login from "../Pagese/Login";
import Register from "../Pagese/Register";
import NewsDetailsPage from "../Pagese/NewsDetailsPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        Component:HomeLayouts,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path:'/about',
                Component: About
            },
            {
                path:'/career',
                Component: Career
            },
            {
                path:'/category/:id',
                Component: CategoryNews,
                loader: ()=>fetch('/news.json'),
                hydrateFallbackElement: <p className='min-h-screen flex justify-center items-center'><span className="loading loading-spinner loading-xl"></span></p>
            }
        ]
    },
    {
        path: '/auth',
        element:<AuthLayout></AuthLayout>,
        children: [
            {
                path:'/auth/login',
                element:<Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/news-details/:id',
        element:<PrivateRoute>
            <NewsDetailsPage></NewsDetailsPage>
        </PrivateRoute>,
        loader: ()=>fetch('/news.json'),
        hydrateFallbackElement: <p className='min-h-screen flex justify-center items-center'><span className="loading loading-spinner loading-xl"></span></p>
    }
])

export default router