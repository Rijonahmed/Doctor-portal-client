import React from 'react';
import bannerimg from '../../../../assets/images/chair.png';
import bgBanner from '../../../../assets/images/bg.png'

const Banner = () => {
  return (
    <div className="hero" style={{
      backgroundImage: `url(${bgBanner})`,

    }
    }>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={bannerimg} className="max-w-sm rounded-lg shadow-2xl" alt='img' />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
          <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;