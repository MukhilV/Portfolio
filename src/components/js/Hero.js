import React from 'react';
import '../css/Hero.css';
import data from '../../data/data';


const Hero = ({ id }) => {
  return <section id={id} className="section">
    <div className="hero-container">

      <div>
        <h1>{data.Home.name}</h1>
        <h2>{data.Home.description}</h2>
      </div>
    </div>
  </section>;
};

export default Hero;