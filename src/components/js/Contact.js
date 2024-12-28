import React from 'react';
import '../css/Contact.css';
import data from '../../data/data';

function Contact({ id }){

//   const projects = data.Projects.projects.map((project, index) => {
//     return (
//       <div key={index} className='project'>
//         <h3>{project.title}</h3>
//         <p>{project.description}</p>
//         <a href={project.url}>{project.url}</a>
//         <img src={project.img} alt={project.title} />
//       </div>
//       );
//   });
  
  return (
    <section id={id} className="section">
    <div className='contact-container'>
      <div className='contact-header'>
        <h1>{data.Contact.title}</h1>
      </div>
      <div>
        <p>
          {data.Contact.email}
        </p>
        <p>
          {data.Contact.phone}
        </p>
        <p>
          {data.Contact.linkedin}
        </p>
        <p>
          {data.Contact.github}
        </p>
      </div> 
    </div>
  </section> 
  );
};

export default Contact;