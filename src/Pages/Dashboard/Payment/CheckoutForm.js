import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ booking }) => {
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setprocessing] = useState(false);
  const [transactionID, setTransactionID] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const { price, patientName, email, _id } = booking;

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://doctor-portal-server-lac.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (event) => {

    event.preventDefault();

    if (!stripe || !elements) {

      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {

      setCardError(error.message)
    } else {

      setCardError('')
    }
    setSuccess('');
    setprocessing(true)
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: patientName,
            email: email
          },
        },
      },
    );

    if (confirmError) {
      setCardError(confirmError.message)
      return;

    }

    if (paymentIntent.status === "succeeded") {
      console.log('card info', card)
      const payment = {
        price,
        transactionID: paymentIntent.id,
        email,
        bookingID: _id

      }
      fetch('https://doctor-portal-server-lac.vercel.app/payments', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(payment)
      })
        .then(res => res.json())
        .then(result => {
          console.log(result)
          if (result.insertedId) {
            setSuccess('Congrats! Your Payment Complete');
            setTransactionID(paymentIntent.id);
          }


        })

    }
    setprocessing(false)

  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          className='w-96 my-10'
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn btn-primary btn-sm' type="submit" disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
      </form>
      <p className='text-red-500'>{cardError}</p>

      {
        success && <div>
          <p className='text-green-500'> {success}</p>
          <p>Your TransactionID is :<span className='font-bold'>{transactionID}</span></p>
        </div>
      }
    </>
  );
};

export default CheckoutForm;