import React from 'react'
import './CompareHp.css'

function CompareHp() {
  return (
   <div className="compare-container">
      <h1>Compare all inclusive student homes</h1>
         <div className="compare-boxes">
            <div className="compare-box">
               <img src='../public/search.svg' />
               <h3>Search</h3>
               <p>Find your dream home in the perfect area near your university.</p>
            </div>
            <div className="compare-box">
               <img src='../public/compare.svg' />
               <h3>Compare</h3>
               <p>Compare student accomodation to find the right home for you.</p>
            </div>
            <div className="compare-box">
               <img src='../public/bills.png' />
               <h3>Bills Included</h3>
               <p>Bills are included i all rent prices. No hidden fees.</p>
            </div>
         </div>
 </div>
  )
}

export default CompareHp