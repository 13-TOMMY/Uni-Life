import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';

function SearchBar({cities}) {
  const [cityname, setCityname] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    console.log('Button clicked');
    console.log('City name:', cityname);

    // Find the id that matches cityname
    const match = cities.filter((item) => cityname === item.name);
    console.log('Match:', match);
    console.log('ID:', match[0]._id);

    // Route to city details page with the matched city ID
    navigate(`/citydetails/${match[0]._id}`);
  };

  return (
    <div className="search-container">
      <select name="cities" onChange={(e) => setCityname(e.target.value)}>
        <option>Search by city</option>
        {cities.map((item) => (
          <option value={item?.name} key={item?._id}>
            {item?.name}
          </option>
        ))}
      </select>
      <button onClick={handleSearch}>Find Homes</button>
    </div>
  );
}

export default SearchBar;
