// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { MdFavoriteBorder, MdMailOutline } from 'react-icons/md';
import './NavBar.css';

function NavBar() {
  return (
    <div className='navBar-container'>
      <Link to='/' className='uniLife-logo'>
        <img src="src/assets/houses.png" alt="UniLife Logo" />
        <img src="src/assets/UniLife.svg" alt="UniLife" />
      </Link>
      <div className="navBar-btns">
      <div className="navBar-btns" onClick={() => navigate('/favorites')}>
        <MdFavoriteBorder className='navBar-icons' />
        <p className='navBar-p'>ShortList</p>
      </div>
      <div className="navBar-btns">
        <MdMailOutline className='navBar-icons' />
        <p className='navBar-p'>Contact Us</p>
      </div>
      </div>
    </div>
  );
}

export default NavBar;
