import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import downloadIcon from "../../assets/icon-downloads.png"
import rating from "../../assets/icon-ratings.png"
import review from "../../assets/icon-review.png"
import toast, { Toaster } from 'react-hot-toast';

const AppDetails = () => {
    const { id } = useParams()
    const appId = parseInt(id)
    const data = useLoaderData()
    const singleApp = data.find(app => app.id === appId)
    const [isInstalled, setIsInstalled] = useState(false);

    const { image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings } = singleApp

    const handleInstall = () => {
        setIsInstalled(true);
        toast.success('App installed successfully!');
    };

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-sm gap-15 mt-15 ml-9">
                <figure>
                    <img
                        src={image}
                        alt="app image" />
                </figure>
                <div className="card">
                    <h2 className="card-title">{title}</h2>
                    <p>Developed by <span className='text-[#9F62F2]'>{companyName}</span></p>
                    <div className="flex gap-15 my-10">
                        <div className='grid gap-5'>
                            <i className='w-8'><img src={downloadIcon} alt="" /></i>
                            <p>downloads</p>
                            <p>{downloads}M</p>
                        </div>
                        <div className='grid gap-5'>
                            <i className='w-8'><img src={rating} alt="" /></i>
                            <p>Average Rating</p>
                            <p>{ratingAvg}</p>
                        </div>
                        <div className='grid gap-5'>
                            <i className='w-8'><img src={review} alt="" /></i>
                            <p>Total Review</p>
                            <p>{reviews}</p>
                        </div>
                        
                    </div>
                    <button 
                        className={`btn ${isInstalled ? 'bg-gray-400' : 'bg-[#00D390]'}`}
                        onClick={handleInstall}
                        disabled={isInstalled}
                    >
                        {isInstalled ? 'Installed' : `Install Now (${size}MB)`}
                    </button>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default AppDetails;