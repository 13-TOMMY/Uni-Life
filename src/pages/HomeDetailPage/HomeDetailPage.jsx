import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { useParams } from 'react-router-dom';
import { FavContext } from '../../contexts/FavContext';
import ImageBox from '../../components/ImageBox/ImageBox';
import DetailBox from '../../components/DetailBox/DetailBox';
import BedroomBox from '../../components/BedroomBox/BedroomBox';
import './HomeDetailPage.css';

function HomeDetailPage() {
  const { favorites, setFavorites } = useContext(FavContext);
  const [showModal, setShowModal] = useState(false);

  const { homeid } = useParams();

  const [property, setProperty] = useState();
  const [propertyImages, setPropertyImages] = useState([]);

  // Missing functions for the modal
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const addToFavorites = () => {
    // Add property object to favorites
    setFavorites([...favorites, property]);
  };

  useEffect(() => {
    axios
      .get(`https://unilife-server.herokuapp.com/properties/${homeid}`)
      .then((res) => {
        setProperty(res.data);
        setPropertyImages(res.data?.images);
      })
      .catch((err) => console.log(err));
  }, [homeid]);

  return (
    <div className="home-grid">
      <ImageBox pics={propertyImages} className="photo-box" />

      <div className="upper-right">
        <DetailBox className="info-box" property={property} />
        <div className="btn-container">
          <button className="short-btn" onClick={addToFavorites}>
            Shortlist
          </button>
          <button className="view-btn" onClick={openModal}>
            Book Viewing
          </button>
        </div>
      </div>

      <div>
        <h2>Description</h2>
        <p>{property?.property_description}</p>
      </div>

      <BedroomBox prices={property?.bedroom_prices} />

      <div>
        <h2>Key Features</h2>
        <ul style={{ listStyleImage: `url('${checkmark}')` }}>
          {property?.key_features.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        className="modal-container"
        overlayClassName="modal-background"
      >
        {/* Modal content goes here */}
        <div className="modal-top">
          <h1>Book A Viewing</h1>
          <h3>
            {address?.postcode} {address?.street}
          </h3>
          <h3>{address?.city}</h3>
        </div>
        <form className="modal-form">
          {/* Form fields go here */}
          <div className="form-half">
            <div className="input-wrapper">
              <label>Name </label>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="input-wrapper">
              <label>Email </label>
              <input type="text" placeholder="Enter your email address" />
            </div>
            <div className="input-wrapper">
              <label>Phone Number</label>
              <input type="text" placeholder="Enter your phone number" />
            </div>
          </div>

          <div className="form-half">
            <div className="input-wrapper">
              <label>Message</label>
              <textarea
                rows="10"
                cols="40"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button className="modal-btn" onClick={closeModal}>
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default HomeDetailPage;
