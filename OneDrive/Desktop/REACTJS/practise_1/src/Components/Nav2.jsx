import React from 'react'
import "./Nav2.css"
import {faHome} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Nav2 = () => {
  return (
    <div>
      <nav>
      <input type="checkbox" id="check"/>
      <label for="check" className="checkbtn">
        <FontAwesomeIcon  icon ={faHome}/>
      </label>
     
      <ul>
        <li><a className="active" href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Services</a></li>
        <li><a href="/">Contact</a></li>
        <li><a href="/">Feedback</a></li>
      </ul>
    </nav>
  
    </div>
  )
}

export default Nav2