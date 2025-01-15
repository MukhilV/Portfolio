import React from 'react';
import '../css/Hero.css';
import data from '../../data/data';


const Hero = ({ id }) => {
  return <section id={id} className="section hero-bg">
    <div className="hero-container">

      <div>
        <div className='hero-name'>{data.Home.name}</div>
        <div className='hero-desc'>{data.Home.description}</div>
      </div>
    </div>
  </section>;
};

export default Hero;