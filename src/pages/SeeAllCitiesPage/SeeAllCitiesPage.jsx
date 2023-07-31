import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Banner from '../../components/Banner/Banner';
import './SeeAllCitiesPage.css';

function SeeAllCitiesPage() {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();

  useEffect(() => {
    axios.get("https://unilife-server.herokuapp.com/cities?limit=24")
      .then(res => {
        setCities(res.data.response);
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='SeeAllCities'>
      <Banner
        headline={"Student Accommodation"}
        subhead={"UniLife has student accommodation available across the U. Whatever you're after, we can help you find the right student accommodation for you."}
      />
      <div className='allcities-container'>
        <h2>Search by City</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="allcities-buttons">
            {cities.map(city => (
              <button key={city._id} onClick={() => navigate(`/citydetails/${city._id}`)}>
                {city.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SeeAllCitiesPage;
