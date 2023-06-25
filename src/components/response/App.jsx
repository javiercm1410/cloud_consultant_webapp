import React, { useContext } from 'react';
import Navar from '../utils/Navar';
import { useLocation, useNavigate } from 'react-router-dom';
import { FormDataContext } from '../../context/formDataContext';
import Base64Image from './Base64Image';
import PriceCard from './PriceCard';
import DescriptionCard from './DescriptionCard';
import ServicesCard from './ServicesCard';


const Response = () => {

  const {formData} = useContext(FormDataContext);

  const location = useLocation();
  const navigate = useNavigate();
  //const data = location.state?.data || location.state?.formData;
  const apiResponse = location.state?.apiResponse || location.state?.Jresp;
  const base64Image = apiResponse?.imageBase64;
  const data = apiResponse?.data || {};
  
  console.log(apiResponse);
  // console.log(imagePath);


  const handleGoBack = () => {
    navigate('/cloudchoice', { state: { apiResponse, formData } });
  };

  const handleDeploy = () => {
    // Implement your deploy logic here
  };



  return (
    <div className='bg-main'>
      <Navar />
      <div className="container">
        <p>Architecture Diagram</p>
        <div className='row'>
          <div className="card">
            <Base64Image base64Image={base64Image} alt="Example Image" />
          </div>
        </div>

        {/* <div className="row mt-4"> */}
        <div className="row mt-6">
          <div className="col-md-6">
            <PriceCard data={data} />
          </div>
           <div className="col-md-6">
            <DescriptionCard />
          </div>{/*
          <div className="col-md-4">
            <ServicesCard data={data} />
          </div> */}
        </div>

        <button className="btn btn-primary mr-5" onClick={handleDeploy}>
          Deploy
        </button>
        <button className="btn btn-secondary" onClick={handleGoBack}>
          Go Back
        </button>
        
      </div>
    </div>
  );
};

export default Response;



