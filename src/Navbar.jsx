import "./App.css";

const Navbar = () =>{
    return(
        <nav className="navbar">
            <div className="logo">Tanmay Singh<span className="dot">.</span></div>
            <div className="links">
                <a href="#home">Home</a>  
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact" className="contact-btn">Contact Details</a>

            </div>
        </nav>
    );
};

export default Navbar;