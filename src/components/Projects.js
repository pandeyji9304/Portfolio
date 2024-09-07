import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    title: "Project 1",
    description: "This is an amazing UI/UX project that solves real user problems.",
    image: "project1.jpg"
  },
  {
    title: "Project 2",
    description: "This is another awesome project focusing on mobile app design.",
    image: "project2.jpg"
  },
  {
    title: "Project 3",
    description: "Innovative project with a focus on user-centered design and technology.",
    image: "project3.jpg"
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            whileHover={{ scale: 1.05, boxShadow: "0 15px 40px rgba(0, 0, 0, 0.2)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
