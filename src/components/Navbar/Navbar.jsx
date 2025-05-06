import React from "react";
import "./Navbar.module.css";

export const Navbar = () => {
  return (
    <>
      <nav>
        <div className="status">
          <span>Mohamed EL BERMIL</span>
          <div className="btn-status">
            <div className="btn">Permis</div>
            <div className="btn">
              Recherche d’alterance à partir du 12/08/2025
            </div>
          </div>
        </div>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            {/* arrow */}
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};
