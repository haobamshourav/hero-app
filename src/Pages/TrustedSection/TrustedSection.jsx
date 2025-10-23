import React from 'react';

const TrustedSection = () => {
    return (
        
        <div>
            <div class="bg-[#9F62F2] w-full mt-[-15px] pt-0 py-24 sm:py-32 sm:pt-0">
                <div>
                    <h2 className='text-[48px] font-bold sm:text-[20px] sm:font-medium text-white text-center mb-10'>Trusted by Millions, Built for You</h2>
                </div>
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                        <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                            <p className='text-white'>Total Downloads</p>
                            
                            <dd class="text-3xl font-semibold tracking-tight text-white sm:text-5xl">29.6M</dd>
                            <dt class="text-base/7 text-white">21% more than last month</dt>
                        </div>
                        <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                            <p className='text-white'>Total Reviews</p>
                            
                            <dd class="text-3xl font-semibold tracking-tight text-white sm:text-5xl">906K</dd>
                            <dt class="text-base/7 text-white">46% more than last month</dt>
                        </div>
                        <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                            <p className='text-white'>Active Apps</p>
                            
                            <dd class="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">132+</dd>
                            <dt class="text-base/7 text-white">31 more will Launch</dt>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default TrustedSection;