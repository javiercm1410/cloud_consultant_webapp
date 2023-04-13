import React from 'react';

const Base64Image = ({ base64Image, alt = 'Base64 Encoded Image' }) => {
  // If your base64_image string doesn't include the data URI scheme, add it
  const dataURI = `data:image/jpeg;base64,${base64Image}`;

  return (
    <img src={dataURI} alt={alt} />
  );
};

export default Base64Image;
