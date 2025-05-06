import React from "react";
import "./Navbar.module.css";

export const Navbar = () => {
  return (
    <>
      <nav>
        <div className="status">
          <span>Mohamed EL BERMIL</span>
          <div className="btnNnextTto">
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
            <a href="#" id="contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
