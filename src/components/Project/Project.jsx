import { Link } from 'react-router-dom';
import styles from './Project.module.css';

const projects = [
  {
    title: 'Fitness-Area',
    tags:  ['React', 'CSS3', 'JavaScript'],
    image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/39a8ec147774929.Y3JvcCwxMDgwLDg0NCwwLDg1.png',
    description: 'Interface fitness développée en bootcamp, migrée vers React. Design amélioré et performances optimisées.',
    link: 'https://fitness-area-mohamed-e.vercel.app/',
  },
  {
    title: 'Netflix Interface',
    tags:  ['React', 'Bootstrap', 'JavaScript'],
    image: 'https://www.journaldugeek.com/app/uploads/2025/01/netflix-jeux-mobiles.jpg',
    description: 'Reproduction pixel-perfect de l\'interface Netflix — migration HTML/CSS vers React.',
    link: 'https://github.com/mohamed-elbermil/netflix-interface',
  },
  {
    title: 'DressCode',
    tags:  ['React', 'API', 'Automation'],
    image: 'https://vinkit.co/content/images/2025/03/dressing-vinted.png',
    description: 'Outil d\'automatisation pour la rédaction de descriptions vestimentaires sur Vinted.',
    link: 'https://dress-code-wheat.vercel.app/',
  },
  {
    title: 'Miniatures YouTube',
    tags:  ['Figma', 'Illustrator', 'Design'],
    image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/9024c0228643009.Y3JvcCw2NTUsNTEyLDcwMiwyNzQ.png',
    description: 'Création de miniatures attractives pour YouTube, mettant en valeur mes compétences graphiques.',
    link: 'https://www.behance.net/gallery/228643009/Youtubes-Thumbnails',
  },
  {
    title: 'Kaza — Agence Immo',
    tags:  ['Figma', 'UI/UX', 'Maquette'],
    image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/f20352228694521.Y3JvcCw5NjcsNzU3LDE5OCw5NQ.png',
    description: 'Maquette UX/UI complète pour une agence immobilière — parcours utilisateur et prototypage.',
    link: 'https://www.behance.net/gallery/228694521/Kaza-Agence-Immobiliere',
  },
];

/* ── 3-D tilt helpers ──────────────────────────────────────── */
const onTiltMove = (e) => {
  const card = e.currentTarget;
  const { left, top, width, height } = card.getBoundingClientRect();
  const x = (e.clientX - left) / width  - 0.5;
  const y = (e.clientY - top)  / height - 0.5;
  card.style.transform =
    `perspective(900px) rotateX(${y * -10}deg) rotateY(${x * 10}deg) scale(1.025)`;
};

const onTiltLeave = (e) => {
  e.currentTarget.style.transform =
    'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)';
};

/* ── Component ─────────────────────────────────────────────── */
const Project = () => (
  <section className={styles.section} id="projects">
    <div className={styles.sectionHeader}>
      <div className={styles.label}>01 · Réalisations</div>
      <Link to="/portfolio" className={styles.viewAll}>
        Voir tout <i className="fa-solid fa-arrow-right" />
      </Link>
    </div>

    <div className={styles.bento}>
      {projects.map((project, i) => (
        <a
          key={i}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.item} ${styles[`item${i}`]}`}
        >
          <div
            className={styles.card}
            style={{ backgroundImage: `url(${project.image})` }}
            onMouseMove={onTiltMove}
            onMouseLeave={onTiltLeave}
          >
            <div className={styles.overlay}>
              <div className={styles.overlayContent}>
                <div className={styles.tags}>
                  {project.tags.map(tag => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.description}</p>
                <span className={styles.viewCta}>
                  Voir le projet
                  <i className="fa-solid fa-arrow-right" />
                </span>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default Project;
