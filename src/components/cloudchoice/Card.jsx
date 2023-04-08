import React from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const Card = ( {title, description, provider} ) => {

    const location = useLocation();
    const navigate = useNavigate();
    const data = location.state?.formData || location.state?.data;
  
    const handleProviderSelection = async (provider) => {
      // Update the cloud_provider field in the data
      const updatedData = { ...data, cloud_provider: provider };
  
      // Send the updated data back to the API
      const apiResponse = await (await axios.post('http://localhost:3000/api/data', updatedData)).data;
      // const response = await fetch('http://localhost:3000/api/data', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(updatedData),
      // });
      //const apiResponse = await response.json();
  
      // Navigate to the response page with the updated data and API response
      navigate('/response', { state: { data: updatedData, apiResponse } });
    };

    return(
        <section className="container-fluid d-flex justify-content-center align-items-center vh-100 bg-main">
            <div className="card-deck">
                <div className="card">
                    {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <button onClick={() => handleProviderSelection(provider)}>{provider}</button>
                    </div>
                </div>
            </div>
      </section>
  );
}

export default Card;
