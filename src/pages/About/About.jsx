import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <Navbar />
      <section className="hero-section">
        <div className="container">
          <h1>À propos de moi</h1>
          <p className="subtitle">Développeur Front-end & Designer UI/UX passionné</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Mon parcours</h2>
              <p>
                Passionné par le développement web et le design depuis plusieurs années, 
                je combine créativité et expertise technique pour créer des expériences 
                numériques exceptionnelles.
              </p>
              <p>
                Fondateur de l'agence SOBLIM, je m'efforce d'aider les entreprises 
                à se démarquer dans l'univers digital avec des solutions innovantes 
                et des designs mémorables.
              </p>
            </div>
            
            <div className="skills-section">
              <h3>Mes compétences</h3>
              <div className="skills-grid">
                <div className="skill-category">
                  <h4>Développement</h4>
                  <ul>
                    <li>React / Next.js</li>
                    <li>JavaScript / TypeScript</li>
                    <li>HTML5 / CSS3 / Sass</li>
                    <li>Node.js / Express</li>
                  </ul>
                </div>
                
                <div className="skill-category">
                  <h4>Design</h4>
                  <ul>
                    <li>UI/UX Design</li>
                    <li>Figma / Adobe XD</li>
                    <li>Photoshop / Illustrator</li>
                    <li>Design System</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 