import React from 'react'
import './Banner.css'

function Banner({headline, subhead}) {
  return (
    <div>
      <div className='banner-ul'>
        <div className="banner-overlay">
        </div>
        <div className="banner-text">
          <h1>{headline}</h1>
          <h4>{subhead}</h4>
        </div>
      </div>
    </div>
  )
}

export default Banner