import React from 'react';
import bannerimg from '../../../../assets/images/newChair.png';
import bgBanner from '../../../../assets/images/bg.png'
import PrimaryButton from '../../../../Component/PrimaryButton/PrimaryButton';

const Banner = () => {
  return (
    <div className="hero" style={{
      backgroundImage: `url(${bgBanner})`,

    }
    }>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={bannerimg} className="max-w-sm rounded-lg " alt='img' />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;