// QuestionCheckbox.jsx
import React, { useState } from 'react';

const QuestionCheckbox = ({ question, name, onChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxClick = (event) => {
    console.log(event.target.checked);
    setIsChecked(event.target.checked);
    onChange(name, event.target.checked);
  };

  return (
    <div>
      <h5 className="card-title question">{question}</h5>
      <div className="mb-3 d-flex justify-content-center">
        <input
          type="checkbox"
          className="btn-check"
          name={name}
          id={name}
          autoComplete="off"
          checked={isChecked}
          onChange={handleCheckboxClick}
        />
        <label
          className="btn btn-outline-light w-50 option"
          htmlFor={name}
        >
          {isChecked ? 'True' : 'False'}
        </label>
      </div>
    </div>
  );
};

export default QuestionCheckbox;
