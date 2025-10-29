import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import iconDownloads from '../../assets/icon-downloads.png';
import iconRatings from '../../assets/icon-ratings.png';
import  appError from '../../assets/App-Error.png'

const AllApps = () => {
    const apps = useOutletContext();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredApps = apps.filter(app =>
        app.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        
        <div className='mt-10 px-4 md:px-8'>

            <div>
                <h1 className='text-5xl font-bold mt-10 text-center'>Our All Applications</h1>
                <p className='text-center mt-5 mb-10'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex justify-between items-center mb-5'>
                <h1 className='text-2xl font-bold'>
                    Total Apps: {filteredApps.length}
                </h1>
                <input
                    type='text'
                    placeholder='Search by title...'
                    value={searchQuery}
                    onChange={handleSearch}
                    className='px-4 py-2 border rounded-md'
                />
            </div>

            {filteredApps.length > 0 ? (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 pt-2'>
                    {filteredApps.map(app => (
                        <Link to={`/appDetails/${app.id}`} key={app.id}>
                            <div className="card bg-base-100 shadow-sm">
                                <figure>
                                    <img className='rounded-xl mt-3'
                                        src={app.image}
                                        alt={app.title} />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {app.title}
                                    </h2>
                                    <div className="card-actions justify-between">
                                        <div className="badge badge-outline"><img src={iconDownloads} alt="" className='w-3 mr-1' />{app.downloads}M</div>
                                        <div className="badge badge-outline"><img src={iconRatings} alt="" className='w-3 mr-1' />{app.ratingAvg}</div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : 
                <div className='text-center mt-10 justify-center grid gap-10'>
                    <img className='w-60' src={appError} alt="" />
                    <h2 className='text-2xl font-bold'>No App Found</h2>
                    <p className='mb-10'>We couldn't find any apps matching your search.</p>
                </div>
            }
        </div>
    );
};

export default AllApps;