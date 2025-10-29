import React from 'react';
import Banner from '../../Components/Banner/Banner';
import TrustedSection from '../TrustedSection/TrustedSection';
import TrandingApps from '../TrandingApps/TrandingApps';
import { useOutletContext } from 'react-router';

const Home = () => {
    const data = useOutletContext()
    
    return (
        <div className=''>
            <Banner></Banner>
            <TrustedSection></TrustedSection>
            <TrandingApps data={data}></TrandingApps>
        </div>
    );
};

export default Home;