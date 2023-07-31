import React from 'react';
import './SearchCompare.css';

import homeImage from '../../../public/home-hp.png';
import favHeartImage from '../../../public/favHeart.svg';
import personImage from '../../../public/person.png';
import { Link } from 'react-router-dom';

function SearchCompare() {
  return (
    <div className='searchCompare'>
      <div className="searchCompare-container">
        <div className="sC-left">
          <div className="text-container">
            <img src={homeImage} alt="Best selection" />
            <div className="text-right">
              <h3>Best selection</h3>
              <p>Best selection of student accommodations. Never been easier to find a home that's right for you.</p>
            </div>
          </div>
          <div className="text-container">
            <img src={favHeartImage} alt="Your favorite" />
            <div className="text-right">
              <h3>Your favorite</h3>
              <p>Shortlist your favourite properties and send enquiries in one click.</p>
            </div>
          </div>
          <button className="searchCompare-btn"><Link to={`/SeeAllCities`}>Search & Compare</Link></button>
        </div>
        <div className="sC-right">
          <img src={personImage} alt="person" />
        </div>
      </div>
    </div>
  );
}

export default SearchCompare;
