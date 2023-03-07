import React from 'react';
import { DayPicker } from 'react-day-picker';
import chair from '../../../assets/images/bgAppointment.png'

const AppointmentBanner = ({ selected, setSelected }) => {

  return (
    <div className='flex flex-col-reverse md:flex-row  justify-around items-center bg-slate-100 px-8'>

      <div className="text-center">
        <div className=''>
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
          />

        </div>
      </div>

      <div >
        <img className='object-cover' src={chair} alt="chair" />
      </div>

    </div>
  );
};

export default AppointmentBanner;