import React from 'react';
import Banner from '../../Components/Banner/Banner';
import TrustedSection from '../TrustedSection/TrustedSection';
import TrandingApps from '../TrandingApps/TrandingApps';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData()
    console.log(data);
    
    return (
        <div className=''>
            <Banner></Banner>
            <TrustedSection></TrustedSection>
            <TrandingApps data={data}></TrandingApps>
        </div>
    );
};

export default Home;