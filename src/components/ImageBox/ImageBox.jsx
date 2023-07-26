import React from 'react'
import './ImageBox.css'

function ImageBox({pics}) {
  return (
    <div className="image-container">
        <img src={pics[0]}  className="image-top" />
        <div className="image-bottom">
            <img src={pics[1]} />
            <img src={pics[2]} />
            <img src={pics[3]} />
        </div>
    </div>
  )
}

export default ImageBox