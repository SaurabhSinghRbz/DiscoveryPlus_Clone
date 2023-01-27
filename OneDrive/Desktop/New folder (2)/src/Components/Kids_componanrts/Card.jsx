import React from 'react'
import { useState, useEffect } from 'react';
import style from './KIDS_css/card.css'
import play from './play.png'
function Card() {
    const [state, setstate] = useState([]);
    const [loding, setloding] = useState(false);
    let getdata = async()=>{
        setloding(false)
        let res  =await fetch(`http://localhost:3000/Watching?_limit=4`);
        let data = await res.json();
        setstate(data);
        setloding(true);

    }
    useEffect(()=>{
        getdata();
    },[]);
   console.log(state)

  return (
    <div className='card_container'>

        {
            state.map((ele, id)=>{
            return(
            <div className='content_img'>
               
                <img src={ele.img} alt=""  />
               <div className='hide_title'>
                   <div className='play_btn'>
                     <i class="fa-regular fa-circle-play"></i>
                     </div>
                    <h4>{ele.title}</h4>
                    <p>{ele.dis}</p>
               </div>
              </div>
            )

            })
        }
     
    </div>
  )
}

export default Card
