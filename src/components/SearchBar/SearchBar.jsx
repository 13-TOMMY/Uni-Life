import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';

function SearchBar({ cities }) {
  const [cityname, setCityname] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    const match = cities.filter((item) => cityname === item.name);
    navigate(`/citydetails/${match[0]._id}`);
  };

  return (
    <div className='searchbar-row'>
      <div className="search-container">
        <select name="cities" onChange={(e) => setCityname(e.target.value)}>
          <option value="">Search by city</option>
          {cities.map((item) => (
            <option value={item?.name} key={item?._id}>
              {item?.name}
            </option>
          ))}
        </select>
        <button onClick={handleSearch} disabled={!cityname} className='searchBar-btn'> 
          Find Homes
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
