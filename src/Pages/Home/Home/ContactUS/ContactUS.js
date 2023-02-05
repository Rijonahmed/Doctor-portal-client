import React from 'react';
import bgContact from '../../../../assets/images/appointment.png'
import PrimaryButton from '../../../../Component/PrimaryButton/PrimaryButton';

const ContactUS = () => {
  return (
    <div className="hero h-auto" style={{
      backgroundImage: `url(${bgContact})`,
    }
    }>
      <div className="my-10 grid lg:grid-cols-2">
        <div className='text-white mr-10 text-center'>
          <h3 className='text-primary text-3xl font-bold'>Contact Us</h3>
          <h2 className='text-4xl font-bold'>Stay connected with us</h2>
        </div>

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">

            <div className="form-control">
              <input type="text" placeholder="email" className="input input-bordered mb-2" />

              <input type="text" placeholder="Subject" className="input input-bordered mb-2" />

              <textarea placeholder="Your message" className="textarea textarea-bordered textarea-sm w-full max-w-xs" ></textarea>

            </div>
            <div className="form-control mt-6">
              <PrimaryButton>Submit</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;