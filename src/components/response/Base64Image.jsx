import React from 'react';

const Base64Image = ({ base64Image, alt = 'Base64 Encoded Image' }) => {
  const isDataURI = base64Image.startsWith('data:image');
  const dataURI = isDataURI ? base64Image : `data:image/jpeg;base64,${base64Image}`;

  return (
    <img src={dataURI} alt={alt} style={{ height: '500px', width: 'auto' }}/>
  );
};

export default Base64Image;
