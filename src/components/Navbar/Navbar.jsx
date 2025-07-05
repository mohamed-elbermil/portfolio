import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.modules.css';
import Logo from '../../assets/images/logo.png';
import CTALink from '../CTALink/CTALink';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo-link">
        <img src={Logo} alt="Logo Mohamed EL BERMIL" />
      </Link>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/portfolio">réalisations</Link>
        </li>
        <li className="navbar-item">
          <Link to="/a-propos">à propos</Link>
        </li>
        <li className="navbar-item">
          <Link to="/services">services</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact">
            <CTALink text="un besoin design ?" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
