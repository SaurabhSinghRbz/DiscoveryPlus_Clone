import React from 'react'
import Child from './Child.jsx'
import { useState } from 'react'
const Parent = () => {
    const [state,setState]=useState("")
    const [data,setData] =useState("")
    const [fet , setdet] =useState("nulify")
  const SendDatatoChild = () =>{
    setData(state)
  }
  return (
    <div style={{
      border:"1px solid black",
      padding:"50px",
      width:"500px",
      margin:"50p auto",
    }}>
    <h1>Parent Component</h1>
    <h2>{fet}</h2>
    <input placeholder='To child' onChange={(e)=>setState(e.target.value)}/>
    <button onClick={SendDatatoChild}>Submit</button>
    <Child data={data} sendDataToParent={setdet}/>
    </div>
  )
}

export default Parent