import React from 'react'
import { useContext } from 'react'
import ctx from "../Context/ctx"
import Home from "./Home"
import Login from "./Login"
const Main = () => {
    const isLoggedIn = useContext(ctx)
  return (
    <div>
     {isLoggedIn?<Home/>:<Login/>}
    </div>
  )
}

export default Main