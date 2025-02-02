import React from 'react';
import '../css/Skills.css';
import data from '../../data/data';

function Skills({ id }) {
  const skills = data.Skills.skillset.map((techSkill, index) => {
    return (
      <div className="skill-box" key={index}>
        <h2>{techSkill.category}</h2>
        <div className="skills">
          {techSkill.skills.map((skill, idx) => {
            return (
              <div key={idx} className="skill">
                <div className="skill-header">
                  <h3>{skill.name}</h3>
                  <p>{skill.level}%</p>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${skill.level}` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  });

  return (
    <section id={id} className="section">
      <div className="skills-container">
        <div className="skills-header">
          <h1 className='skills-title'>{data.Skills.title}</h1>
        </div>
        <div className="skills-grid">{skills}</div>
      </div>
    </section>
  );
}

export default Skills;
