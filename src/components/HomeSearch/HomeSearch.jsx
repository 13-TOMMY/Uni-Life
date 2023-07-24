import React from 'react';
import './HomeSearch.css';

function HomeSearch({ setBeds, setType, setBaths, setMaxPrice }) {
  const bedroomOptions = ['', '1', '2', '3', '4', '5', '6'];
  const bathroomOptions = ['', '1', '2', '3', '4'];
  const priceOptions = ['','500', '750', '1000', '1500', '2000', '2500', '3000'];
  const homeTypeOptions = ['', 'Apartment', 'Semi-Detached', 'Detached'];

  return (
    <div className="city-search-container">
      <div className="search-box">
      <h3>Min Bedroom</h3>
        <select onChange={(e) => setBeds(e.target.value)}>
          {bedroomOptions.map((option) => (
            <option key={`bedroom_${option}`} value={option}>
              {option || 'Any bedroom'}
            </option>
          ))}
        </select>
      </div>
      <div className="search-box">
      <h3>Min Bathroom</h3>
        <select onChange={(e) => setBaths(e.target.value)}>
          {bathroomOptions.map((option) => (
            <option key={`bathroom_${option}`} value={option}>
              {option || 'Any bathroom'}
            </option>
          ))}
        </select>
      </div>
      <div className="search-box">
      <h3>Max Price</h3>
        <select onChange={(e) => setMaxPrice(e.target.value)}>
          {priceOptions.map((option) => (
            <option key={`price_${option}`} value={option}>
              {option ? `£${option}` : 'Any price'}
            </option>
          ))}
        </select>
      </div>
      <div className="search-box">
      <h3>Home type</h3>
        <select onChange={(e) => setType(e.target.value)}>
          {homeTypeOptions.map((option) => (
            <option key={`type_${option}`} value={option}>
              {option || 'Any type'}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default HomeSearch;
