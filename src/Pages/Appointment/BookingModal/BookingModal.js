
import { format } from 'date-fns';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';

import { AuthContext } from '../../../Contexts/AuthProvider';

const BookingModal = ({ treatment, setTreatment, selected, refetch }) => {
  const { name, slots, price } = treatment;
  const { user } = useContext(AuthContext)
  const date = format(selected, 'PP')

  const handleBooking = event => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const patientName = form.patientName.value;
    const email = form.email.value;
    const phone = form.phone.value;


    const booking = {
      appointmentDate: date,
      slot,
      email,
      phone,
      treatmentName: name,
      patientName: patientName,
      price: price

    }


    fetch('https://doctor-portal-server-api.onrender.com/booking', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)

    })


      .then(res => res.json())
      .then(data => {

        if (data.acknowledged) {
          toast.success('appointment booking success')
          setTreatment(null);
          refetch()
        }
        else {
          toast.error(data.message);

        }

      });




  }

  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold">{name}</h3>

          <form onSubmit={handleBooking} className='grid grid-cols-1 gap-7 mt-10'>
            <input type="text" disabled value={date} className="input w-full" />
            <select name='slot' className="select select-bordered w-full">

              {
                slots.map((slot, ind) => <option key={ind} value={slot}>{slot}</option>)

              }
            </select>
            <input type="text" name='patientName' defaultValue={user?.displayName} required disabled className="input w-full" />
            <input type="text" name='email' disabled defaultValue={user?.email} required className="input w-full" />
            <input type="text" name='phone' required placeholder="Phone" className="input w-full" />

            <input disabled={!user} className='btn btn-accent w-full' type='submit' value='Submit'></input>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;