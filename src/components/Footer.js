import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <a href="#Hero">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Ritik Pandey. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
