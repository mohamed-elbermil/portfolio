import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Project from '../../components/Project/Project';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio-page">
      <Navbar />
      <section className="hero-section">
        <div className="container">
          <h1>Mon Portfolio</h1>
          <p className="subtitle">Découvrez mes réalisations en développement web et design</p>
        </div>
      </section>

      <Project />
    </div>
  );
};

export default Portfolio; 