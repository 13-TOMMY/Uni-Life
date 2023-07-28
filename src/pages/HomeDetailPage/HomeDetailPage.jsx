import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { useParams } from 'react-router-dom';
import { FavContext } from '../../contexts/FavContext';
import ImageBox from '../../components/ImageBox/ImageBox';
import DetailBox from '../../components/DetailBox/DetailBox';
import BedroomBox from '../../components/BedroomBox/BedroomBox';
import { GrCheckmark } from 'react-icons/gr';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import './HomeDetailPage.css';

function HomeDetailPage() {
  const { favorites, addToFavorites } = useContext(FavContext);
  const [showModal, setShowModal] = useState(false);
  const { homeid } = useParams();
  const [property, setProperty] = useState();
  const [propertyImages, setPropertyImages] = useState([]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
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
    <div className="home-detail-page">
      <div className="top-hdp">
        <div className="left-top-hdp">
          <ImageBox pics={propertyImages} className="photo-box" />
        </div>

        <div className="right-top-hdp">
          <DetailBox property={property} />

          <div className="btn-container">
            <button className="shortlist-btn" onClick={() => addToFavorites(property)}>
              {favorites.some((fav) => fav._id === property?._id) ? (
                <AiFillHeart className="shortlist-heart-filled" />
              ) : (
                <AiOutlineHeart className="shortlist-heart" />
              )}
              Shortlist
            </button>
            <button className="view-btn" onClick={openModal}>
              Book Viewing
            </button>
          </div>
        </div>
      </div>

      <div className="middle-hdp">
        <div className="left-middle-hdp">
          <div className="desc-middle-hdp">
            <h2>Description</h2>
            <p>{property?.property_description}</p>
          </div>
        </div>
        <div className="left-middle-hdp">
          <BedroomBox prices={property?.bedroom_prices} />
        </div>
      </div>
      <div className="bottom-hdp">
        <h2>Key Features</h2>
        <ul style={{ listStyleType: 'none' }}>
          {property?.key_features.map((item) => (
            <li key={item}>
              <div style={{ display: 'flex', alignItems: 'center', padding: '10px 0 10px 0' }}>
                <GrCheckmark style={{ marginRight: '10px', color: 'blue' }} />
                {item}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Modal for booking a viewing */}
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        className="modal-container"
        overlayClassName="modal-background"
      >
        <div className="modal-top">
          {/* Modal header */}
          <h1>Book A Viewing</h1>
          <h3>
            {property?.address?.postcode} {property?.address?.street}
          </h3>
          <h3>{property?.address?.city}</h3>
        </div>

        <form className="modal-form">
          {/* Form inputs */}
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
              <textarea rows="10" cols="40" placeholder="Enter your message"></textarea>
            </div>
            {/* Submit button */}
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
