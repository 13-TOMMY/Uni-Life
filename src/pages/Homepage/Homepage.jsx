import React, {useState} from 'react'
import axios from 'axios'
import Banner from '../../components/Banner/Banner'
import SearchBar from '../../components/SearchBar/SearchBar'
import './Homepage.css'

function Homepage() {
  const [cities, setCities] = React.useState([])

  React.useEffect(() => {
    //call api to get cities info
    console.log("homepage loaded")

    axios.get("https://unilife-server.herokuapp.com/cities?limit=9")
    .then(res =>{
      console.log(res.data.response);
      setCities(res.data.response);
    })
    .catch(err => console.log(err))
    
  }, [])
  return (
    <div>
      <Banner headline={"Find student homes with bills included"}
             subhead={"A simple and faster way to search for student accomodations"} 
        />
      <SearchBar cities={cities}  />
    </div>
  )
}

export default Homepage