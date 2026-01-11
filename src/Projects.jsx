import "./App.css"

const Projects=()=>{
    const projects=[
        {
      title: "Portfolio Website",
      desc: "You are looking at it! A fully responsive personal portfolio built with React, Vite, and modern CSS.",
      tech: ["React", "Vite", "CSS"],
      link: "#" // You can add your GitHub link here later
    },
    {
      title: "Task Manager App",
      desc: "A productivity tool that allows users to add, edit, and delete daily tasks. Uses LocalStorage to save data.",
      tech: ["React", "State", "LocalStorage"],
      link: "#"
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
                <div key={index} className="project-card">
                    <h3>{project.title}</h3>
                    <p>{project.desc}</p>
                 <div className="tech-stack">
                  {project.tech.map((tag,i)=>(
                    <span key={i} className="tech-tag">{tag}</span>
                  ))}  
                </div>
                <a href={project.link} className="project-link">View Code</a>   
                </div>
              ))}


            </div>
        </section>
    );
};
 export default Projects;