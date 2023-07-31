import React, { useState } from 'react';
import './ImageBox.css';

function ImageBox({ pics }) {
  const [selectedImage, setSelectedImage] = useState(pics[0]);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  if (!pics || pics.length < 4) {
    // Handle cases where pics is not provided or has fewer than four elements.
    // You can return a placeholder image or any other appropriate UI.
    return null;
  }

  return (
    <div className="image-container">
      <img src={selectedImage} className="image-top" />
      <div className="image-bottom">
        {pics.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Image ${index + 1}`}
            onClick={() => handleImageClick(imageUrl)}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageBox;
