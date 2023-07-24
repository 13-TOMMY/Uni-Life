import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdFavoriteBorder, MdMailOutline } from 'react-icons/md';
import { FavContext } from '../../contexts/FavContext';
import Modal from 'react-modal';
import './NavBar.css';

function NavBar() {
  const { favorites } = useContext(FavContext);
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
          <MdFavoriteBorder className='navBar-icons' />
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
            <li key={property.id}>{property.name}</li>
          ))}
        </ul>
        <button onClick={toggleModal}>Close</button>
      </Modal>
    </div>
  );
}

export default NavBar;
