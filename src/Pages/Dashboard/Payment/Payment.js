import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe(process.env.REACT_APP_stripePK);

const Payment = () => {
  const booking = useLoaderData();
  const navigation = useNavigation()
  const { treatmentName, appointmentDate, slot, price } = booking;
  if (navigation.state === 'loading') {
    return <Loading></Loading>
  }
  return (
    <div>
      <h1 className='text-3xl'>Payment For {treatmentName}</h1>
      <p className='text-2xl'> Please pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}</p>

      <Elements stripe={stripePromise}>
        <CheckoutForm
          booking={booking}
        />
      </Elements>

    </div>
  );
};

export default Payment;