import React from 'react';
import Navar from '../utils/Navar';
import Card from './Card';
import cardsData from './cardsData';
import styles from './Card.module.css';

const CloudChoice = () => {
  return (
    <>
    <Navar />
    <div className='bg-main'>
      <h2 className={`${styles.cloudHeader} d-flex justify-content-center align-items-center`}>Choose a cloud provider</h2>
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
