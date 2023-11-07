import React, { useState } from 'react'
const handleLogin = () =>{

}
const Login = () => {
const [user,setuser] = useState({
    name:'',
    password:''
})
  return (
    <div style={{
        margin:"100px auto",
        width:"300px",
        boxShadow: "0 0 10px black",
        padding:"30px"

    }}>
    <h2>Login form</h2>
    <form>
        <div>
     <input type="text" placeholder='user name' value={user.name} onChange={(e)=>{
        setuser({
            ...user,
            name:e.target.value
        })
     }}/>
        </div>
        <div>
     <input type="password" placeholder='Password' value={user.password} onChange={(e)=>{
        setuser({
            ...user,
            password:e.target.value
        })
     }}/>
        </div>
        <br/>
        <div>
            <button onClick={handleLogin()}>Login</button>
        </div>
    </form>
    </div>
  
  )
}

export default Login