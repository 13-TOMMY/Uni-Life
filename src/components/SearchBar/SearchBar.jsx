import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';

function SearchBar({ cities }) {
  const [selectedCity, setSelectedCity] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    const city = cities.find((item) => selectedCity === item.name);
    if (city) {
      navigate(`/citydetails/${city?._id}`);
    }
  };

  return (
    <div className='searchbar-row'>
      <div className="search-container">
        <select name="cities" onChange={(e) => setSelectedCity(e.target.value)}>
          <option value="">Search by city</option>
          {cities.map((item) => (
            <option value={item?.name} key={item?._id}>
              {item?.name}
            </option>
          ))}
        </select>
        <button onClick={handleSearch} disabled={!selectedCity} className='searchBar-btn'> 
          Find Homes
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
