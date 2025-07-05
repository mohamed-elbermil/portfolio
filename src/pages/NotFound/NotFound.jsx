import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <Navbar />
      <div className="container">
        <div className="not-found-content">
          <div className="error-code">404</div>
          <h1>Page non trouvée</h1>
          <p>La page que vous recherchez n'existe pas ou a été déplacée.</p>
          
          <div className="navigation-links">
            <Link to="/" className="btn-primary">
              Retour à l'accueil
            </Link>
            <Link to="/contact" className="btn-secondary">
              Me contacter
            </Link>
          </div>
          
          <div className="suggested-pages">
            <h3>Pages populaires :</h3>
            <ul>
              <li><Link to="/a-propos">À propos</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 