import React from 'react';
import bannerImg from '../../assets/bannerImg.png';

const Banner = () => {
    return (
        <div className='container mx-auto'>
            <div className="hero bg-base-200 py-8">
                <div className="hero-content flex-col lg:flex-row-reverse px-5 lg:px-28 p-0 lg:py-20 w-full justify-between gap-12">
                    <div className="">
                        <img
                        src={bannerImg}
                        className="max-w-sm rounded-lg shadow-2xl bg-transparent"
                    />
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold max-w-[480px] mb-12">Books to freshen up your bookshelf</h1>
                        <button className="btn bg-[#23BE0A] text-white text-lg font-semibold px-5 py-7 rounded-lg hover:bg-transparent hover:text-[#23BE0A] hover:border hover:border-[#23BE0A]">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;