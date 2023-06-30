import React from 'react'
import { useState } from 'react'
import myAction from "./Action/myAction.js"
import Result from './Result.jsx'

const Input = () => {
    const [state,setState]=useState('')
    
    const senddatatoaction = () =>{
       myAction(state)
   
    }
    
  return (
    <div>
        <h1>Input Component</h1>
        <input placeholder='enter your text' onChange={(e)=>{setState(e.target.value)}}/>
        <button onClick={senddatatoaction}>Send data to Redux</button>
        <h1>Result Component</h1>
        
       <Result/>
    </div>
  )
}

export default Input