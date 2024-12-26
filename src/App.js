
// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100; // Offset for nav height

    sections.forEach((section) => {
      const id = section.getAttribute('id');
      const offsetTop = section.offsetTop;
      const offsetHeight = section.offsetHeight;

      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        setActiveSection(id);
      }
    });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <nav className="navbar">
          <div class = "nav-container">
            <div class = "site-name">Mukhil's Portfolio</div>
            <div class = "nav-items">
              <ul>
                {
                ['hero', 'about', 'experience', 'education', 'skills', 'projects'].map((section) => (
                  <li
                    key={section}
                    className={activeSection === section ? 'active' : ''}
                    onClick={() => scrollToSection(section)}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </li>
                ))
              }
              </ul>
            </div>
          </div>
      </nav>
      <Hero id="hero" />
      <About id="about" />
      <Experience id="experience" />
      <Education id="education" />
      <Skills id="skills" />
      <Projects id="projects" />
    </div>
  );
}

export default App;
