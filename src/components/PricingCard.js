import React from 'react';
import PricicingImg from '../assets/PricingImg.png';
import tick from '../assets/tick.png';

const PricingCard = ({ type, users, work, connect, Feature, price }) => {
    return (
        <div className="w-full px-4 md:w-1/2 lg:w-1/3 relative"> 
            <div className="relative z-10 mb-10 overflow-hidden rounded-[10px] border-2 border-stroke hover:border-blue-400 cursor-pointer dark:border-dark-3 bg-white dark:bg-dark-2 py-10 px-8 shadow-pricing sm:p-12 lg:py-10 lg:px-6 xl:p-[50px]" style={{ height: '760px' }} > 
                <span className='flex justify-center'>
                    <img src={PricicingImg} alt="Pricing" />
                </span>
                <span className="mt-5 mb-3 block text-lg font-semibold text-primary justify-center flex">
                    {type}
                </span>
                <div className="mt-12 flex flex-col gap-[14px] text-gray-400">
                    <p className="text-base text-body-color dark:text-dark-6 flex justify-center mt-4 ">
                        <img src={tick} alt="Tick" /> {users}
                    </p>
                    <p className="text-base text-body-color dark:text-dark-6 flex justify-center mt-4 ">
                        <img src={tick} alt="Tick" /> {work}
                    </p>
                    {connect && <p className="text-base text-body-color dark:text-dark-6 flex justify-center mt-4 ">
                        <img src={tick} alt="Tick" /> {connect}
                    </p>}
                    {Feature && <p className="text-base text-body-color dark:text-dark-6 flex justify-center mt-4 ">
                        <img src={tick} alt="Tick" /> {Feature}
                    </p>}
                </div>
                
                <div className="absolute bottom-0 left-0 w-full p-4 bg-white dark:bg-dark-2 text-center">
                    <h2 className="mb-2 text-[22px] font-bold text-dark mb-9">
                        <span>{price}</span>
                        {price !== 'Free' && <span className="text-base font-medium text-body-color dark:text-dark-6">/ month</span>}
                    </h2>
                    <a
    href="javascript:void(0)"
    class="w-fit px-12 rounded-full border border-blue-400 bg-transparent p-3 text-center text-base font-medium text-blue-400 transition hover:text-white hover:bg-blue-400 shadow-custom"
>
    Select
</a>


                </div>
            </div>
        </div>
    )
}

export default PricingCard;
