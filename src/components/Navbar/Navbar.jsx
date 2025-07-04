import React from 'react'
import './Navbar.modules.css'
import Logo from '../../assets/images/logo.png'
const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={Logo} alt="" />
      <ul className="navbar-list">
        <li className="navbar-item"><a href="#accueil">réalisations</a></li>
        <li className="navbar-item"><a href="#projets">a propos</a></li>
        <li className="navbar-item"><a href="#contact">services</a></li>
        <li className="navbar-item cta"><a href="#contact"><div className="cta-icon"><i className="fa-solid fa-paper-plane rotate-on-hover"></i></div> un besoin design ?</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

