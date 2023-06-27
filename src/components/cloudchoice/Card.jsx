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
        <img src={image} alt="AWS Logo" style={{ height: '150px', marginTop: "2rem", marginBottom: "2rem" }} className={'.mt-5'}/>
        <p className={`${styles.cloudText}`}>{title}</p>
      </div>
      <div className={`card-body ${styles.cardBody}`}>
        <p className={`${styles.cloudPrice} card-text`}>{description}</p>
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
