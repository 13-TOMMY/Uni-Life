import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdMailOutline } from 'react-icons/md';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { FavContext } from '../../contexts/FavContext';
import Modal from 'react-modal';
import './NavBar.css';

function NavBar() {
  const { favorites, removeFromFavorites, hasFavorites } = useContext(FavContext); // Access hasFavorites from the global context
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  return (
    <div className='navBar-container'>
      <Link to='/' className='uniLife-logo'>
        <img src="../public/houses.png" alt="UniLife Logo" />
        <img src="../public/UniLife.svg" alt="UniLife" />
      </Link>
      <div className="navBar-btns">
        <div className="navBar-btns" onClick={toggleModal}>
          {/* Use the hasFavorites state from the global context */}
          {hasFavorites ? (
            <AiFillHeart className='navBar-icons' />
          ) : (
            <AiOutlineHeart className='navBar-icons' />
          )}
          <p className='navBar-p'>ShortList</p>
        </div>
        <div className="navBar-btns">
          <MdMailOutline className='navBar-icons' />
          <p className='navBar-p'>Contact Us</p>
        </div>
      </div>

      <Modal isOpen={showModal} onRequestClose={toggleModal} ariaHideApp={false}>
        <h2>Favorites</h2>
        <ul>
          {favorites.map((property) => (
            <li key={property._id}>
              <div>
                <img src={property.images[0]} alt="Property" width="50" height="50" />
                {`${property.address.street}, ${property.address.city}, ${property.address.postcode}`}
                <button onClick={() => removeFromFavorites(property._id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
        <button onClick={toggleModal}>Close</button>
      </Modal>
    </div>
  );
}

export default NavBar;
