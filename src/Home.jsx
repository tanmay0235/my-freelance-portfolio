import "./App.css";
import profilePic from "./assets/profile.jpeg";

const Hero =() =>{
    return(
        <section id="hero" className="hero-section">
            <div className="text-content">
                <h1>Hi, I'm <span className="highlight">Tanmay Singh</span></h1>
                <h2>Frontend Developer based in India</h2>
                <p>I build fast, responsive, and modern websites using React. Let's make you Ideas Alive</p>
            <div className="buttons">
                <a href="#projects" className="primary-btn">View My Work</a>
                <a href="#contact" className="secondary-btn">Contact Me</a>

            </div>
            </div>
            <div className="image-content">
                <img src={profilePic} alt="Tanmay Singh Profile" className="profile-img" />
            </div>
        </section>
    );
};

export default Hero;