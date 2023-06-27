// AccessKeyTextarea.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AccessKeyTextarea = ({ question, name, placeholder, onChange }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    onChange(name, event.target.value);
  };

  return (
    <div>
      <h5 className="card-title question">{question}</h5>
      <textarea
        className="form-control mb-3"
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

AccessKeyTextarea.propTypes = {
  question: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default AccessKeyTextarea;
