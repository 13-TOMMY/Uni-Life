import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import './KeepInTouch.css'

function KeepInTouch() {
  return (
    <div>
      <div className="contacts-container">
        <div className="contacts-left">
            <h3>Keep in touch</h3>
            <p>Curious about new offerings? Sign up for our weekly newsletter and stay informed.
            </p>
            <input type="email" placeholder="Your email" />
        </div>
        <div className="contacts-right">
            <h3>Let's Socialize</h3>
            <div className="social-wrapper">
                <BsFacebook className="social-icon" />
                <p>Facebook</p>
            </div>
            <div className="social-wrapper">   
                <FaTwitter className="social-icon" />
                <p>Twitter</p>
            </div>
            <div className="social-wrapper">
                <FaInstagram className="social-icon" />
                <p>Instagram</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default KeepInTouch