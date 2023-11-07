import React from 'react'
import { useParams } from 'react-router-dom'

const Productdetails = () => {
    const {id} = useParams();
  return (
    <div>Productdetails:{id}
    
    </div>
  )
}

export default Productdetails