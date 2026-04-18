import "./App.css";
import profilePic from "./assets/profile.jpeg";

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="text-content">
                <h1 className="hero-title animate-text">
                    Hi, I'm <span className="highlight">Tanmay Singh</span>
                </h1>
                <h2 className="hero-subtitle animate-text delay-200">
                    Full-Stack MERN Developer & Tech Solopreneur
                </h2>
                <p className="hero-description animate-text delay-400">
                    I architect scalable web applications using the MERN stack and integrate 
                    AI solutions to solve real-world problems. Currently building production-ready 
                    tools with a focus on clean code and robust security.
                </p>
                <div className="hero-buttons animate-text delay-400">
                    <a href="#projects" className="primary-btn">View My Projects</a>
                    <a href="#contact" className="secondary-btn">Let's Connect</a>
                </div>
            </div>
            <div className="image-content">
                <img src={profilePic} alt="Tanmay Singh Profile" className="profile-img" />
            </div>
        </section>
    );
};

export default Hero;