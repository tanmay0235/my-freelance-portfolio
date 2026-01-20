import { useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

import AOS from "aos";
import "aos/dist/aos.css";
function App(){

  useEffect(()=>{
    AOS.init({
      duration:1000,
      once:true,
    });
  },[]);
  return(
    <div className="app-container">
     <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

      
      {/* --- NEW: Floating Resume Button --- */}
      <a 
        href="https://tanmay-digital-resume.netlify.app/" 
        target="_blank" 
        rel="noreferrer"
        className="resume-btn"
      >
        📄 View Resume
      </a>
    </div>
  );
}

export default App;