import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
function App(){
  return(
    <div className="app-container">
     <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Contact />
      
      {/* Placeholders for later */}
      <div style={{height: '500px', background: '#222', textAlign: 'center', padding: '50px'}}>
        <h2>Contact Form coming soon...</h2>
      </div>
    </div>
  );
}

export default App;