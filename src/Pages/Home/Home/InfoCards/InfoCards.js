import React from 'react';
import clock from '../../../../assets/icons/clock.svg'
import marker from '../../../../assets/icons/marker.svg'
import phone from '../../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';

const InfoCards = () => {
  const cardData = [
    {
      id: 1,
      name: 'Opening Hours',
      description: 'Lorem Ipsum is simply dummy text of the pri',
      icon: clock,
      bgclass: 'bg-gradient-to-r from-primary to-secondary'
    },
    {
      id: 2,
      name: 'Visit our location',
      description: 'Brooklyn, NY 10036, United States',
      icon: marker,
      bgclass: 'bg-accent'
    },
    {
      id: 3,
      name: 'Contact us now',
      description: '+000 123 456789',
      icon: phone,
      bgclass: 'bg-gradient-to-r from-primary to-secondary'
    },
  ]
  return (
    <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {
        cardData.map(card => <InfoCard
          key={card.id}
          card={card}
        ></InfoCard>)
      }

    </div>
  );
};

export default InfoCards;