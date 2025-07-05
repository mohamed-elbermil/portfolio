import React, { useRef } from "react";
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
    image: "https://vinkit.co/content/images/2025/03/dressing-vinted.png",
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
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section className={styles["game-section"]} id="projects">
      <h2 className={styles["line-title"]}>Mes projets</h2>
      
      <div className={styles["carousel-wrapper"]}>
        {/* Flèche précédente */}
        <button 
          className={`${styles.navArrow} ${styles.prevArrow}`}
          onClick={scrollLeft}
          aria-label="Faire défiler vers la gauche"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>

        {/* Conteneur des projets */}
        <div className={styles["carousel-container"]} ref={carouselRef}>
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

        {/* Flèche suivante */}
        <button 
          className={`${styles.navArrow} ${styles.nextArrow}`}
          onClick={scrollRight}
          aria-label="Faire défiler vers la droite"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Project;
