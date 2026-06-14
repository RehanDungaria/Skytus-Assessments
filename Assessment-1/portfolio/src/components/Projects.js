import React, { useState } from "react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Portfolio Website",
      desc: "Responsive portfolio using ReactJS",
      details:
        "Developed a fully responsive personal portfolio website using ReactJS. The website showcases skills, projects, education, and contact information with a modern and user-friendly interface."
    },
    {
      title: "Weather App",
      desc: "Weather app using API",
      details:
        "Built a weather application using ReactJS and a Weather API. Users can search for cities and view real-time weather information including temperature, humidity, wind speed, and weather conditions."
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

            <button
              className="details-btn"
              onClick={() => setSelectedProject(project)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="project-modal">
          <div className="modal-content">
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.details}</p>

            <button
              className="close-btn"
              onClick={() => setSelectedProject(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;