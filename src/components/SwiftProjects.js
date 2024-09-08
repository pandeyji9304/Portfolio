import React, { useState } from 'react';
import './Projects.css'; // Reuse the same CSS file for consistency

const swiftProjects = [
  {
    title: "Swift Project 1",
    description: "A powerful Swift application with a sleek design and robust features.",
    image: "swiftproject1.jpg",
    link: "https://example.com/swiftproject1"
  },
  {
    title: "Swift Project 2",
    description: "An intuitive Swift app that leverages advanced iOS technologies.",
    image: "swiftproject2.jpg",
    link: "https://example.com/swiftproject2"
  },
  {
    title: "Swift Project 3",
    description: "A modern Swift project focusing on user-centric design and performance.",
    image: "swiftproject3.jpg",
    link: "https://example.com/swiftproject3"
  },
];

const SwiftProjects = () => {
  const [flipped, setFlipped] = useState(Array(swiftProjects.length).fill(false));

  const handleFlip = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  return (
    <section className="projects" id="swift-projects">
      <h1>Swift Projects</h1>
      <div className="projects-grid">
        {swiftProjects.map((project, index) => (
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

export default SwiftProjects;
