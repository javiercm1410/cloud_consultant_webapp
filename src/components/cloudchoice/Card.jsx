import React from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const Card = ({ title, description, provider, image }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state?.formData || location.state?.data;

  const handleProviderSelection = async (provider) => {
    // Update the cloud_provider field in the data
    const updatedData = { ...data, cloud_provider: provider };

    // Send the updated data back to the API
    const apiResponse = await (await axios.post('http://localhost:3000/api/data', updatedData)).data;

    // Navigate to the response page with the updated data and API response
    navigate('/response', { state: { data: updatedData, apiResponse } });
  };

  return (
    <div className="card bg-dark">
      <div
        className="card-img-container d-flex justify-content-center align-items-center"
        style={{ minHeight: '250px', maxHeight: '250px' }}
      >
        <img className="card-img-top" src={image} alt="Card image cap" />
      </div>
      <div className="card-body">
        <p className="card-text">{title}</p>
        <p className="card-text">{description}</p>
        <button onClick={() => handleProviderSelection(provider)}>{provider}</button>
      </div>
    </div>
  );
};

export default Card;
