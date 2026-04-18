import { projects } from "./projectsData"; // Import your new data file
import "./App.css";

const Projects = () => {
    return(
        <section id="projects" className="projects-section">
            <h2 className="section-title">Featured Projects</h2>
            <div className="project-grid">
              {projects.map((project,index)=>(
                <div key={index} className="project-card" data-aos="fade-up">
                    <h3>{project.title}</h3>
                    <p>{project.desc}</p>
                 <div className="tech-stack">
                  {project.tech.map((tag,i)=>(
                    <span key={i} className="tech-tag">{tag}</span>
                  ))}  
                </div>
                <div className="project-links">
               
                   <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                     View Code
                    </a>
                    {project.demo && project.demo !== "" && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link demo-btn">
                                    Live Demo
                          </a>
                                
                    )}
                </div>
                </div>
              ))}


            </div>
        </section>
    );
};
 export default Projects;