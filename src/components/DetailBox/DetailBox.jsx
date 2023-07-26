import React from 'react';
import './DetailBox.css';

function DetailBox({ property }) {
  return (
    <div className="info-container">
      {/* Property Address */}
      <div className="info-top">
        <h2>
          {property?.address.street}, {property?.address.city}
          <br />
          {property?.address.postcode}
        </h2>
      </div>

      {/* Property Details */}
      <div className="info-bottom">
        {/* Row 1 */}
        <div className="info-row">
          <div className="small-box">
            <p>Bedrooms</p>
            <h2>{property?.bedroom_count}</h2>
          </div>
          <div className="small-box">
            <p>Bathrooms</p>
            <h2>{property?.bathroom_count}</h2>
          </div>
          <div className="small-box">
            <p>Property Type</p>
            <h2>{property?.property_type}</h2>
          </div>
        </div>

        {/* Row 2 */}
        <div className="info-row">
          <div className="small-box">
            <p>Price</p>
            <h2>{property?.rent}</h2>
          </div>
          <div className="small-box">
            <p>Furnished type</p>
            <h2>{property?.furnished}</h2>
          </div>
          <div className="small-box">
            <p>Available from</p>
            <h2>{property?.availability}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailBox;
