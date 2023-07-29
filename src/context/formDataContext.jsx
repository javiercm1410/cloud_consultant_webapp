import React, { createContext, useState } from 'react';

// Create the context
export const FormDataContext = createContext();

// Create a provider component to provide the dog's info
export const FormDataProvider = ({ children }) => {
  // Define the dog's info object
  const [formData, setFormData] = useState({
    scale: false,
   // public_access: false,
   // vpn_access: false,
    // environment_config: false,
    cloud_provider: 'No',
   // budget: '',
    workload: '',
    deploy_command_front: '',
    deploy_command_back: '',
    architecture: '',
    container_repository: '',
    managed_database: '',
    database_name: '',
    database_password: '',
    access_key: '',
    backend_port: '',
    container_port: 0,
    database_version: 0,
    // language_framework: '',
    // build_tools: '',
    // environment_config_details: ''
  });

  // Pass the dog's info object to the provider value prop
  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};
