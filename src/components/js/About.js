import React from 'react';
import '../css/About.css';
import img from '../../images/mukhil.png';
import data from '../../data/data';

const About = ({ id }) => {
  return <section id={id} className="section">
    <div className='about-container'>
      <div className='about-header'>
        <img className="portfolio-photo" src={img} alt="Mukhil Venkataramanan" />
      </div>
      <div className="about-content">
        <p>
          {data.About.description_1} <br/><br/>
          {data.About.description_2} <br/><br/>
          {data.About.description_3} <br/>
        </p>
      </div> 
    </div>
  </section>;
};

export default About;