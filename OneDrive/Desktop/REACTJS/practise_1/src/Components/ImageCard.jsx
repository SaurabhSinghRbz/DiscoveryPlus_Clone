import React from 'react'
import "./ImageCard.css"
const ImageCard = ({title,price}) => {
  return (
    <div>
            <div className='imagecard'>
            <img className='ImageSize'></img>
            <div className='bottom'>
            <h3>{title}</h3>
            <p>{price}</p>
            </div>
            
            </div>
   
    
    </div>
  )
}

export default ImageCard