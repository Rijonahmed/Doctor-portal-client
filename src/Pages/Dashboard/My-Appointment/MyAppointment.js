import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';

const MyAppointment = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/booking?email=${user?.email}`

  const { data: bookings = [] } = useQuery({
    queryKey: ['booking', user.email],
    queryFn: async () => {
      const res = await fetch(url)
      const data = await res.json()
      return data
    }
  })
  return (
    <div>
      <h1 className='text-2xl font-bold mb-4'>My Appointment</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment Name</th>
              <th>AppointmentDate</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {
              bookings.map((booking, i) =>
                <tr>
                  <th>{i + 1}</th>
                  <td>{booking.patientName}</td>
                  <td>{booking.treatmentName}</td>
                  <td>{booking.appointmentDate}</td>
                  <td>{booking.slot}</td>
                </tr>)
            }


          </tbody>
        </table>
      </div>

    </div>
  );
};

export default MyAppointment;