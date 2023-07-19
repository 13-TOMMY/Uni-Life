import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MdFavoriteBorder, MdMailOutline } from 'react-icons/md'
import './NavBar.css'

function NavBar() {
  const navigate = useNavigate();
  return (
    <div className='navBar-container'>
      <Link to='/' className='uniLife-logo'>
        <img src="src/assets/houses.png" alt="UniLife Logo" />
        <img src="src/assets/UniLife.svg" alt="UniLife" />
      </Link>
      <div className="navBar-navigation">
        <div className="navBar-btns">
          <MdFavoriteBorder className='navBar-icons' onClick={() => navigate('/favorites')}/>
          <p>ShortList</p>
        </div>
        <div className="navBar-btns">
            <MdMailOutline className='navBar-icons'/>
            <p>Contact Us</p>
          </div>
      </div>
    </div>
  )
}

export default NavBar