import React from 'react';
import quote from '../../../../assets/icons/quote.svg'
import people1 from '../../../../assets/images/people1.png'
import people2 from '../../../../assets/images/people2.png'
import people3 from '../../../../assets/images/people3.png'
import Review from './Review';

const Textimonials = () => {
  const reviews = [
    {
      _id: "1",
      name: "Rijon Ahmed",
      text: "",
      location: "Bangladesh",
      img: people1
    },
    {
      _id: "2",
      name: "Jenifa",
      text: "",
      location: "Bangladesh",
      img: people2
    },
    {
      _id: "3",
      name: "Jannatul imu",
      text: "",
      location: "Bangladesh",
      img: people3
    },
  ]
  return (
    <section className='my-20'>
      <div className='flex justify-between'>
        <div>
          <h3 className='text-primary text-xl text-bold'>Textimonials</h3>
          <h2 className='text-2xl'>What our patients say</h2>

        </div>
        <div>
          <img className='w-28 lg:w-48' src={quote} alt="" />
        </div>


      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {
          reviews.map(review => <Review
            key={review._id}
            review={review}
          ></Review>)
        }

      </div>
    </section>
  );
};

export default Textimonials;