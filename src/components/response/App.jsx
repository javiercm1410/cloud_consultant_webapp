import React, { useContext, useState } from 'react';
import Navar from '../utils/Navar';
import { useLocation, useNavigate } from 'react-router-dom';
import { FormDataContext } from '../../context/formDataContext';
import Base64Image from './Base64Image';
import PriceCard from './PriceCard';
import CredentialsCard from './CredentialsCard';
import styles from './Response.module.css';
import Tooltip from "../utils/ToolTip";
import axios from 'axios';
import LoadingWheel from '../loading/LoadingWheel';
// import ServicesCard from './ServicesCard';


const Response = () => {

  const {formData} = useContext(FormDataContext);

  const location = useLocation();
  const navigate = useNavigate();
  //const data = location.state?.data || location.state?.formData;
  const apiResponse = location.state?.apiResponse || location.state?.Jresp;
  const base64Image = apiResponse?.imageBase64;
  const data = apiResponse?.data || {};
  const [isSubmitting, setIsSubmitting] = useState(false);
  console.log(apiResponse);
  // console.log(imagePath);


  const handleGoBack = () => {
    navigate('/cloudchoice', { state: { apiResponse, formData } });
  };

  const handleDeploy = async (event) => {
    // Implement your deploy logic here
    // navigate('/deploy', { state: { apiResponse, formData } });
    event.preventDefault();
    setIsSubmitting(true); // Set submitting state to true when form is submitted
  
    try {
      const response = await axios.post('http://localhost:3000/api/deploy', formData);

      if (response.status == 200){
        const deployResponse = response.data;
        // console.log('Form submitted successfully', formData, deployResponse);
        navigate('/deploy', { state: { apiResponse, deployResponse } });
        // navigate('/deploy', { state: { apiResponse, formData } });

      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false); // Set submitting state to false after form is processed
    }
  };

  return (
    <div className='bg-main'>
      <Navar />
      <div className="container">
        <p>Architecture Diagram</p>
        <div className='row d-flex'>
          <div className="col-md-6 d-flex">
            <div className="card h-100 flex-fill">
              <Base64Image base64Image={base64Image} alt="CloudConsultantArch"/>
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100">
            <PriceCard data={data} />
            </div>
          </div>
        </div>

        {/* <div className="row mt-4"> */}
        
        <div className="row mt-12" style={{  marginTop: "2rem", marginBottom: "2rem" }}>
          <div>
            <Tooltip content="AWS:<br />USER=XXXXX,PASS=XXXXXX<br />Azure:<br /> USER=XXXXX,PASS=XXXXXX,ACCOUNT=XXXXXX,TENANT=XXXXXX<br /> GCP:<br /> XXXXX" />
          </div>
           <div className="col-md-12">
            <CredentialsCard />
          </div>
        </div>

        {isSubmitting ? (  // Add this block
                      <LoadingWheel />
                    ) : (
                      // <div className="mb-3 d-flex justify-content-center p-bt">
                      <>
                      <div> 
                       <button className={`${styles.customButton} btn mr-5`} onClick={handleDeploy}>
                          Deploy
                        </button>
                      <button className={`${styles.customButton} btn`} style={{  marginLeft: "1rem", marginTop: "2rem", marginBottom: "2rem" }} onClick={handleGoBack}>
                        Go Back
                      </button>
                      </div>
                      </>
                    )}

      </div>
    </div>
  );
};

export default Response;
