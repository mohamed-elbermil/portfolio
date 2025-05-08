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
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Work</a>
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
