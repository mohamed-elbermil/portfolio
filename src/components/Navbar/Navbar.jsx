import React from 'react'
import './Navbar.modules.css'
import Logo from '../../assets/images/logo.png'
import CTALink from '../CTALink/CTALink'

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={Logo} alt="" />
      <ul className="navbar-list">
        <li className="navbar-item"><a href="#accueil">réalisations</a></li>
        <li className="navbar-item"><a href="#projets">a propos</a></li>
        <li className="navbar-item"><a href="#contact">services</a></li>
        <CTALink text="un besoin design ?" href="#contact" />
      </ul>
    </nav>
  );
};

export default Navbar;

