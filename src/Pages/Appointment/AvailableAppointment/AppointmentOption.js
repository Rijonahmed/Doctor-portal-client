import React from 'react';
import PrimaryButton from '../../../Component/PrimaryButton/PrimaryButton';

const AppointmentOption = ({ AppointmentOption }) => {
  const { name, slots } = AppointmentOption
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body text-center">
          <h2 className=" text-primary font-bold">{name}</h2>
          <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
          <p>{slots.length} spaces available</p>
          <div className="card-actions justify-center">
            <PrimaryButton>Book Appointment</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;