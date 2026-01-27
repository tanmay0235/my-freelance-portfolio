import "./App.css"

const Projects=()=>{
    const projects=[
        {
      title: "Portfolio Website",
      desc: "You are looking at it! A fully responsive personal portfolio built with React, Vite, and modern CSS.",
      tech: ["React", "Vite", "CSS"],
      link: "https://github.com/tanmay0235/my-freelance-portfolio.git",
      demo: "https://tanmay-portfolio-dev.netlify.app" 
    },
    {
      title: "Task Manager App",
      desc: "A productivity tool that allows users to add, edit, and delete daily tasks. Uses LocalStorage to save data.",
      tech: ["React", "State", "LocalStorage"],
      link: "https://github.com/tanmay0235/smart-task-manager.git",
      demo: "https://smarttaskmanagertool.netlify.app"
    },{
      title: "Weather Dashboard",
      desc: "A real-time weather tracking application that fetches data from an external API and displays forecasts.",
      tech: ["API", "React", "Async/Await"],
      link: "#"
    }
    ];

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