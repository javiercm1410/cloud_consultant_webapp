import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Card.module.css';
import { FormDataContext } from '../../context/formDataContext';
import LoadingWheel from '../loading/LoadingWheel';


const Card = ({ title, description, provider, image }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {formData, setFormData} = useContext(FormDataContext);

  // const {formData} = useContext(FormDataContext);

  const getTitleColor = (title) => {
    // Change the color based on the title or id
    switch(title) {
      case 'Amazon Web Services':
        return '#F0AF19';
      case 'Google Cloud Platform':
        return 'green';
      case 'Microsoft Azure':
        return '#193EF6';
      default:
        return 'black'; // default color if no match
    }
  };

  const handleProviderSelection = async (provider) => {
    // Update the cloud_provider field in the form data
    const updatedFormData = { ...formData, cloud_provider: provider };
    setFormData(updatedFormData);
    setIsSubmitting(true); // Set submitting state to true when form is submitted

    try {
      // Send the updated form data to the API
      const apiResponse = (await axios.post('http://localhost:3000/api/data', updatedFormData)).data;
  
      // Navigate to the response page with the updated form data and API response
      navigate('/response', { state: { formData: updatedFormData, apiResponse } });
    } catch(error) {
      console.log("API request failed", error);
    } finally {
      setIsSubmitting(false); // Set submitting state to false when API call is done
    }
  };

  return (
    <div className={`card bg-dark ${styles.card}`}>
      <div className={`${styles.cloudTitle}`}>
        <h2 className={`${styles.cloudTitle}`} style={{ color: getTitleColor(title) }}>{title}</h2>
      </div>
      <div className={`card-body ${styles.cardBody}`}>
        <p className={`${styles.cloudText} card-text`}>{description}</p>
        {isSubmitting ? (  // Add this block
        <LoadingWheel />
        ) : (
          <button className={`btn ${styles.customButton}`} onClick={() => handleProviderSelection(provider)}>
          SELECT
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
