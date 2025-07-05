import React from 'react';
import './CTALink.css';

const CTALink = ({ 
  text = "un besoin design ?", 
  href = "#contact", 
  icon = "fa-solid fa-paper-plane",
  className = "",
  iconClassName = "rotate-on-hover"
}) => {
  return (
    <li className={`navbar-item cta ${className}`}>
      <a href={href}>
        <div className="cta-icon">
          <i className={`${icon} ${iconClassName}`}></i>
        </div>
        {text}
      </a>
    </li>
  );
};

export default CTALink; 