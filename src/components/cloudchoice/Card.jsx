import React, { useContext } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Card.module.css';
import { FormDataContext } from '../../context/formDataContext';


const Card = ({ title, description, provider, image }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const {formData, setFormData} = useContext(FormDataContext);

  const handleProviderSelection = async (provider) => {
    // Update the cloud_provider field in the form data
    const updatedFormData = { ...formData, cloud_provider: provider };
    setFormData(updatedFormData);

    // Send the updated form data to the API
    const apiResponse = (await axios.post('http://localhost:3000/api/data', updatedFormData)).data;

    // Navigate to the response page with the updated form data and API response
    navigate('/response', { state: { formData: updatedFormData, apiResponse } });
  };

  return (
    <div className="card bg-dark">
      <div
        className="card-img-container d-flex justify-content-center align-items-center"
        style={{ minHeight: '250px', maxHeight: '250px' }}
      >
        <img className="card-img-top" src={image} alt="Card image cap" />
      </div>
      <div className="card-body text-center">
        <p className="card-text">{title}</p>
        <p className={`${styles.cloudText} card-text`}>{description}</p>
        <button className={`btn ${styles.customButton}`} onClick={() => handleProviderSelection(provider)}>
        {provider}
        </button>
      </div>
    </div>
  );
};

export default Card;
