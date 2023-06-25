// QuestionnaireForm.jsx
import React, { useState, useContext } from 'react';
import QuestionSelect from './QuestionSelect';
import QuestionInput from './QuestionInput';
// import QuestionTextarea from './QuestionTextarea';
import LoadingWheel from '../loading/LoadingWheel';
import QuestionCheckbox from './QuestionCheckbox';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FormDataContext } from '../../context/formDataContext';

const QuestionnaireForm = () => {

  const {formData, setFormData} = useContext(FormDataContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isContainerBased, setIsContainerBased] = useState(false);

  const navigate = useNavigate();

  // const [formData, setFormData] = useState({
  //   scale: false,
  //   public_access: false,
  //   vpn_access: false,
  //   container_based: false,
  //   environment_config: false,
  // });

  const handleInputChange = (name, value) => {
    // Check if the changed field is 'architecture' and set the new state variable
    if (name === 'architecture' && value === 'Container-based') {
      setIsContainerBased(true);
    } else if (name === 'architecture') {
      setIsContainerBased(false);
    }
    setFormData({ ...formData, [name]: value });
  };  
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true); // Set submitting state to true when form is submitted
  
    try {
      const response = await axios.post('http://localhost:3000/api/data', formData);

      if (response.status == 200){
        const Jresp = response.data;
        console.log('Form submitted successfully', formData, Jresp);
        if (formData.cloud_provider === "No") {
          // Redirect to the cloudchoice page and pass the response data
          navigate('/cloudchoice', { state: { Jresp, formData } });
        } else {
          // Redirect to the response page and pass the response data
          navigate('/response', { state: { Jresp, formData } });
        }

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
    <section className="container-fluid bg-main">
      <form id="questionnaire-form" onSubmit={handleSubmit}>
        <div className="row h-100 justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-lg-6">
            <div className="card questionnaire">
              <div className="card-body">
                <QuestionSelect
                  question="What's your favorite cloud provider?"
                  name="cloud_provider"
                  options={['Azure', 'AWS', 'GCP', 'No']}
                  onChange={handleInputChange}
                />
                {/* <tionInput
                  question="What's your budget?"
                  name="budget"
                  type="number"
                  placeholder="Enter your budget"
                  onChange={handleInputChange}
                /> */}
                  <QuestionSelect
                    question="What's the expected workload for your application?"
                    name="workload"
                    options={['High (Aprox. 20000 request per hour)', 'Medium (Aprox. 2000 request per hour)', 'Low (Aprox. 200 request per hour)']}
                    onChange={handleInputChange}
                  />
                  <QuestionSelect
                    question="What type of architecture are you looking for?"
                    name="architecture"
                    // options={['classic-three-tier', 'Container-based', 'Serverless', 'Bucket']}
                    options={['Classic-three-tier', 'Container-based']}
                    onChange={handleInputChange}
                  />
                  {isContainerBased ? (
                    <QuestionInput
                      question="What is your image?"
                      name="container_repository"
                      type="text"
                      placeholder="Enter your container repository"
                      onChange={handleInputChange}
                    />
                  ) : (
                    <>
                      <QuestionInput
                        question="How do you run you app (including the git repo)?"
                        name="deploy_command"
                        type="text"
                        placeholder="Enter the commands"
                        onChange={handleInputChange}
                      />
                      <QuestionCheckbox
                        question="Do you require auto-scaling for your application?"
                        name="scale"
                        onChange={handleInputChange}
                      />
                    </>
                  )}

                  {/* <QuestionCheckbox
                    question="Will your application have public access?"
                    name="public_access"
                    onChange={handleInputChange}
                  />
                  <QuestionCheckbox
                    question="If your application doesn't have public access, do you require a VPN for secure access?"
                    name="vpn_access"
                    onChange={handleInputChange}
                  /> */}
                  <QuestionSelect
                    question="Do you need a managed database service? If yes, what type of database?"
                    name="managed_database"
                    options={['MySQL', 'MongoDB', 'No']}
                    onChange={handleInputChange}
                  />
                  {/* <QuestionInput
                    question="What programming language and framework is your application built with?"
                    name="language_framework"
                    type="text"
                    placeholder="Enter language and framework"
                    onChange={handleInputChange}
                  />
                  <QuestionInput
                    question="Are you using any specific build tools or package managers for your application? If yes, which ones?"
                    name="build_tools"
                    type="text"
                    placeholder="Enter build tools or package managers"
                    onChange={handleInputChange}
                  /> */}
                  {/* <QuestionCheckbox
                    question="Does your application require any environment-specific configurations or secrets during deployment?"
                    name="environment_config"
                    onChange={handleInputChange}
                  />
                  <QuestionTextarea
                    question="Provide environment-specific configurations or secrets details"
                    name="environment_config_details"
                    placeholder="Provide environment-specific configurations or secrets details"
                    onChange={handleInputChange}
                  /> */}
                  <div className="mb-3 d-flex justify-content-center p-bt">
                    {isSubmitting ? (  // Add this block
                      <LoadingWheel />
                    ) : (
                      <div className="mb-3 d-flex justify-content-center p-bt">
                        <button type="submit" className="btn btn-primary btn-outline-light bttn-submit">
                          Done
                        </button>
                      </div>
                    )}
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
