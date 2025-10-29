import React from 'react';
import page from '../../assets/error-404.png'

const ErrorPage = () => {
    return (
        <div className='grid justify-center'>
            <img src={page} alt="" />
            <h1 className='text-5xl'>Page Not Found</h1>
        </div>
    );
};

export default ErrorPage;