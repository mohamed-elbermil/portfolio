import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.modules.css';
import Logo from '../../assets/images/logo.png';
import CTALink from '../CTALink/CTALink';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo-link" onClick={closeMenu}>
        <img src={Logo} alt="Logo Mohamed EL BERMIL" />
      </Link>
      
      {/* Menu hamburger pour mobile */}
      <button 
        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`navbar-list ${isMenuOpen ? 'active' : ''}`}>
        <li className="navbar-item">
          <Link to="/" onClick={closeMenu}>accueil</Link>
        </li>
        <li className="navbar-item">
          <Link to="/portfolio" onClick={closeMenu}>réalisations</Link>
        </li>
        {/* <li className="navbar-item">
          <Link to="/a-propos" onClick={closeMenu}>à propos</Link>
        </li> */}
        <li className="navbar-item">
          <Link to="/services" onClick={closeMenu}>services</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact" onClick={closeMenu}>
            <CTALink text="un besoin particulier ?" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
