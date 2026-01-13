import { useState,useEffect } from "react";
import "./App.css";

const Navbar = () =>{
     
    const [isDarkMode, setIsDarkMode]=useState(true);

    useEffect(()=>{
        if(isDarkMode){
            document.body.classList.remove("light-mode");
        }
        else{
            document.body.classList.add("light-mode")
        }
    },[isDarkMode]);
    const toggleTheme=()=>{
        setIsDarkMode(!isDarkMode);
    };

    return(
        <nav className="navbar">
            <div className="logo">Tanmay Singh<span className="dot">.</span></div>
            <div className="links">
                <a href="#home">Home</a>  
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact" className="contact-btn">Contact Details</a>
              <button onClick={toggleTheme} className="theme-btn">
            {isDarkMode ? "☀️" : "🌙"}
            </button>
            </div>
        </nav>
    );
};

export default Navbar;