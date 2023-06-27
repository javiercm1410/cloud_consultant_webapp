// CredentialsCard.jsx
import React, { useContext } from 'react';
import { FormDataContext } from '../../context/formDataContext';
import AccessKeyTextarea from './AccessKeyTextarea';
// import PropTypes from 'prop-types';

const CredentialsCard = () => {
  const {formData, setFormData} = useContext(FormDataContext);

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };  

  return (
    <div className="card mb-3">
      <div className="card-header">Credentials</div>
      <div className="card-body bg-dark">
        <AccessKeyTextarea
          question="Access Key"
          name="access_key"
          placeholder="User access key"
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default CredentialsCard;
