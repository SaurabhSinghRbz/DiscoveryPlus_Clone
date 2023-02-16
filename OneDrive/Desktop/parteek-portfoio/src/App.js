import About from "./Components/About";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Portfolio from "./Components/Portfolio";
import SocialLinks from "./Components/SocialLinks";
import Footer from "./Components/Footer"
import Statistics from "./Components/Statistics";
import Tools from "./Components/Tools";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
     <Portfolio />
     
      <Skills />
      <Tools/>
      <Statistics/>
      <Contact />
        <SocialLinks />
      <Footer />
    
    </div>
  );
}

export default App;
