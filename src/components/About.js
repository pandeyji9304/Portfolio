import React from 'react';
import './About.css';

function About() {
  return (
    
    <section id="about" className="about">
      <div className="about-header">
        <p>What I Can Do</p>
        <h1>About Me</h1>
      </div>
      <div className="about-content">
        <div className="bio">
          <div className="bio-text">
            <h2>Passionate Designer & Developer</h2>
            <p>
              I am a UI/UX Designer and iOS Developer with a B.Tech in Computer Science Engineering. I blend design expertise with technical skills to create intuitive and engaging user experiences.
            </p>
            <p>
              My approach focuses on user-centered design, ensuring functionality and aesthetic appeal. I develop iOS applications with SwiftUI and integrate them with backend services to deliver complete solutions.
            </p>
          </div>
        </div>
        <div className="details">
          <div className="experience">
            <h3>Experience</h3>
            <ul>
              <li><strong>iOS Developer Intern at Infosys</strong> - [Month/Year] to [Month/Year]</li>
              <li><strong>Freelance UI/UX Designer</strong> - [Month/Year] to Present</li>
              <li><strong>Web Developer</strong> - [Month/Year] to [Month/Year]</li>
            </ul>
          </div>
          <div className="education">
            <h3>Education</h3>
            <ul>
              <li><strong>B.Tech in Computer Science Engineering</strong> - [University Name], [Year]</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
