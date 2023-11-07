

import Nav from "./Components/Nav.jsx";
import RoutesC from "./Components/Route/RoutesC.jsx";

import ctx from "../src/Context/ctx.jsx"
import { useState } from "react";
import Main from "./Components/Main"
function App() {
const [isLoggedIn,setloggedin]=useState(true)
  return (
    <div className="App">

     <ctx.Provider value={isLoggedIn}>
     <Nav/>  
     <Main/>
     <RoutesC/>
     </ctx.Provider>
   
     
    </div>
   
  );
}

export default App;
