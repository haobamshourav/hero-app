import bannerimage from '../../assets/hero.png'

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">We Build
                            Productive Apps</h1>
                        <p className="py-6">
                            At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
                        </p>
                        <div className='flex gap-6 justify-center'>
                            <button className="btn btn-primary">Google Play</button>
                            <button className="btn btn-primary">App Store</button>

                        </div>
                        <div className='mt-10'>
                            <img src={bannerimage} alt="hero image" />
                        </div>
                        
                    </div>
                </div>
            </div>
            

        </div>
    );
};

export default Banner;