import React, { useState } from 'react';
import './Projects.css';

const projects = [
  {
    title: "Project 1",
    description: "This is an amazing UI/UX project that solves real user problems.",
    image: "project1.jpg",
    link: "https://pandeyji9304.framer.website/#about"
  },
  {
    title: "Project 2",
    description: "This is another awesome project focusing on mobile app design.",
    image: "project2.jpg",
    link: "https://example.com/project2"
  },
  {
    title: "Project 3",
    description: "Innovative project with a focus on user-centered design and technology.",
    image: "project3.jpg",
    link: "https://example.com/project3"
  },
];

const Projects = () => {
  const [flipped, setFlipped] = useState(Array(projects.length).fill(false));

  const handleFlip = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  return (
    <section className="projects" id="projects">
    <p>Explore my work</p>
      <h1>Case Study</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
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

export default Projects;
