import React from 'react';
import { IoBedOutline, IoWaterOutline } from 'react-icons/io5';
import './DetailBox.css';

function DetailBox({ property }) {
  function convertMonthToDate(month) {
    const monthDigit = new Date(`${month} 1, 2023`).getMonth() + 1;
    const randomDay = Math.floor(Math.random() * 28) + 1;
    const year = 2024;
    const date = `${randomDay.toString().padStart(2, '0')}/${monthDigit.toString().padStart(2, '0')}/${year}`;
    return date;
  }

  return (
    <div className="details-container">
      <div className="details-top">
        <h2>
          {property?.address?.street}, {property?.address?.city}
          <br />
          {property?.address?.postcode}
        </h2>
      </div>
      <div className="details-bottom">
        {/* Row 1 */}
        <div className="details-row">
          <div className="detail-small-box">
            <p>Bedrooms</p>
            <h2 className="bedBath">
              <span>
                <IoBedOutline />
              </span>
              {property?.bedroom_count || 'N/A'}
            </h2>
          </div>
          <div className="detail-small-box">
            <p>Bathrooms</p>
            <h2 className="bedBath">
              <span>
                <IoWaterOutline />
              </span>
              {property?.bathroom_count || 'N/A'}
            </h2>
          </div>
          <div className="detail-small-box">
            <p>Property Type</p>
            <h2>{property?.property_type || 'N/A'}</h2>
          </div>
        </div>
        <div className="details-row">
          <div className="detail-small-box">
            <p>Price</p>
            <h2>£{property?.rent || 'N/A'}</h2>
          </div>
          <div className="detail-small-box">
            <p>Furnished type</p>
            <h2>{property?.furnished || 'N/A'}</h2>
          </div>
          <div className="detail-small-box">
            <p>Available from</p>
            <h2>{convertMonthToDate('November')}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailBox;
