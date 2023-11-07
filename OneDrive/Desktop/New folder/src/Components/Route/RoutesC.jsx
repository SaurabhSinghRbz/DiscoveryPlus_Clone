
import Profile from "../Profile.jsx"
import {Route,Routes} from "react-router-dom"
import Home from "../Home.jsx";
import Product from "../Product.jsx";
import Productdetails from "../Productdetails"
import Users from "../Users.jsx";
import Login from "../Login"


const RoutesC = () => {
  return (
    <div>
        <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/product" element={<Product/>}/>
     <Route path="/profile" element={<Profile/>}/>
     <Route path="/users" element={<Users/>}/>
     <Route path="/productdetails/:id" element={<Productdetails/>}></Route>
     <Route path="/login" element={<Login/>}></Route>
     </Routes>
 
    </div>
  )
}

export default RoutesC