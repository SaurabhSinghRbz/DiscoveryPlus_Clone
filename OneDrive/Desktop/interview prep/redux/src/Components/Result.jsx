import React from 'react'
import { useState } from 'react'
import mystore from './ReduxStore/Store'
const Result = () => {
    const [state,setstate]=useState('')
    mystore.subscribe(()=>{
      setstate(mystore.getState().name)
    })
  return (
    <div>
    Result Component
    <h2>{state}</h2>
    </div>
     
  )
}

export default Result