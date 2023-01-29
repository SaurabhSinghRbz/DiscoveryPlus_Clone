import React from 'react'
import {Link} from "react-router-dom"

const Nav = () => {
  return (
    <div style={{display:"flex",backgroundColor:"black",color:"white",justifyContent:"space-between",height:"50px"}} >
   <Link to="/" style={{color:"white"}}>

   Home

  </Link>
    
  <Link to="/product" style={{color:"white"}}>
  
   Product
  
  </Link>
  <Link to="/profile" style={{color:"white"}}>
   
   Profile
 
  </Link>
 
 
    </div>
  )
}

export default Nav