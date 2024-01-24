import React from 'react'
import { useState } from 'react'
const Child = ({data,sendDataToParent}) => {
  const [childData,setChild] = useState("")
  return (
    <div>
    <h1>Child Component</h1>
    <input placeholder='To parent' onChange={(e)=>setChild(e.target.value)}/>
    <button onClick={sendDataToParent(childData)}>Submit</button>
    <p>{data}</p>
    </div>
  )
}

export default Child