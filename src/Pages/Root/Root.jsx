import React from 'react';
import Navbar from '../../Components/Header/Navbar';
import { Outlet, useLoaderData } from 'react-router';
import Footer from '../../Components/Footer/Footer';

const Root = () => {
    const data = useLoaderData()
    return (
        <div className=''>
            <Navbar></Navbar>
            <Outlet context={data}></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;