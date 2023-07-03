import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const Tooltip = ({ content }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <span 
      className="tooltip-container"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <FontAwesomeIcon icon={faInfoCircle} style={{ color: 'white' }}/>
      {showTooltip && 
        <div className="tooltip-content" dangerouslySetInnerHTML={{ __html: content }}>
          
        </div>
      }
    </span>
  );
};

export default Tooltip;
