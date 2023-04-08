import React from 'react';
import Navar from '../utils/Navar';
import Card from './Card';
import cardsData from './cardsData';

const CloudChoice = () => {
  return (
    <>
    <Navar />
    <div className='bg-main vh-100'>
      <h1>Choose Cloud Provider</h1>
      <div className="container">
        <div className="row">
          {cardsData.map((card) => (
            <div className="col-md-4" key={card.id}>
              <Card
                provider={card.provider}
                image={card.image}
                title={card.title}
                description={card.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default CloudChoice;
