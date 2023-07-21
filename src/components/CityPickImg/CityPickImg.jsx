import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './CityPickImg.css'

function CityPickImg() {
   const [cities, setCities] = useState([]);
   
   useEffect(() => {
      axios.get("https://unilife-server.herokuapp.com/cities?limit=9")
      .then(res => {
         setCities(res.data.response);
      })
      .catch(err => console.log(err))
   }, [])

   return (
      <div>
      <h2 className='cityPick-h2'>Student accommodations in our top cities</h2>
      <div className="city-container">
        {cities.map((city) => (
          <Link to={`/citydetails/${city._id}`} key={city._id}>
            <div
              className="city-card"
              style={{
                backgroundImage: `url("${city.image_url}")`,
              }}
            >
              <div className="city-info">
                <h2>{city.name}</h2>
                <p>{city.property_count} properties</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Link to="/SeeAllCities">
        <button className="see-cities-btn">See All Cities</button>
      </Link>
    </div>
  )
}

export default CityPickImg