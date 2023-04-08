// QuestionSelect.jsx
import React, { useState } from 'react';

const QuestionSelect = ({ question, name, options, onChange}) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    console.log(event.target.value);
    setValue(event.target.value);
    onChange(name, event.target.value);
  };

  return (
    <div>
      <h5 className="card-title question">{question}</h5>
      <div className="mb-3">
        <select
          className="form-select"
          name={name}
          id={name}
          value={value}
          onChange={handleChange}
          required
        >
          <option value="">Choose an option</option>
          {options.map((option, index) => (
            <option value={option} key={index}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default QuestionSelect;
