import React from 'react';
import './DetailBox.css';

function DetailBox({ property }) {
  return (
    <div className="info-container">
      <div className="info-top">
        <h2>{property?.address.street}, {property?.address.city}<br />{property?.address.postcode}</h2>
      </div>
      <div className="info-bottom">
        <div className="info-row">
          <div className="small-box">
            <small>Bedrooms</small>
            <h2>{property?.bedroom_count}</h2>
          </div>
          <div className="small-box">
            <small>Bathrooms</small>
            <h2>{property?.bathroom_count}</h2>
          </div>
          <div className="small-box">
            <small>Property Type</small>
            <h2>{property?.property_type}</h2>
          </div>
        </div>

        <div className="info-row">
          <div className="small-box">
            <small>Price</small>
            <h2>{property?.rent}</h2>
          </div>
          <div className="small-box">
            <small>Furnished type</small>
            <h2>{property?.furnished}</h2>
          </div>
          <div className="small-box">
            <small>Available from</small>
            <h2>{property?.availability}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailBox;
