import React from 'react';
import Navar from '../utils/Navar';
import { useLocation, useNavigate } from 'react-router-dom';

const Response = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state?.data || location.state?.formData;
  const apiResponse = location.state?.apiResponse || location.state?.Jresp;

  const handleGoBack = () => {
    navigate('/cloudchoice', { state: { data } });
  };

  const handleDeploy = () => {
    // Implement your deploy logic here
  };

  return (
    <div>
      <Navar />
      <div className="container">
        <h1>API Response</h1>
        <div className='row'>
          <div className="card">
            <img
              src="path/to/your/diagram/image.jpg"
              alt="Diagram"
              className="card-img-top"
            />
            <div className="card-body">
              <button className="btn btn-primary mr-2" onClick={handleDeploy}>
                Deploy
              </button>
              <button className="btn btn-secondary" onClick={handleGoBack}>
                Go Back
              </button>
            </div>
          </div>
        </div>

        <div className="row">

          <div className="col-md-4">
            <div className="card mb-3">
              <div className="card-header">Price</div>
              <div className="card-body">
                {/* Display your price information here */}
              </div>
            </div>
            </div>
          <div className="col-md-4">
          
            <div className="card mb-3">
              <div className="card-header">Description</div>
              <div className="card-body">
                {/* Display your description information here */}
              </div>
            </div>
            </div>
          <div className="col-md-4">
          
            <div className="card mb-3">
              <div className="card-header">Services</div>
              <div className="card-body">
                {/* Display your services information here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Response;
