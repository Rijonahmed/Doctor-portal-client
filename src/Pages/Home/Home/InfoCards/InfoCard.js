import React from 'react';

const InfoCard = ({ card }) => {
  const { name, description, icon, bgclass } = card;
  return (
    <div className={`card mt-8 px-6 text-white card-side shadow-xl ${bgclass}`}>
      <figure><img src={icon} alt="img" /></figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>

      </div>
    </div>
  );
};

export default InfoCard;