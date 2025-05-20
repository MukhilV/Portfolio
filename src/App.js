
// App.js
import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import './App.css';
import Hero from './components/js/Hero';
import About from './components/js/About';
import Experience from './components/js/Experience';
import Education from './components/js/Education';
import Skills from './components/js/Skills';
import Projects from './components/js/Projects';
import Contact from './components/js/Contact';
import Footer from './components/js/Footer';
import ScrollToTop from './components/js/ScrollTop';
import data from './data/data';

import './components/css/Navbar.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 920);
  };

  const handleScroll = () => {
    if(window.scrollY >= 100){
      document.querySelector('.navbar').classList.add('navbar-opaque');
      // document.querySelector('.nav-icons').classList.add('custom-color');
    } else {
      document.querySelector('.navbar').classList.remove('navbar-opaque');
      // document.querySelector('.nav-icons').classList.remove('custom-color');
    }
    const sections = document.querySelectorAll('section');
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const scrollPosition = window.scrollY + navbarHeight  + 270; // Offset for nav height

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
        top: element.offsetTop - document.querySelector('.navbar').offsetHeight,
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

  // Check screen width to toggle mobile view
  useEffect(() => {

    handleResize(); // Initialize on component mount
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(()=>{
    if(isMobile) {
      if (document.querySelector('.hambuger-menu')) document.querySelector('.hambuger-menu').classList.add('order-1');
      if (document.querySelector('.site-name')) document.querySelector('.site-name').classList.add('order-2');
      if (document.querySelector('.nav-icons')) document.querySelector('.nav-icons').classList.add('order-3');
    } else {
      if (document.querySelector('.hambuger-menu')) document.querySelector('.hambuger-menu').classList.remove('order-1');
      if (document.querySelector('.site-name')) document.querySelector('.site-name').classList.remove('order-2');
      if (document.querySelector('.nav-icons')) document.querySelector('.nav-icons').classList.remove('order-3');
    }
  },[isMobile])

  useEffect(()=>{
    window.scrollTo(0,1);
  },[])

  const navItems = ['home', 'about', 'education', 'experience', 'skills', 'projects', 'contact'];
  const urls = data.Footer.URLs;

  return (
    <div className="App">
      <nav className="navbar">
      <div className="nav-container">
        <div className="site-name">MUKHIL V.</div>
        
        {isMobile ? (
          // Hamburger Menu for Mobile
          <div className="hamburger-menu">
            <button
              className="hamburger-icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </button>
            {isMenuOpen && (
              <div className="mobile-nav-items">
                <ul>
                  {navItems.map((section) => (
                    <li
                      key={section}
                      className={activeSection === section ? 'active' : ''}
                      onClick={() => {
                        scrollToSection(section);
                        setIsMenuOpen(false); // Close menu on item click
                      }}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </li>
                  ))}
                  <li>
                    <div className="mobile-nav-icons">
                      <a href={urls.linkedin} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="mobile-nav-icon" />
                      </a>
                      <a href={urls.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub className="mobile-nav-icon" />
                      </a>
                    </div>
                  </li>
                </ul>
                
              </div>
            )}
          </div>
        ) : (
          // Full Navigation Bar for Desktop
          <div className="nav-items">
            <ul>
              {navItems.map((section) => (
                <li
                  key={section}
                  className={activeSection === section ? 'active' : ''}
                  onClick={() => scrollToSection(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="nav-icons">
          <a href={urls.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="nav-icon" />
          </a>
          <a href={urls.github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="nav-icon" />
          </a>
        </div>
      </div>
    </nav>
      <Hero id="home" />
      <About id="about" />
      <Education id="education" />
      <Experience id="experience" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Contact id="contact" />
      <Footer id="footer" />
      <ScrollToTop id="scroll-top" />
    </div>
  );
}

export default App;
