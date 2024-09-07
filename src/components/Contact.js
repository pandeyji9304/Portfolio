import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="social-link">
          LinkedIn
        </a>
        <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer" className="social-link">
          Email
        </a>
        <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className="social-link">
          GitHub
        </a>
      </div>
    </section>
  );
}

export default Contact;
