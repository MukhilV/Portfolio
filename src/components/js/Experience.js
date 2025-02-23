import React from 'react';
import '../css/Experience.css';
import data from '../../data/data';

function Experience({ id }) {
  const experience = data.Experience.jobs.map((job, index) => {
    return (
      <div key={index} className="job-box">
        <div className="job-header">
          <h3>{job.title}</h3>
          <div>
            <h4>{job.company}</h4>
            <p className="job-date">{job.date}</p>
          </div>
        </div>
        <div className="job-content">
          <ul className="job-description">
            {job.description.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  });

  return (
    <section id={id} className="section extend-height">
      <div className="exp-container">
        <div className="exp-header">
          <h1 className='exp-title'>{data.Experience.title}</h1>
        </div>
        <div className="exp-list">{experience}</div>
      </div>
    </section>
  );
}

export default Experience;