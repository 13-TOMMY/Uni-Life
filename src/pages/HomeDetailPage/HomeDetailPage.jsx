import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import { Modal } from 'react-modal';
import { useParams } from 'react-router-dom'
import { FavContext } from '../../contexts/FavContext';
import ImageBox from '../../components/ImageBox/ImageBox';
import DetailBox from '../../components/DetailBox/DetailBox';
import './HomeDetailPage.css'

function HomeDetailPage() {
  const { favorites, setFavorites } = useContext(FavContext);
  const [showModal, setShowModal] = useState(false);

  const {homeid} = useParams();

  const [property, setProperty] = React.useState()
  const [propertyImages, setPropertyImages] = React.useState([])

  const addToFavorites = () =>{
    //add property object to favorites
    setFavorites([...favorites, property])
  }

  useEffect(() => {
    axios.get(`https://unilife-server.herokuapp.com/properties/${homeid}`)
    .then(res => {
      setProperty(res.data)
      setPropertyImages(res.data?.images)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="home-grid">
      <ImageBox pics={propertyImages} className="photo-box" />

      <div className="upper-right">
        <DetailBox className="info-box" property={property}/>
        <div className="btn-container">
          <button className="short-btn" onClick={addToFavorites}>Shortlist</button>
          <button className="view-btn" onClick={openModal}>Book Viewing</button>       
        
        </div>
      </div>

      <div>
        <h2>Description</h2> 
        <p>{property?.property_description}</p> 
      </div>

      <Bedrooms prices={property?.bedroom_prices}/>

      <div>
        <h2>Key Features</h2>
        <ul style=
        {{ listStyleImage: `url('${checkmark}')`}}>

        {
          property?.key_features.map(item=><li>{item}</li>)
        }
        </ul>
      </div>
      {
            modalIsOpen?
            <BookViewingModal address={property.address} closeModal={closeModal}/>
            :
            null

          }
    </div>
  )
}

export default HomeDetailPage