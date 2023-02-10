import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, setTreatment, selected }) => {
  const { name, slots } = treatment;
  const date = format(selected, 'PP')

  const handleBooking = event => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const patientName = form.patientName.value;
    const email = form.email.value;
    const phone = form.phone.value;
    console.log(slot, name, email, phone)

    const booking = {
      appointmentDate: date,
      slot,
      email,
      phone,
      treatmentName: name,
      patientName: patientName

    }
    console.log(booking)
    setTreatment(null)
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
            <input type="text" name='patientName' placeholder="Name" className="input w-full" />
            <input type="text" name='email' placeholder="Email" className="input w-full" />
            <input type="text" name='phone' placeholder="Phone" className="input w-full" />
            <input className='btn btn-accent w-full' type='submit' value='Submit'></input>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;