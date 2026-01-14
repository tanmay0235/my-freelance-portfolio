import { useState, useEffect } from "react";
import "./App.css";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        Tanmay Singh<span className="dot">.</span>
      </div>

      {/* 1. The Menu Button (Just the button, nothing inside it) */}
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? "✕" : "☰"}
      </div>

      {/* 2. The Actual Links Container */}
      {/* NOW this container has the logic: If isMenuOpen is true, add 'active' class */}
      <div className={`links ${isMenuOpen ? "active" : ""}`}>
        
        {/* We add onClick to every link so the menu closes when you choose one */}
        <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
        <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
        <a href="#contact" className="contact-btn" onClick={() => setIsMenuOpen(false)}>
          Contact Details
        </a>

        <button onClick={toggleTheme} className="theme-btn">
          {isDarkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;