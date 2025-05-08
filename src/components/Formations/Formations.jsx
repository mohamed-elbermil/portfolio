import React from "react";
import styles from "./Formations.module.css";

export const Formations = ({ date, school, formation, link, image }) => {
    return (
      <>
      <div className={styles.blocFormation}>
        <div className={styles.topLeft}>
          <img src={image} alt="Ecole" />
          <h2 className={styles.date}>{date}</h2>
        </div>
        <div className={styles.formationContainer}>
            <div className={styles.allSkills}>
                {school}
                {formation}
            </div>
            <a href={link}>Voir +</a>
        </div>

      </div>
      </>
    );
  };