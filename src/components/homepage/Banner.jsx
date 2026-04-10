import React from 'react';
import bannerImg from '../../assets/bannerImg.png';

const Banner = () => {
    return (
        <div className='container mx-auto px-4 sm:px-5 lg:px-0'>
            <div className="hero overflow-hidden rounded-2xl bg-base-200 py-8 sm:py-10">
                <div className="hero-content flex-col-reverse px-4 sm:px-6 lg:flex-row-reverse lg:px-28 p-0 lg:py-20 w-full justify-between gap-10 lg:gap-12">
                    <div className="w-full flex justify-center lg:justify-end">
                        <img
                        src={bannerImg}
                        alt="Featured book cover"
                        className="w-full max-w-[220px] rounded-lg bg-transparent shadow-2xl sm:max-w-xs lg:max-w-sm"
                    />
                    </div>
                    <div className="w-full text-center lg:text-left">
                        <h1 className="mx-auto mb-8 max-w-[480px] text-4xl font-bold leading-tight sm:text-5xl lg:mx-0 lg:mb-12">Books to freshen up your bookshelf</h1>
                        <button className="btn w-full bg-[#23BE0A] px-5 py-7 text-lg font-semibold text-white hover:border-[#23BE0A] hover:bg-transparent hover:text-[#23BE0A] sm:w-auto rounded-lg">
                            View The List
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
