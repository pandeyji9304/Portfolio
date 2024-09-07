import React, { useState, useEffect, useMemo } from 'react';
import './Hero.css';

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');

  const roles = useMemo(() => ["UI/UX Designer", "Fullstack Developer", "iOS Developer", "Graphic Designer"], []);

  useEffect(() => {
    const typeInterval = setInterval(() => {
      setText(text => roles[index].slice(0, text.length + 1));
    }, 100);

    if (text === roles[index]) {
      clearInterval(typeInterval);
      setTimeout(() => {
        setIndex((index + 1) % roles.length);
        setText('');
      }, 2000);
    }

    return () => clearInterval(typeInterval);
  }, [text, index, roles]);

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="text-container">
          <h1>Hi, I'm Ritik Pandey</h1>
          <h3><span className="typing-effect">{text}</span></h3>
          <p>I create visually stunning and user-friendly experiences that captivate users and solve real-world problems.</p>
          <a href="#projects" className="cta-btn">View My Work</a>
          <a href="#projects" className="cta-btn">Resume</a>
        </div>
        <div className="rectangle-container">
          <div className="rectangle"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
