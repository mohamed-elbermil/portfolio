import React from "react";
import styles from "./ExperiencesCard.module.css";

export const ExperiencesCard = ({ job, company, tasks, date }) => {
  return (
    <div className={styles.ExperiencesContainer}>
      <div className={styles.companyDate}>
        <span className={styles.span}>{job}</span>
        <span className={styles.date}>{date}</span>
      </div>
      <h2 className={styles.company}>{company}</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={styles.task}>
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
};
