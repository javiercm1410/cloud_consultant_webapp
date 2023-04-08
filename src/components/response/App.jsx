import React from 'react';
import Navar from '../utils/Navar';
import { useLocation, useNavigate } from 'react-router-dom';

const Response = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state?.data || location.state?.formData; // Use the correct key here
  const apiResponse = location.state?.apiResponse|| location.state?.Jresp;

  const handleGoBack = () => {
    // Navigate back to the cloudchoice page and pass the data
    navigate('/cloudchoice', { state: { data } });
  };

  return (
    <div>
      <Navar />
      <h1>Form Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <h1>API Response</h1>
      <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default Response;
