import React from "react";

const Skills = () => {
  const skills = ["HTML", "CSS", "JavaScript", "ReactJS"];

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;