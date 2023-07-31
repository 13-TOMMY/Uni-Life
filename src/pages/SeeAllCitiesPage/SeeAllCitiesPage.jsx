import React, {useEffect, useState} from 'react'
import Banner from '../../components/Banner/Banner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SeeAllCitiesPage.css'

function SeeAllCitiesPage() {
  let navigate = useNavigate(); 
  const [cities, setCities] = useState([]);

  useEffect(() => {
    axios.get("https://unilife-server.herokuapp.com/cities?limit=24")
    .then(res =>{
      setCities(res.data.response);
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div className='SeeAllCities'>
      <Banner headline={"Student Accommodation"}
             subhead={"UniLife have student accommodation available across the U.  Whatever you're after, we can help you find the right student accommodation for you."} />
      <div className='allcities-container'>
        <h2>Search by City</h2>
        <div className="allcities-buttons">
                {cities.map(city=>
                 <button key={city._id}
                  onClick={()=>navigate(`/citydetails/${city._id}`)}>{city.name}</button>)}
             </div>
      </div>
    </div>
  )
}

export default SeeAllCitiesPage