import React from 'react';
import '../css/Education.css';
import data from '../../data/data';


function Education ({ id }) {

  const education = data.Education.schools.map((school, index) => {
    return (
      <div key={index} className='school'>
        <h3>{school.degree}</h3>
        <h4>{school.school}</h4>
        <p>{school.date}</p>
      </div>
    );
  });


  return (
    <section id={id} className="section">
    <div className='edu-container'>
      <div className='edu-header'>
        <h1>{data.Experience.title}</h1>
      </div>
      <div>
        <p>
          {education}
        </p>
      </div> 
    </div>
  </section> 
  );
};

export default Education;