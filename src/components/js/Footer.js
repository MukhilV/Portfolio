import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import '../css/Footer.css';
import data from '../../data/data';

function Footer() {
  const urls = data.Footer.URLs;
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href={urls.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="footer-icon" />
        </a>
        <a href={urls.github} target="_blank" rel="noopener noreferrer">
          <FaGithub className="footer-icon" />
        </a>
      </div>
      <div className="footer-text">
        © {new Date().getFullYear()} Mukhil Venkataramanan. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
