import React from 'react';
import doctor from '../../../../assets/images/doctor.png'
import bgAppoenment from '../../../../assets/images/appointment.png'
import PrimaryButton from '../../../../Component/PrimaryButton/PrimaryButton';

const MakeAppoentment = () => {
  return (
    <section style={{
      background: `url(${bgAppoenment})`
    }} className='flex justify-center items-center mt-2.5' >
      <div className='flex-1 hidden lg:block'>
        <img className='mt-[-130px]' src={doctor} alt="" />

      </div>
      <div className='flex-1'>
        <h2 className='text-primary text-xl'>Appointment</h2>
        <h3 className='text-3xl text-white'>Make an appointment Today</h3>
        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perspiciatis maxime sunt delectus. Corrupti quidem, suscipit corporis iure facere quasi rerum sed quod pariatur, nam odit, ullam aliquid perferendis! Fugit commodi veritatis rerum animi culpa? Voluptas repellendus atque aperiam. Dolore!</p>
        <PrimaryButton>Get started</PrimaryButton>


      </div>


    </section>

  );
};

export default MakeAppoentment;