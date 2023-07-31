import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import HomeSearch from '../../components/HomeSearch/HomeSearch';
import PropertyAvailable from '../../components/PropertyAvailable/PropertyAvailable';
import Students from '../../../public/students.png'
import './CityDetailsPage.css'

function CityDetailsPage() {
  const { cityid, bedcount } = useParams();

  const [beds, setBeds] = useState(1);
  const [type, setType] = useState('');
  const [baths, setBaths] = useState(1);
  const [maxPrice, setMaxPrice] = useState(undefined);
  const [properties, setProperties] = useState([]);
  const [numProperties, setNumProperties] = useState(0);
  const [city, setCity] = useState({});

  const fetchData = (query) => {
    axios
      .post(`https://unilife-server.herokuapp.com/properties/filter`, { query })
      .then((res) => {
        setProperties(res.data.response);
        setNumProperties(res.data.count);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const query = {
      city_id: cityid,
      bedroom_count: bedcount || beds,
      bathroom_count: baths,
      property_type: type,
      rent: maxPrice,
    };
    fetchData(query);

    axios
      .get(`https://unilife-server.herokuapp.com/cities/${cityid}`)
      .then((res) => {
        setCity(res.data.data[0]);
      })
      .catch((err) => console.log(err));
  }, [cityid, bedcount, beds, baths, type, maxPrice]);

  return (
    <div className='city-deatils-container'>
      <div className="cityDeatils-banner">
      <Banner
        headline={"Search Accommodations"}
        subhead={"Whatever you're after, we can help you find the right student accommodation for you."}
      />
      </div>
      <div className="cityDeatils-homeSearch">
      <HomeSearch setBeds={setBeds} setBaths={setBaths} setMaxPrice={setMaxPrice} setType={setType} />
      </div>
      <div className='properties-container'>
      <h2 className='h2-city-container'>{numProperties} homes in {properties[0]?.address?.city}</h2>
      <div className="properties">
        {properties.map((item) => (
          <PropertyAvailable key={item._id} data={item} />
        ))}
      </div>
      <div className="description-box">
        <div className="description-text">
          <h3>Being a student in {city?.name}</h3>
          <p>{city?.student_life}</p>
          <p>{city?.universities}</p>
        </div>
        <img src={Students} className="description-img" alt="student image"/>
      </div>
      </div>
    </div>
  )
}

export default CityDetailsPage