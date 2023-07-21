import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import HomeSearch from '../../components/HomeSearch/HomeSearch';
import './CityDetailsPage.css'
import PropertyAvailable from '../../components/PropertyAvailable/PropertyAvailable';

function CityDetailsPage() {
  const baseUrl = 'https://unilife-server.herokuapp.com/properties/city/';

  const { cityid, bedcount } = useParams();

  const [beds, setBeds] = useState(1);
  const [type, setType] = useState('');
  const [baths, setBaths] = useState(1);
  const [maxPrice, setMaxPrice] = useState();
  const [properties, setProperties] = useState([]);
  const [numProperties, setNumProperties] = useState(0);
  const [city, setCity] = useState();

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

    axios.get(`https://unilife-server.herokuapp.com/cities/${cityid}`)
      .then((res) => {
        setCity(res.data.data[0]);
      })
      .catch((err) => console.log(err));
  }, [cityid, bedcount, beds, baths, type, maxPrice]);

  return (
    <div className='city-deatils'>
      <div className="cityDeatils-banner">
      <Banner
        headline={"Search Accommodations"}
        subhead={"Whatever you're after, we can help you find the right student accommodation for you."}
      />
      </div>
      <div className="cityDeatils-homeSearch">
      <HomeSearch setBeds={setBeds} setBaths={setBaths} setMaxPrice={setMaxPrice} setType={setType} />
      </div>
      <h2>{numProperties} homes in {properties[0]?.address?.city}</h2>

      <div className="properties">
        {properties.map((item) => <PropertyAvailable key={item.id} data={item} />)}
      </div>

      <div className="description-box">
        <div className="description-text">
          <p>{city?.universities}</p>
          <p>{city?.student_life}</p>
        </div>
        <img src='src/assets/students.png' alt="student" className="description-img" />
      </div>
    </div>
  )
}

export default CityDetailsPage