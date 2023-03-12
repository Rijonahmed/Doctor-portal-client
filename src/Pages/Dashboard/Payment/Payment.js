import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
  const booking = useLoaderData();
  const { treatmentName, appointmentDate, slot, price } = booking
  return (
    <div>
      <h1 className='text-3xl'>Payment For {treatmentName}</h1>
      <p className='text-2xl'> please pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}</p>

    </div>
  );
};

export default Payment;