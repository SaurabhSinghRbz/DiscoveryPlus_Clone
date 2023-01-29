
import { useState } from "react";
import Profile from "./Components/Profile.jsx"



function App() {
 const [showProfile,setShowProfile]=useState(true)
  return (
    <div className="App">
     <div style={{display:"flex",justifyContent:"space-evenly"}}>
     <Profile 
      image="data:image/jpeg;base64,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"
      name="Rocky Arora"
      profession="Mech Engineer"
     />
     <Profile
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX-MxwKIWliFgjlhSdHeucTfT__yl-Ey5UhzBdcFXn5w&s"

      name="Saloni Setia"
      profession="Soft Engineer" />
     </div>
      
    </div>
   
  );
}

export default App;