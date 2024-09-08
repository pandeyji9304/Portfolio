import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';
import Footer from './components/Footer';
import SkillMarquee from './components/Skills';
import SkillList from './components/Skill';
import WebProjects from './components/Webprojects';
import SwiftProjects from './components/SwiftProjects';
import GraphicDesignProjects from './components/GraphicDesignProjects';

const App = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Hero />
      <SkillMarquee />
      <About />
      <SkillList/>
      <Projects />
      <WebProjects/>
      <SwiftProjects/>
      <GraphicDesignProjects/>
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;
