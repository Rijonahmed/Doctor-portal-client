import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointment = ({ selected }) => {
  // const [AppointmentOptions, setAppointmentOption] = useState([]);
  const [treatment, setTreatment] = useState(null);

  const { data: AppointmentOptions = [] } = useQuery({
    queryKey: ['appointmentOptions'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/appointmentOptions')
      const data = await res.json()
      return data
    }
  })


  // useEffect(() => {
  //   fetch('http://localhost:5000/appointmentOptions')
  //     .then(res => res.json())
  //     .then(data => setAppointmentOption(data))


  // }, [])
  return (
    <div>
      <p className='text-2xl text-primary font-bold text-center my-10'>Available Appointments on {format(selected, 'PP')}</p>

      <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5 my-8'>
        {
          AppointmentOptions.map(option => <AppointmentOption
            key={option._id}
            AppointmentOption={option}
            setTreatment={setTreatment}
          ></AppointmentOption>)
        }

      </div>


      {treatment &&
        <BookingModal
          treatment={treatment}
          selected={selected}
          setTreatment={setTreatment}
        ></BookingModal>
      }

    </div>
  );
};

export default AvailableAppointment;