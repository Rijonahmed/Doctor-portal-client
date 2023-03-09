import React from 'react';

const Loading = () => {
  const imageStyle = {
    width: '50%', // set width to 100% of parent container
    height: 'auto', // set height to auto to maintain aspect ratio


    objectFit: 'cover', // set object fit to cover to fill the container
  };
  return (
    <div>
      <div className="flex items-center justify-center mt-12">
        {/* <div
          className="inline-block h-32 w-32  animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status">
          <span
            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >Loading...</span
          >
        </div> */}
        <img
          src="https://cdn.dribbble.com/users/4241225/screenshots/14521747/media/d9d6f50e1443ecbdef32497685c0b5eb.gif"
          style={imageStyle}
          alt="My Image" />

      </div>
    </div>
  );
};

export default Loading;