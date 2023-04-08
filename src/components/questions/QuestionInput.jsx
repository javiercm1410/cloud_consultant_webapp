import React, { useState } from 'react';

const QuestionInput = ({ question, name, type, placeholder, onChange }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    console.log(event.target.value);
    setValue(event.target.value);
    onChange(name, event.target.value); // Call the onChange function prop from the parent component
  };

  return (
    <div>
      <h5 className="card-title question">{question}</h5>
      <input
        className="form-control mb-3"
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
      />
    </div>
  );
};

export default QuestionInput;
