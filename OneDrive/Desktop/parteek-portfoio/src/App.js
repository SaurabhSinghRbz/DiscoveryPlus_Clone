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
      <NavBar  id="nav-menu" />
      <Home id="home"/>
      <About  id="about" class="about section" />
     <Portfolio id="projects"/>
     
      <Skills id="skills" />
      <Tools/>
      <Statistics/>
      <Contact  id="contact" />
        <SocialLinks />
      <Footer />
    
    </div>
  );
}

export default App;
