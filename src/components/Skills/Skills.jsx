import React from "react";
import styles from "./Skills.module.css";

export const Skills = ({ title, technologies }) => {
    return (
      <>
      <div className={styles.blocSkill}>
        <h2 className={styles.skillsTitle}>{title}</h2>
        <div className={styles.skillsContainer}>
            <div className={styles.allSkills}>

          {technologies.map((tech, index) => (
            <span key={index} className={styles.techButton}>
              {tech}
            </span>
          ))}
            </div>
        </div>

      </div>
      </>
    );
  };