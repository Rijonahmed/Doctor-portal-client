import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import chair from '../../../assets/images/bgAppointment.png'

const AppointmentBanner = () => {
  const [selected, setSelected] = useState(new Date());
  return (
    <div className='flex flex-col md:flex-row gap-8 lg:gap-96 justify-between items-center bg-slate-100 py-20 px-8'>

      <div className="text-center">
        <div className='pl-20'>
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
          />
          <p>You picked {format(selected, 'PP')}.</p>
        </div>
      </div>

      <div >
        <img className='object-cover' src={chair} alt="chair" />
      </div>

    </div>
  );
};

export default AppointmentBanner;