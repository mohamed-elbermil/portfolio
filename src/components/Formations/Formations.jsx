import React from "react";
import styles from "./Formations.module.css";
import { formations } from "../../data/formation";

export const Formations = () => {
  console.log(formations.length);

  return (
    <>
      {formations.map((item, index) => (
        <div key={index} className={styles.blocFormation}>
          <div className={styles.topLeft}>
            {item.image && item.image.src ? (
              <img 
                src={item.image.src} 
                alt={item.image.alt || "Image de la formation"} 
                onError={(e) => e.target.src = "default-image.jpg"} 
              />
            ) : (
              <img src="default-image.jpg" alt="Image par défaut" />
            )}
            <h2 className={styles.date}>{item.date}</h2>
          </div>
          <div className={styles.formationContainer}>
            <div className={styles.allSkills}>
              <p>{item.school}</p>
              <p>{item.formation}</p>
            </div>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              Voir +
            </a>
          </div>
        </div>
      ))}
    </>
  );
};
