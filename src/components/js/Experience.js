import React from 'react';
import '../css/Experience.css';
import data from '../../data/data';

function Experience({ id }) {

  const experience = data.Experience.jobs.map((job, index) => {
    return (
      <div key={index} className='job'>
        <h3>{job.title}</h3>
        <h4>{job.company}</h4>
        <p>{job.date}</p>
        <p>{job.description}</p>
      </div>
    );
  });

  return (
    <section id={id} className="section">
      <div className='exp-container'>
        <div className='exp-header'>
          <h1>{data.Experience.title}</h1>
        </div>
        <div>
          <p>
            {experience}
          </p>
        </div> 
      </div>
    </section> 
  );
}

export default Experience;