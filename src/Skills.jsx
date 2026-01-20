import "./App.css"

const Skills=()=>{
    const skills = [
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "Git & GitHub", icon: "🚀" },
    { name: "Responsive Design", icon: "📱" },
  ];

  return(
  <section id="skills" className="skills-section">
    <h2 className="section-title">My Tech Stack</h2>
  <div className="skill-grid">
    {skills.map((skill,index)=>(
        <div key={index} className="skill-card" data-aos="flip-left" data-aos-delay={index*100}>
        <span className="skill-icon">{skill.icon}</span>
        <h3>{skill.name}</h3>
        </div>
    ))}
  </div>
    </section>

  );
};

export default Skills;