import google from "../../assets/playstore.png"
import apple from "../../assets/apple.png"

const Banner = () => {
    return (
        <div className="">
            <div className="hero min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">We Build
                            <a className="text-[#9F62F2]"> Productive</a> Apps</h1>
                        <p className="py-6">
                            At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
                        </p>
                        <div className='flex gap-6 justify-center'>
                            <button className="btn bg-white text-black border-[#D2D2D2]"><i><img className="w-7" src={google} alt="" /></i>Google Play</button>
                            <button className="btn bg-white text-black border-[#D2D2D2]"><i><img className="w-7" src={apple} alt="" /></i>App Store</button>

                        </div>
                        
                        
                    </div>
                </div>
            </div>
            

        </div>
    );
};

export default Banner;