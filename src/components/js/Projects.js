import React from 'react';
import '../css/Projects.css';
import data from '../../data/data';

function Projects({ id }){

  const projects = data.Projects.projects.map((project, index) => {
    return (
      <div key={index} className='project'>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a href={project.url}>{project.url}</a>
        <img src={project.img} alt={project.title} />
      </div>
      );
  });
  
  return (
    <section id={id} className="section">
    <div className='proj-container'>
      <div className='proj-header'>
        <h1>{data.Projects.title}</h1>
      </div>
      <div>
        <p>
          {projects}
        </p>
      </div> 
    </div>
  </section> 
  );
};

export default Projects;