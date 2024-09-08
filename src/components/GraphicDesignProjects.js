import React, { useState } from 'react';
import './Projects.css'; // Reuse the same CSS file for consistency

const graphicDesignProjects = [
  {
    title: "Design Project 1",
    description: "A visually stunning graphic design project showcasing modern design trends.",
    image: "designproject1.jpg",
    link: "https://example.com/designproject1"
  },
  {
    title: "Design Project 2",
    description: "An innovative graphic design work with a focus on creative visual storytelling.",
    image: "designproject2.jpg",
    link: "https://example.com/designproject2"
  },
  {
    title: "Design Project 3",
    description: "A cutting-edge design project featuring unique graphics and impactful visuals.",
    image: "designproject3.jpg",
    link: "https://example.com/designproject3"
  },
];

const GraphicDesignProjects = () => {
  const [flipped, setFlipped] = useState(Array(graphicDesignProjects.length).fill(false));

  const handleFlip = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  return (
    <section className="projects" id="graphic-design-projects">
      <h1>Graphic Design Projects</h1>
      <div className="projects-grid">
        {graphicDesignProjects.map((project, index) => (
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

export default GraphicDesignProjects;
