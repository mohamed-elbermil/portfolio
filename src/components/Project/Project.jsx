import React, { useState } from "react";
import styles from "./Project.module.css"; // ou .scss si tu utilises Sass

const projects = [
  {
    title: "Fitness-Area",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/39a8ec147774929.Y3JvcCwxMDgwLDg0NCwwLDg1.png",
    description:
      "Fitness-Area est un projet initialement développé lors d'un bootcamp en HTML, CSS et JavaScript. Avec le temps, je m'efforce de l'améliorer tant sur le plan esthétique que fonctionnel. Le projet a récemment été migré vers React à des fin d'optimisation",
    link:"https://fitness-area-mohamed-e.vercel.app/"
  },
  {
    title: "Netflix",
    image: "https://www.journaldugeek.com/app/uploads/2025/01/netflix-jeux-mobiles.jpg",
    description:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
    link:"https://github.com/mohamed-elbermil/netflix-interface"
  },
  {
    title: "DressCode",
    image: "https://www.yudiz.com/codepen/expandable-animated-card-slider/rdr-2.jpg",
    description:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
    link:"https://github.com/mohamed-elbermil/DressCode"
  },
  {
    title: "Miniature Youtube",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/9024c0228643009.Y3JvcCw2NTUsNTEyLDcwMiwyNzQ.png",
    description:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
    link:"https://www.behance.net/gallery/228643009/Youtubes-Thumbnails"
  },
  {
    title: "Kaza",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/f20352228694521.Y3JvcCw5NjcsNzU3LDE5OCw5NQ.png",
    description:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
    link:"https://www.behance.net/gallery/228694521/Kaza-Agence-Immobiliere"
  },
];

const Project = () => {

  return (
    <section className={styles["game-section"]}>
      <h2 className={styles["line-title"]}>Mes projets</h2>
      <div className={styles["carousel-container"]}>
        {projects.map((game, index) => (
          <a
            key={index}
            href={game.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <div
              className={styles.item}
              style={{ backgroundImage: `url(${game.image})` }}
            >
              <div className={styles["item-desc"]}>
                <h3 className={styles['title']}>{game.title}</h3>
                <p>{game.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Project;
