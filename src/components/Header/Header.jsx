import React from "react";
import styles from "./Header.module.css";
import { Navbar } from "../Navbar/Navbar";
import { TabletCarousel } from "../TabletCarousel/TabletCarousel";

export const Header = () => {
  return (
    <>
      <Navbar />
      <header>
      <div className={styles.btnStatus}>
            <div className={styles.btn}>Permis B</div>
            <div className={styles.btn}>
              Recherche d’alterance à partir du 12/08/2025
            </div>
          </div>
        <div className={styles.text}>
          <h1>Hello, My names Mohamed lorem ipsum dolor</h1>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className={styles.btnNext}>
          <div className={styles.btn}>
            <a href="#">Curriculum vitae</a>
          </div>
          <div className={styles.btn}>
            <a href="#">lorem</a>
          </div>
        </div>
        <TabletCarousel />
      </header>
    </>
  );
};
