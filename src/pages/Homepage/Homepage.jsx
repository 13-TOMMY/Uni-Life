import React, {useState} from 'react'
import axios from 'axios'
import Banner from '../../components/Banner/Banner'
import SearchBar from '../../components/SearchBar/SearchBar'
import CityPickImg from '../../components/CityPickImg/CityPickImg'
import CompareHp from '../../components/CompareHp/CompareHp'
import SearchCompare from '../../components/SearchCompare/SearchCompare'
import './Homepage.css'


function Homepage() {
  const [cities, setCities] = React.useState([])

  React.useEffect(() => {
    console.log("homepage loaded")

    axios.get("https://unilife-server.herokuapp.com/cities?limit=9")
    .then(res =>{
      console.log(res.data.response);
      setCities(res.data.response);
    })
    .catch(err => console.log(err))
    
  }, [])
  return (
    <div className='homepage-container'>
      <div className='homepage-banner'>
        <Banner headline={"Find student homes with bills included"}
             subhead={"A simple and faster way to search for student accomodations"} />
      </div>
      <div className='homepage-searchbar'>
        <SearchBar cities={cities}  />
      </div>
      <div className='city-pick-container'>
        <CityPickImg />
      </div>
      <div>
        <CompareHp />
      </div>
      <div>
        <SearchCompare />
      </div>
    </div>
  )
}

export default Homepage