import React from 'react';
import '../css/Projects.css';
import data from '../../data/data';

function Projects({ id }) {
  return (
    <section id={id} className="section extend-height">
      <div className="proj-container">
        <div className="proj-header">
          <h1>{data.Projects.title}</h1>
        </div>
        <div className="proj-grid">
          {data.Projects.projects.map((project, index) => (
            <div key={index} className="project-card">
              <img className="prj-img" src={project.img} alt={project.title} />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  Project URL
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
