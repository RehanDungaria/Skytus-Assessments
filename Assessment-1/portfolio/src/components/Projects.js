import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "Responsive portfolio using ReactJS"
    },
    {
      title: "Weather App",
      desc: "Weather app using API"
    }
  ];

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="project-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;