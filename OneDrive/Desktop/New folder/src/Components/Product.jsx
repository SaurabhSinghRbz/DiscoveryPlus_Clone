import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"

const Product = () => {
 const [products,setproduct] = useState([])
    useEffect(()=>{
     fetch(`https://fakestoreapi.com/products`).then((res)=>res.json()).then((data)=>
     {
        console.log(data)
        setproduct(data)
     }
    
  
     )

    },[])
  return (
    <div>
        <h1 style={{justifyContent:"center",textAlign:"center"}}>
            Product
        </h1>
        <p>
        lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
       {
        products.length>0 ? (
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",margin:"10px"}}>
            {
                products.map((product)=>{
               return  <div key={product.id} style={{padding:"10px" ,margin:"10px",boxShadow:"0 0 10px black"}} >
                <Link to={`/productdetails/${product.id}`}>
                <img src={product.image} alt ={product.title} style={{width:"300px",height:"300px"}}/>
                </Link>
                
                <h1>{product.title}</h1>

                <p>{product.price}</p>
                <Link to={`/productdetails/${product.id}`}><button>more info.</button></Link>
                
                </div>
                })
            }
             </div>
        ):(
            <h2 style={{color:"red"}}>show something else  not working</h2>
        )
 }
    </div>
  )
}

export default Product