// QuestionTextarea.jsx
import React, { useState } from 'react';

const QuestionTextarea = ({ question, name, placeholder, onChange }) => {
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

export default QuestionTextarea;
