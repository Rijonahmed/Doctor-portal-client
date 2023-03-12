import React from 'react';


const AppointmentOption = ({ AppointmentOption, setTreatment }) => {
  const { name, slots, price } = AppointmentOption
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body text-center">
          <h2 className=" text-primary font-bold">{name}</h2>
          <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
          <p>{slots.length} spaces available</p>
          <p>Price: ${price}</p>
          <div className="card-actions justify-center">
            <label disabled={slots.length === 0} htmlFor="my-modal-3" className='btn btn-primary text-white' onClick={() => setTreatment(AppointmentOption)}>Book Appointment</label>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;