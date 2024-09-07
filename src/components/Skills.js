import React from 'react';
import './SkillMarquee.css';
import { FaReact, FaApple, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa'; // Example icons

const skills = [
  { name: 'React', icon: <FaReact /> },
  { name: 'SwiftUI', icon: <FaApple /> },
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJs /> },
];

function SkillMarquee() {
  return (
    <section className="skills-marquee">
      <div className="skills-marquee-container">
        <ul className="skills-marquee-list">
          {skills.map((skill, index) => (
            <li key={index} className="skills-marquee-item">
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default SkillMarquee;
