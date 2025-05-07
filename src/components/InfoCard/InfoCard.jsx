import React from "react";
import styles from "./InfoCard.module.css";

export const InfoCard = ({ title, description, subtitle }) => {
  return (
    <div className={styles.infosContainer}>
      <span className={styles.span}>{title}</span>
      <h2>{description}</h2>
      <h3>{subtitle}</h3>
    </div>
  );
};

