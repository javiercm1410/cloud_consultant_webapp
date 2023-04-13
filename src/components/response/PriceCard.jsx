import React from 'react';

const PriceCard = ({ data }) => {
  const total = Object.values(data).reduce((acc, curr) => acc + curr, 0);

  return (
    <div className="card mb-3">
      <div className="card-header">Price</div>
      <div className="card-body bg-dark">
        {Object.entries(data).map(([service, price], index) => (
          <p key={index}>
            {service}: ${price.toFixed(2)}
          </p>
        ))}
        <p><strong>Total: ${total.toFixed(2)}</strong></p>
      </div>
    </div>
  );
};

export default PriceCard;
