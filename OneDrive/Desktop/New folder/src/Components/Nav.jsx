import React from 'react'
import {Link} from "react-router-dom"
var routes = [
    {
        path:"product",
        title:"Product"
    },
    {
        path:"profile",
        title:"Profile"
    }
    ,{
        path:"prodctdetails",
        title:"Product details"
    },{
        path:"/",
        title:"HomePage"
    },
    {
        path:"/users",
        title:"Users"
    },
    {
        path:"/login",
        title:"LOGIN"
    },
    

]
const Nav = () => {
  return (
    <div style={{display:"flex",backgroundColor:"black",color:"white",justifyContent:"space-between",height:"50px"}} >

 {
    routes.map((route,index)=>{
        return(
            <Link to={route.path} key={index+1} style={{color:"white"}}>{route.title}</Link>
        )
            
        
        
    })
 }
 
    </div>
  )
}

export default Nav