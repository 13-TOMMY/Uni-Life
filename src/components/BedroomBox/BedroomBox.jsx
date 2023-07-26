import React from 'react';
import './BedroomBox.css';

function BedroomBox({ prices }) {
  return (
    <div className="bedrooms-box">
      <h2>Bedroom Prices</h2>
      <div className='bed-box'>
        {prices &&
          Object.values(prices).map((item, index) => (
            <div className="bed-prices" key={index}>
              <p>{`Bedroom ${index + 1}`}</p>
              <p>{`£ ${item} per week`}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default BedroomBox;
