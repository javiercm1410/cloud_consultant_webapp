// QuestionnaireForm.jsx
import React, { useState } from 'react';
import QuestionSelect from './QuestionSelect';
import QuestionInput from './QuestionInput';
import QuestionTextarea from './QuestionTextarea';
import QuestionCheckbox from './QuestionCheckbox';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const QuestionnaireForm = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    scale: false,
    public_access: false,
    vpn_access: false,
    container_based: false,
    environment_config: false,
  });

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };  
  
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:3000/api/data', formData);
      // const response = await fetch('http://localhost:3000/api/data', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });

      if (response.status == 200){
        const Jresp = response.data;
        console.log('Form submitted successfully', Jresp);
        if (formData.cloud_provider === "No") {
          // Redirect to the cloudchoice page and pass the response data
          navigate('/cloudchoice', { state: { formData } });
        } else {
          // Redirect to the response page and pass the response data
          navigate('/response', { state: { Jresp, formData } });
        }

      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  

  return (
    <section className="container-fluid bg-main">
      <form id="questionnaire-form" onSubmit={handleSubmit}>
        <div className="row h-100 justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-lg-6">
            <div className="card questionnaire">
              <div className="card-body">
                <QuestionSelect
                  question="Q1. What's your favorite cloud provider?"
                  name="cloud_provider"
                  options={['Azure', 'AWS', 'GCP', 'No']}
                  onChange={handleInputChange}
                />
                <QuestionInput
                  question="Q2. What's your budget?"
                  name="budget"
                  type="number"
                  placeholder="Enter your budget"
                  onChange={handleInputChange}
                />
                  <QuestionSelect
                    question="Q3. What's the expected workload for your application?"
                    name="workload"
                    options={['High', 'Medium', 'Low']}
                    onChange={handleInputChange}
                  />
                  <QuestionSelect
                    question="Q4. What type of architecture are you looking for?"
                    name="architecture"
                    options={['Three-tier', 'Microservices', 'Serverless', 'Bucket']}
                    onChange={handleInputChange}
                  />
                  <QuestionCheckbox
                    question="Q5. Do you require auto-scaling for your application?"
                    name="scale"
                    onChange={handleInputChange}
                  />
                  <QuestionCheckbox
                    question="Q6. Will your application have public access?"
                    name="public_access"
                    onChange={handleInputChange}
                  />
                  <QuestionCheckbox
                    question="Q7. If your application doesn't have public access, do you require a VPN for secure access?"
                    name="vpn_access"
                    onChange={handleInputChange}
                  />
                  <QuestionCheckbox
                    question="Q8. Do you prefer a container-based architecture?"
                    name="container_based"
                    onChange={handleInputChange}
                  />
                  <QuestionSelect
                    question="Q9. Do you need a managed database service? If yes, what type of database?"
                    name="managed_database"
                    options={['NoSQL', 'SQL', 'No']}
                    onChange={handleInputChange}
                  />
                  <QuestionInput
                    question="Q10. What programming language and framework is your application built with?"
                    name="language_framework"
                    type="text"
                    placeholder="Enter language and framework"
                    onChange={handleInputChange}
                  />
                  <QuestionInput
                    question="Q11. Are you using any specific build tools or package managers for your application? If yes, which ones?"
                    name="build_tools"
                    type="text"
                    placeholder="Enter build tools or package managers"
                    onChange={handleInputChange}
                  />
                  <QuestionCheckbox
                    question="Q12. Does your application require any environment-specific configurations or secrets during deployment?"
                    name="environment_config"
                    onChange={handleInputChange}
                  />
                  <QuestionTextarea
                    question="Provide environment-specific configurations or secrets details"
                    name="environment_config_details"
                    placeholder="Provide environment-specific configurations or secrets details"
                    onChange={handleInputChange}
                  />
                  <div className="mb-3 d-flex justify-content-center p-bt">
                    <button type="submit" className="btn btn-primary btn-outline-light bttn-submit">
                      Done
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
  );
}

export default QuestionnaireForm;
