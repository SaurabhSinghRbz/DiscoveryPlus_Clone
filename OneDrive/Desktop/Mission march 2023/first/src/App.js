
import { useState } from "react";
import Nav from "./Components/Nav.jsx";
import Profile from "./Components/Profile.jsx"
import {Route,Routes} from "react-router-dom"
import Home from "./Components/Home.jsx";
import Product from "./Components/Product.jsx";
import Productdetails from "./Components/Productdetails.jsx";

function App() {

  return (
    <div className="App">
    
     <Nav/>  
     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/product" element={<Product/>}/>
     <Route path="/profile" element={<Profile/>}/>
     <Route path="/productdetails/:id" element={<Productdetails/>}></Route>
     </Routes>
 
     
    </div>
   
  );
}

export default App;
