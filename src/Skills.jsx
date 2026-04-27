import "./App.css"

const Skills=()=>{
   // Replacing my current array with this Full-Stack version:
const skills = [
  { name: "MongoDB", icon: "🍃" },
  { name: "Express.js", icon: "🚂" },
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟩" },
  { name: "REST APIs & JWT", icon: "🔐" },
  { name: "Git & GitHub", icon: "🚀" },
];

  return(
  <section id="skills" className="skills-section">
    <h2 className="section-title">My Tech Stack</h2>
  <div className="skills-grid">
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