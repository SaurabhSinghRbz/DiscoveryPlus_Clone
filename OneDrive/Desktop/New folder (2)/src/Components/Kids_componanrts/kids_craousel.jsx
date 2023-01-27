import React from "react"

import play from "./play.png"
import { Link } from "react-router-dom"
import style from './KIDS_css/slider.css'
import { useState, useEffect } from 'react';


const slider = [{
  
    title: "Zig & Sharko",
    description:"A shark will do anything to protect a mermaid from a famished hyena. ",
    image_url: "https://ap2-prod-images.disco-api.com/2022/01/17/0082c2ce-002c-47ec-9a59-dbe309df2fcb.jpeg?w=600&p=true&q=75",
   
},
{
   title: "Tom & Jerry",
     description:"This cartoon follows the antics of cat Tom in his pursuit of mouse Jerry.",
    image_url: "https://ap2-prod-images.disco-api.com/2022/01/07/6a422c8d-06e5-44b5-bdde-1b5386692c3d.jpeg?bf=0&f=jpg&p=true&q=85&w=1000",
    text: "Science"
},
{
  
  title: "Zig & Sharko",
  description:"A shark will do anything to protect a mermaid from a famished hyena. ",
  image_url: "https://ap2-prod-images.disco-api.com/2022/01/17/0082c2ce-002c-47ec-9a59-dbe309df2fcb.jpeg?w=600&p=true&q=75",
 
},
{
 title: "Tom & Jerry",
   description:"This cartoon follows the antics of cat Tom in his pursuit of mouse Jerry.",
  image_url: "https://ap2-prod-images.disco-api.com/2022/01/07/6a422c8d-06e5-44b5-bdde-1b5386692c3d.jpeg?bf=0&f=jpg&p=true&q=85&w=1000",
  text: "Science"
},


]


 const Slider=()=> {

  return (
   
    <div  className="main_kids_container" style={{minWidth:"350px", display:"flex", flexWrap:"wrap"}}>
      <div id="carouselExampleCaptions" className="carousel slide " data-bs-ride="carousel" style={{ backgroundColor: "rgb(18,19,23)", padding: "4%", paddingTop: "0px", paddingBottom: "0px" }} >
        <div className="carousel-inner" style={{ padding: "3%" }}>
          <div className="carousel-item active">
            <div className="row">
              <div className="col-4">
                <h1 className='non mt-3 text-white fs-1'  ><strong>{slider[0].title}</strong></h1>
                 <p className="non card-text mb-0 py-1" style={{ color: "#838991", fontSize: "18px" }}>{slider[0]?.description}</p>
                <div className="non btn-group mt-3" role="group" aria-label="Basic example">
                  <button type="button" className="btn btn-secondary btn-sm py-0 mx-1" style={{ backgroundColor: "rgb(40,46,61)", color: "#b6bbc0", fontSize: "12px",maxWidth:"120px"}}>Trending</button>
                  <button type="button" className="btn btn-secondary btn-sm py-0 mx-1" style={{ backgroundColor: "rgb(40,46,61)", color: "#b6bbc0", fontSize: "12px",maxWidth:"120px" }}>Recommanded</button>
                </div>
                <Link to="/watch" style={{textDecoration:"none"}}>
                  <div className='pt-4'>

                    <img className='play' src={play} alt="" style={{ maxWidth: "65px", maxHeight: "65px" }} /><span className='px-3' style={{ color: "#ffffff", fontSize: "18px" }}
                      onClick={() => {
                        localStorage.setItem("showData", JSON.stringify(slider[0]));
                      }}>Play</span>
                  </div> </Link>
              </div>
              <div className="col-12 col-lg-8">
              <Link to="/watch" style={{textDecoration:"none"}}>
                  <img style={{ borderRadius: "10px" }} src={slider[0].image_url} className="d-block w-100" alt="..."  onClick={() => {
                         localStorage.setItem("showData", JSON.stringify(slider[0]));
                      }}/>
                </Link>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-4">
                <h1 className='non mt-3 text-white fs-1'> <strong>{slider[1].title}</strong></h1>
                <p className="non card-text mb-0 py-1" style={{ color: "#838991", fontSize: "18px" }}>{slider[0]?.description}</p>
                <div className=" non btn-group mt-3" role="group" aria-label="Basic example">
                  <button type="button" className="btn btn-secondary btn-sm py-0 mx-1 btn-sm" style={{ backgroundColor: "rgb(40,46,61)", color: "#b6bbc0", fontSize: "12px" ,maxWidth:"120px"}}>Trending</button>
                  <button type="button" className="btn btn-secondary btn-sm py-0 mx-1 btn-sm" style={{ backgroundColor: "rgb(40,46,61)", color: "#b6bbc0", fontSize: "12px" ,maxWidth:"120px"}}>Recommanded</button>
                </div>
                <Link to="/watch" style={{textDecoration:"none"}}>
                  <div className='pt-4'>
                    <img className='play' src={play} alt="" style={{ maxWidth: "65px", maxHeight: "65px" }} /><span className='px-3' style={{ color: "#ffffff", fontSize: "18px" }}
                      onClick={() => {
                        localStorage.setItem("showData", JSON.stringify(slider[1]));
                      }}>Play</span>
                  </div>
                </Link>
              </div>

              <div className="col-12 col-lg-8">
                <Link to="/watch" style={{textDecoration:"none"}}>
                  <img style={{ borderRadius: "10px" }} src={slider[1].image_url} className="d-block w-100" alt="..."  onClick={() => {
                      localStorage.setItem("showData", JSON.stringify(slider[1]));
                      }}/>

                </Link>
              </div>
            </div>


          </div>

          <div className="carousel-item">
            <div className="row">
              <div className="col-4">
                <h1 className='non mt-3 text-white fs-1'> <strong>{slider[2].title}</strong></h1>
                <p className="non card-text mb-0 py-1" style={{ color: "#838991", fontSize: "18px" }}>{slider[0]?.description}</p>
                <div className="non btn-group mt-3" role="group" aria-label="Basic example">
                  <button type="button" className="btn btn-secondary btn-sm py-0 mx-1" style={{ backgroundColor: "rgb(40,46,61)", color: "#b6bbc0", fontSize: "12px",maxWidth:"120px" }}>Trending</button>
                  <button type="button" className="btn btn-secondary btn-sm py-0 mx-1" style={{ backgroundColor: "rgb(40,46,61)", color: "#b6bbc0", fontSize: "12px" ,maxWidth:"120px"}}>Recommanded</button>
                </div>
                <Link to="/watch" style={{textDecoration:"none"}}>
                  <div className='pt-4'>
                    <img className='play' src={play} alt="" style={{ maxWidth: "65px", maxHeight: "65px" }} /><span className='px-3' style={{ color: "#ffffff", fontSize: "18px" }}
                      onClick={() => {
                        localStorage.setItem("showData", JSON.stringify(slider[2]));
                      }}>Play</span>
                  </div>
                </Link>

              </div>
              <div className="col-12 col-lg-8">
                <Link to="/watch" style={{textDecoration:"none"}}>
                  <img style={{ borderRadius: "10px" }} src={slider[2]?.image_url} className="d-block w-100" alt="..."  onClick={() => {
                      localStorage.setItem("showData", JSON.stringify(slider[2]));
                      }}/>
                </Link>
              </div>
            </div>

          </div>

          <div className="carousel-item">
            <div className="row">
              <div className="col-4">
                <h1 className='non mt-3 text-white fs-1'> <strong>{slider[3]?.title}</strong></h1>
                <p className="non card-text mb-0 py-1" style={{ color: "#838991", fontSize: "18px" }}>{slider[3]?.description}</p>
                <div className="non btn-group mt-3" role="group" aria-label="Basic example">
                  <button type="button" className="btn btn-secondary btn-sm py-0 mx-1" style={{ backgroundColor: "rgb(40,46,61)", color: "#b6bbc0", fontSize: "12px",maxWidth:"120px" }}>Trending</button>
                  <button type="button" className="btn btn-secondary btn-sm py-0 mx-1" style={{ backgroundColor: "rgb(40,46,61)", color: "#b6bbc0", fontSize: "12px",maxWidth:"120px" }}>Recommanded</button>
                </div>
                <Link to="/watch" style={{textDecoration:"none"}}>
                  <div className='pt-4'>

                    <img className='play' src={play} alt="" style={{ maxWidth: "65px", maxHeight: "65px" }} /><span className='px-3' style={{ color: "#ffffff", fontSize: "18px" }}
                      onClick={() => {
                        localStorage.setItem("showData", JSON.stringify(slider[3]));
                      }}>Play</span>
                  </div>
                </Link>
              </div>
              <div className="col-12 col-lg-8">
                <Link to="/watch" style={{textDecoration:"none"}}>
                  <img style={{ borderRadius: "10px" }} src={slider[3]?.image_url} className="d-block w-100" alt="..."  onClick={() => {
                        localStorage.setItem("showData", JSON.stringify(slider[3]));
                      }}/>

                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='row p-4'>
          <div className="carousel-indicators col-2 mx-0" >
            <button style={{ maxWidth: "10px", height: "10px", borderRadius: "50%" }} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active dot" aria-current="true" aria-label="Slide 1"></button>
            <button className='dot' style={{ maxWidth: "10px", height: "10px", borderRadius: "50%" }} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button className='dot' style={{ maxWidth: "10px", height: "10px", borderRadius: "50%" }} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button className='dot' style={{ maxWidth: "10px", height: "10px", borderRadius: "50%" }} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
          </div>
          <div className="col-10"></div>
        </div>
        <button className="carousel-control-prev" style={{ maxWidth: "5%",marginTop:"50px" }} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next " style={{ maxWidth: "5%",marginTop:"50px" }} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
 

)
}
export default Slider