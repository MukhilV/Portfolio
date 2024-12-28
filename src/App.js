
// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Hero from './components/js/Hero';
import About from './components/js/About';
import Experience from './components/js/Experience';
import Education from './components/js/Education';
import Skills from './components/js/Skills';
import Projects from './components/js/Projects';
import Contact from './components/js/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100; // Offset for nav height

    sections.forEach((section) => {
      const id = section.getAttribute('id');
      const offsetTop = section.offsetTop;
      const offsetHeight = section.offsetHeight;

      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        setActiveSection(id);
        section.classList.add('visible');
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

  useEffect(()=>{
    window.scrollTo(0,1);
  },[])

  const navItems = ['home', 'about', 'experience', 'education', 'skills', 'projects', 'contact'];

  return (
    <div className="App">
      <nav className="navbar">
          <div className = "nav-container">
            <div className = "site-name">Mukhil Venkataramanan</div>
            <div className = "nav-items">
              <ul>
                {
                navItems.map((section) => (
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
      <Hero id="home" />
      <About id="about" />
      <Experience id="experience" />
      <Education id="education" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Contact id="contact" />
    </div>
  );
}

export default App;
