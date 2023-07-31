import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdMailOutline } from 'react-icons/md';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import {MdOutlineLocalPostOffice} from 'react-icons/md';
import { FavContext } from '../../contexts/FavContext';
import Modal from 'react-modal';
import './NavBar.css';

function NavBar() {
  const { favorites, removeFromFavorites, hasFavorites } = useContext(FavContext);
  const [showFavoritesModal, setShowFavoritesModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  const toggleFavoritesModal = () => {
    setShowFavoritesModal((prevShowFavoritesModal) => !prevShowFavoritesModal);
  };

  const toggleContactModal = () => {
    setShowContactModal((prevShowContactModal) => !prevShowContactModal);
  };

  return (
    <div className='navBar-container'>
      <Link to='/' className='uniLife-logo'>
        <img src="../../../public/houses.png" alt="UniLife Logo" />
        <img src="../../../public/UniLife.svg" alt="UniLife" />
      </Link>
      <div className="navBar-btns">
        <div className="navBar-btns" onClick={toggleFavoritesModal}>
          {hasFavorites ? (
            <AiFillHeart className='navBar-icons' />
          ) : (
            <AiOutlineHeart className='navBar-icons' />
          )}
          <p className='navBar-p'>ShortList</p>
        </div>
        <div className="navBar-btns" onClick={toggleContactModal}>
          <MdMailOutline className='navBar-icons' />
          <p className='navBar-p'>Contact Us</p>
        </div>
      </div>

      <Modal isOpen={showFavoritesModal} onRequestClose={toggleFavoritesModal} ariaHideApp={false}
      className="fav-modal-container" overlayClassName="fav-modal-background">
        <h2>Favorites</h2>
        <ul>
          {favorites.map((property) => (
            <li key={property._id} style={{ listStyleType: 'none' }} className='item-fav-modal'>
              <div className='item-fav-modal-layout'>
                <img src={property.images[0]} alt="Property" width="50" height="50" />
                <div className='p-item-fav'>
                <p>{`${property.address.street}`}</p> <p>{`${property.address.city}`}</p> 
                <p>{`${property.address.postcode}`}</p>
                </div>
                <button onClick={() => removeFromFavorites(property._id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
        <button onClick={toggleFavoritesModal} className='fav-modal-close-btn'>Close</button>
      </Modal>

      {/* 2nd modal */}
      <Modal isOpen={showContactModal} onRequestClose={toggleContactModal} className="contact-modal-container" overlayClassName="contact-modal-background">
        <div className="contact-modal-top">
          {/* Modal header */}
          <div className='text-contact-modal-top'>
          <h1 className='h2-text-contact'>Contact us</h1>
          <p className='p-text-contact'>Feel free to contact us if you have any questions.
          Looking forward to hear from you.</p>
          </div>
          <MdOutlineLocalPostOffice className='icon-text-container'/>
        </div>
        <form className="contact-modal-form">
          {/* Form inputs */}
          <div className="contact-form-half">
            <div className="contact-input-wrapper">
              <label>Name </label>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="contact-input-wrapper">
              <label>Phone Number</label>
              <input type="text" placeholder="Enter your phone number" />
            </div>
            <div className="contact-input-wrapper">
              <label>Are you a:</label>
              <select name="are-you" id="are-you">
                <option value="">Choose</option>
                <option value="student">Student</option>
                <option value="future student">Future Student</option>
                <option value="partner">Partner</option>
              </select>
           </div>
          </div>
          <div className="contact-form-half">
          <div className="contact-input-wrapper">
              <label>Email </label>
              <input type="text" placeholder="Enter your email address" />
            </div>
            <div className="contact-input-wrapper">
              <label>Message</label>
              <textarea rows="6" cols="40" placeholder="Enter your message"></textarea>
            </div>
            {/* Submit button */}
            <button className="contact-modal-btn" onClick={toggleContactModal}>
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default NavBar;

