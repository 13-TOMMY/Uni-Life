import React from 'react';
import './CompareHp.css';

import searchImage from '../../../public/search.svg';
import compareImage from '../../../public/compare.svg';
import billsImage from '../../../public/bills.png';

function CompareHp() {
  return (
    <div className="compare-container">
      <h1>Compare all-inclusive student homes</h1>
      <div className="compare-boxes">
        <div className="compare-box">
          <img src={searchImage} alt="Search" />
          <h3>Search</h3>
          <p>Find your dream home in the perfect area near your university.</p>
        </div>
        <div className="compare-box">
          <img src={compareImage} alt="Compare" />
          <h3>Compare</h3>
          <p>Compare student accommodations to find the right home for you.</p>
        </div>
        <div className="compare-box">
          <img src={billsImage} alt="Bills Included" />
          <h3>Bills Included</h3>
          <p>Bills are included in all rent prices. No hidden fees.</p>
        </div>
      </div>
    </div>
  );
}

export default CompareHp;
