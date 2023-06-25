// CloudChoice.jsx
import React, { useContext } from 'react';
import Navar from '../utils/Navar';
import Card from './Card';
import styles from './Card.module.css';
import { useLocation } from 'react-router-dom';

const CloudChoice = () => {

  const location = useLocation();
  //const data = location.state?.data || location.state?.formData;
  const apiResponse = location.state?.apiResponse || location.state?.Jresp;
  console.log(apiResponse);
  const prices = apiResponse?.Price || {};
  console.log(prices);

  const cardsData = [
    {
      id: 1,
      provider: 'AWS',
      title: 'Amazon Web Services',
      description: 'Price: ' + (prices?.AWS || 'N/A'),
    },
    {
      id: 2,
      provider: 'GCP',
      title: 'Google Cloud Platform',
      description: 'Price: ' + (prices?.GCP || 'N/A'),
    },
    {
      id: 3,
      provider: 'Azure',
      title: 'Microsoft Azure',
      description: 'Price: ' + (prices?.Azure || 'N/A'),
    },
  ];

  return (
    <>
    <Navar />
    <div className='bg-main vh-100'>
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
