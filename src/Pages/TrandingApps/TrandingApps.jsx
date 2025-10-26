import React, { Suspense, useState } from 'react';
import TrandingApp from '../TrandingApp/TrandingApp';


const TrandingApps = ({data}) => {
    const [allApps, setAllApps] = useState([])
    
    return (
        <div>
            <h2 className='font-bold text-5xl mt-20 text-center'>Trending Apps</h2>
            <p className='text-center mt-4 mb-10 px-5'>Explore All Trending Apps on the Market developed by us</p>
            <Suspense fallback={<span>Loading...</span>}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 pt-2'>
                    {
                    data.map((singleApp)=><TrandingApp key={singleApp.id} singleApp={singleApp}></TrandingApp>)
                }
                </div>
            </Suspense>
        </div>
    );
};

export default TrandingApps;