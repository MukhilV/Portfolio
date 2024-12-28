import React from 'react';
import '../css/Skills.css';
import data from '../../data/data';

function Skills({ id }){

  const programming_languages = data.Skills.programming_languages.map((skill, index) => {
    return (
      <div key={index} className='skill'>
        <h3>{skill.name}</h3>
        <p>{skill.level}</p>
      </div>
    );
  });

  const frame_work_and_tools = data.Skills.frame_work_and_tools.map((skill, index) => {
    return (
      <div key={index} className='skill'>
        <h3>{skill.name}</h3>
        <p>{skill.level}</p>
      </div>
    );
  });

  const specialized_tools = data.Skills.specialized_tools.map((skill, index) => {
    return (
      <div key={index} className='skill'>
        <h3>{skill.name}</h3>
        <p>{skill.level}</p>  
        </div>
    );
  });

  const data_science = data.Skills.data_science.map((skill, index) => {
    return (
      <div key={index} className='skill'>
        <h3>{skill.name}</h3>
        <p>{skill.level}</p>  
        </div>
    );
  });

  return (
  <section id={id} className="section">
    <div className='skills-container'>
      <div className='skills-header'>
        <h1>{data.Skills.title}</h1>
      </div>
      <div className='skills-content'>
        <div>
            {programming_languages}
        </div> 
        <div>
            {frame_work_and_tools}
        </div> 
        <div>
            {specialized_tools}
        </div> 
        <div>
            {data_science}
        </div> 
      </div>
    </div>
  </section> 
  );
}

export default Skills;