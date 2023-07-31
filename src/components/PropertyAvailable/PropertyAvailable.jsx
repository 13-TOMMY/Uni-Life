import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineBed, MdOutlineBathtub, MdOutlineHome, MdOutlineLocationOn } from 'react-icons/md';
import { BsCurrencyPound } from 'react-icons/bs';
import './PropertyAvailable.css';

function PropertyAvailable({ data }) {
  const { _id, images, rent, bedroom_count, bathroom_count, property_type, furnished, address } = data;

  return (
    <Link className="property-container" to={`/homedetails/${_id}`}>
      <img src={images[0]} className="property-img" />
      <div className="info-box-pa">
        <div className="info-box-left">
          <h3>
            <span><BsCurrencyPound /></span>
            {rent}
          </h3>
          <p className='p-info-box'>pppw including bills</p>
        </div>
        <div className="info-box-right">
          <p><span><MdOutlineBed /></span>{bedroom_count}</p>
          <p><span><MdOutlineBathtub /></span>{bathroom_count}</p>
        </div>
      </div>
      <div className="prop-info">
        <div className="top-box">
          <p>{property_type}</p>
          <p>{furnished}</p>
        </div>
        <p>
          <span><MdOutlineLocationOn /></span>
          {`${address.street} ${address.city} ${address.postcode}`}
        </p>
      </div>
      <div className="view-box">
          <span><MdOutlineHome /></span>
        <p>View Home</p>
      </div>
    </Link>
  );
}

export default PropertyAvailable;