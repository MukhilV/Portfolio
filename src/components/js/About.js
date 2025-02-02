import React from 'react';
import '../css/About.css';
import img from '../../images/mukhil.png';
import data from '../../data/data';

const About = ({ id }) => {
  return <section id={id} className="section variable-height custom-bg-color bg-img">
    <div className='about-container'>
      <div className='about-header'>
        <h1 className="section-title">About Me</h1>
      </div>
      <div className="about-content">
        <div className='about-image'>
          <img className="portfolio-photo" src={img} alt="Mukhil Venkataramanan" />
        </div>
        <div className='about-text'>
        <p>
          {data.About.description_1} <br/><br/>
          {data.About.description_2} <br/><br/>
          {data.About.description_3} <br/>
        </p>
        </div>
      </div> 
    </div>
  </section>;
};

export default About;