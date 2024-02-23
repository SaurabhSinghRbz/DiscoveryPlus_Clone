import React from 'react'
import ImageCard from './ImageCard.jsx'
import "./Gallery.css"
const randomdata = [
    {
        title:"Random data 1 ",
        price:"20"
    },
    {
        title:"Random data 2 ",
        price:"30"
    },
    {
        title:"Random data 3 ",
        price:"40"
    },
    {
        title:"Random data 4 ",
        price:"50"
    },
    {
        title:"Random data 5 ",
        price:"60"
    },
    {
        title:"Random data 6 ",
        price:"70"
    },
]



const Gallery = () => {

    const box =randomdata.map(({title,price})=>(
        <ImageCard title={title} price={price}/>
    ))
  return (
    <div className='Container'>
    {box}
  
   
    
 </div>

  )
}

export default Gallery