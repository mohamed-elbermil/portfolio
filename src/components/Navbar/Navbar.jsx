import React from "react";
import styles from"./Navbar.module.css";

export const Navbar = () => {
  return (
    <>
      <nav>
        <div className={styles.navbar}>
          <span>Mohamed EL BERMIL</span>
            <ul>
              <li>
                <a href="#skills">Compétences</a>
              </li>
              <li>
                <a href="#experiences">Expériences</a>
              </li>
              <li>
                <a href="#formation">Formations</a>
              </li>
              <li>
                <a href="#">Projets</a>
              </li>
              <li>
                <a href="#" id={styles.contact}>
                  Contact
                </a>
              </li>
            </ul>
        </div> 
      </nav>
    </>
  );
};
