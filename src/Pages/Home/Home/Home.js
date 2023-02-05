import React from 'react';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
import ContactUS from './ContactUS/ContactUS';
import Exceptional from './Exceptional/Exceptional';
import InfoCards from './InfoCards/InfoCards';
import MakeAppoentment from './MakeAppoentment/MakeAppoentment';
import Textimonials from './Textimonials/Textimonials';


const Home = () => {
  return (
    <div className='mx-5'>
      <Banner />
      <InfoCards />
      <Services />
      <Exceptional />
      <MakeAppoentment />
      <Textimonials />
      <ContactUS />
    </div>
  );
};

export default Home;