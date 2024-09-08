import React from 'react';
import './SkillList.css';

function SkillList() {
  const skillCategories = [
    { category: 'Design', items: ['UI/UX Design', 'Wireframing', 'Prototyping'] },
    { category: 'Development', items: ['SwiftUI', 'React', 'JavaScript', 'HTML/CSS'] },
    { category: 'Tools', items: ['Figma', 'Adobe XD', 'Git', 'Postman'] },
    { category: 'Soft Skills', items: ['Problem Solving', 'Team Collaboration', 'Communication'] },
  ];

  return (
    <section id="skills" className="skills-list">
      <div className="skills-list-header">
        <p>What I Can Do</p>
        <h1>Skills</h1>
      </div>
      <div className="skills-list-content">
        {skillCategories.map((skillCategory, index) => (
          <div key={index} className="skill-category">
            <h2>{skillCategory.category}</h2>
            <ul>
              {skillCategory.items.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillList;