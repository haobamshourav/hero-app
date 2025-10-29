import React, { useEffect, useState } from 'react';
import { useOutletContext, useParams } from 'react-router';
import downloadIcon from "../../assets/icon-downloads.png"
import rating from "../../assets/icon-ratings.png"
import review from "../../assets/icon-review.png"
import toast, { Toaster } from 'react-hot-toast';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AppDetails = () => {
    const { id } = useParams()
    const appId = parseInt(id)
    const data = useOutletContext()
    const singleApp = data.find(app => app.id === appId)
    const [isInstalled, setIsInstalled] = useState(false);

    const { image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings } = singleApp

    useEffect(() => {
        const installedApps = JSON.parse(localStorage.getItem('installedApps')) || [];
        const isAppInstalled = installedApps.some(app => app.id === appId);
        if (isAppInstalled) {
            setIsInstalled(true);
        }
    }, [appId]);

    const handleInstall = () => {
        const installedApps = JSON.parse(localStorage.getItem('installedApps')) || [];
        localStorage.setItem('installedApps', JSON.stringify([...installedApps, singleApp]));
        setIsInstalled(true);
        toast.success('App installed successfully!');
    };

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-sm mt-5 mx-auto p-5 flex flex-col lg:flex-row items-center lg:items-start">
                <figure className="lg:w-1/3 w-full mb-5 lg:mb-0">
                    <img
                        src={image.replace('./', '/')}
                        alt="app image" className="rounded-lg w-full"/>
                </figure>
                <div className="card-body lg:w-2/3 w-full lg:pl-10">
                    <h2 className="card-title text-3xl font-bold">{title}</h2>
                    <p className="text-lg">Developed by <span className='text-[#9F62F2]'>{companyName}</span></p>
                    <div className="flex flex-wrap justify-around my-5 lg:my-10 w-full">
                        <div className='flex flex-col items-center gap-2 p-2'>
                            <i className='w-8'><img src={downloadIcon} alt="" /></i>
                            <p className="text-sm">Downloads</p>
                            <p className="font-semibold">{downloads}M</p>
                        </div>
                        <div className='flex flex-col items-center gap-2 p-2'>
                            <i className='w-8'><img src={rating} alt="" /></i>
                            <p className="text-sm">Average Rating</p>
                            <p className="font-semibold">{ratingAvg}</p>
                        </div>
                        <div className='flex flex-col items-center gap-2 p-2'>
                            <i className='w-8'><img src={review} alt="" /></i>
                            <p className="text-sm">Total Review</p>
                            <p className="font-semibold">{reviews}</p>
                        </div>
                    </div>
                    <button
                        className={`btn w-full max-w-xs mx-auto ${isInstalled ? 'bg-gray-400' : 'bg-[#00D390]'}`}
                        onClick={handleInstall}
                        disabled={isInstalled}
                    >
                        {isInstalled ? 'Installed' : `Install Now (${size}MB)`}
                    </button>
                </div>
            </div>
            {/* Bar Chart Section */}
            <div className="mt-10 bg-base-100 shadow-sm rounded-2xl w-full p-5">
                <h3 className="text-xl font-semibold mb-5 pl-5 text-[#9F62F2]">Ratings</h3>

                <ResponsiveContainer width="100%" height={250}>
                    <BarChart
                        layout="vertical"
                        data={ratings}
                        margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
                    >
                        {/* <CartesianGrid strokeDasharray="3 3" /> */}
                        <XAxis type="number" />
                        <YAxis
                            dataKey="name"
                            type="category"
                            tick={{ fontSize: 14 }}
                            width={70}
                        />
                        <Tooltip />
                        <Bar
                            dataKey="count"
                            fill="#FF8C00"
                            barSize={25}
                            
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className='p-10'>
                <h2 className='mb-10'>Description</h2>
                <p>{description}</p>
            </div>


            <Toaster />

        </div>

    );
};

export default AppDetails;