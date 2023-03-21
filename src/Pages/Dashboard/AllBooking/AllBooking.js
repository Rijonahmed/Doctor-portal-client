import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider';
import ConfirmationModal from '../../Shared/ConfirmationModal';

const AllBooking = () => {
  const [deletingBookings, setDeletingDoctor] = useState(null);
  const closeModal = () => {
    setDeletingDoctor(null)
  }
  const { user } = useContext(AuthContext);
  const url = `https://doctor-portal-server-api.onrender.com/bookings`

  const { data: bookings = [], refetch } = useQuery({
    queryKey: ['booking', user.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
      })
      const data = await res.json()
      return data
    }
  })
  const [query, setQuery] = useState('');


  const handleDeleteDoctor = booking => {
    fetch(`https://doctor-portal-server-api.onrender.com/bookings/${booking._id}`,
      {
        method: 'DELETE',
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
      })
      .then(res => res.json())
      .then(data => {

        if (data.deletedCount > 0) {
          toast.success(`${booking.patientName} is deleted successfully`);
          refetch();
        }
      })
  }


  return (
    <div>
      <h1 className='text-3xl'>All Bookings(<span className='font-bold'>{bookings?.length}</span>) </h1>

      <div className='ml-5' >
        <input type="text" placeholder="Search..." className="input input-bordered input-info w-full max-w-xs my-10 " onChange={(e) => setQuery(e.target.value)} />

      </div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Treatment Name</th>
              <th>AppointmentDate</th>
              <th>Time</th>
              <th>Price</th>
              <th></th>

            </tr>
          </thead>
          <tbody>
            {
              bookings?.filter(booking => booking.patientName.toLowerCase().includes(query) || booking.email.toLowerCase().includes(query) || booking.appointmentDate.toLowerCase().includes(query)).map((booking, i) =>
                <tr key={booking._id}>
                  <th>{i + 1}</th>
                  <td>{booking?.patientName}</td>
                  <td>{booking?.email}</td>
                  <td>{booking?.treatmentName}</td>
                  <td>{booking?.appointmentDate}</td>
                  <td>{booking?.slot}</td>
                  <td>{booking?.price}</td>
                  <td>
                    <label onClick={() => {
                      setDeletingDoctor(booking)
                    }} htmlFor="confirmation-modal" className="btn btn-xs btn-outline btn-error">Delete</label>

                  </td>

                </tr>)
            }


          </tbody>
        </table>
      </div>

      {
        deletingBookings && <ConfirmationModal
          title={'Are you sure you want to delete ?'}
          message={`If you delete ${deletingBookings.patientName} it cannot be data back.`}
          handleDeleteDoctor={handleDeleteDoctor}
          modalData={deletingBookings}
          closeModal={closeModal}
        ></ConfirmationModal>
      }

    </div>
  );
};

export default AllBooking;