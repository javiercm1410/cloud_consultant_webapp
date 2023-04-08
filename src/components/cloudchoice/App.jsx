import React from 'react';
import Navar from '../utils/Navar';
import Card from './Card';
import cardsData from './cardsData';

const CloudChoice = () => {

  return (
    <div> 
    <Navar />
    <h1>Choose Cloud Provider</h1>
    {cardsData.map((card) => (
        <Card
            key={card.id}
            provider={card.provider}
            title={card.title}
            description={card.description}
        />
    ))} 
    </div>
  );
};

export default CloudChoice;
