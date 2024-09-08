// WebProjects.js
import React, { useState } from 'react';
import './Projects.css'; // Reuse the same CSS file for consistency

const webProjects = [
  {
    title: "Web Project 1",
    description: "A cutting-edge website project with responsive design and modern features.",
    image: "webproject1.jpg",
    link: "https://example.com/webproject1"
  },
  {
    title: "Web Project 2",
    description: "An innovative web application focusing on interactive user experiences.",
    image: "webproject2.jpg",
    link: "https://example.com/webproject2"
  },
  {
    title: "Web Project 3",
    description: "A robust web solution that integrates advanced technologies for optimal performance.",
    image: "webproject3.jpg",
    link: "https://example.com/webproject3"
  },
];

const WebProjects = () => {
  const [flipped, setFlipped] = useState(Array(webProjects.length).fill(false));

  const handleFlip = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  return (
    <section className="projects" id="web-projects">
      <h1>Web Projects</h1>
      <div className="projects-grid">
        {webProjects.map((project, index) => (
          <div
            className={`project-card ${flipped[index] ? 'flipped' : ''}`}
            key={index}
            onClick={() => handleFlip(index)}
          >
            <div className="project-card-inner">
              <div className="project-card-front">
                <img src={project.image} alt={project.title} />
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <a href={project.link} className="view-more-btn" target="_blank" rel="noopener noreferrer">
                    View More
                  </a>
                </div>
              </div>
              <div className="project-card-back">
                <p>{project.description}</p>
              </div>
              {/* Hover text */}
              <div className="hover-text">Flip</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WebProjects;
