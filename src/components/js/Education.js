import React from 'react';
import '../css/Education.css';
import data from '../../data/data';


function Education ({ id }) {

  const education = data.Education.schools.map((school, index) => {
    return (
      <div key={index} className="job-box">
        <div className="job-header">
          <h3>{school.degree}</h3>
          <div>
            <h4>{school.school}</h4>
            <p className="job-date">{school.date}</p>
          </div>
        </div>
        <div className="job-content">
          <p>{school.description.map((points, idx) => {
            return <li key={idx}>{points}</li>
          })}</p>
        </div>
      </div>
    );
  });

  // const education = data.Education.schools.map((school, index) => {
  //   return (
  //     <div key={index} className='school'>
  //       <h3>{school.degree}</h3>
  //       <h4>{school.school}</h4>
  //       <p>{school.date}</p>
  //       <p>{school.description}</p>
  //     </div>
  //   );
  // });


  return (
    <section id={id} className="section">
    <div className='edu-container'>
      <div className='edu-header'>
        <h1 className='edu-title'>{data.Education.title}</h1>
      </div>
      <div>
          {education}
      </div> 
    </div>
  </section> 
  );
};

export default Education;