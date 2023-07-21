import React from 'react'
import './SearchCompare.css'

function SearchCompare() {
  return (
    <div className='searchCompare'>
      <div className="searchCompare-container">
          <div className="sC-left">
          <div className="text-container">
            <img src='../public/home-hp.png'/>
               <div className="text-right">
                  <h3>Best selection</h3>
               <p>Best selection of student accomodations. Never been easier to find a home that's right for you.</p>
            </div>
         </div>
         <div className="text-container">
            <img src='../public/favHeart.svg' />
            <div className="text-right">
                  <h3>Your favorite</h3>
                  <p>Shortlist your favourite properties and send enquiries in one click.</p>
            </div>
         </div>
            <button className="searchCompare-btn">Search&Compare</button>
          </div>
          <div className="sC-right">
            <img src='../public/person.png' alt="person"/>
          </div>
        </div>
    </div>
  )
}

export default SearchCompare