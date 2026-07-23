import { useEffect, useRef, useState } from 'react';
import styles from './Project.module.css';

const CATEGORIES = ['Tous', 'Graphisme', 'Web', 'Vidéo'];

const projects = [
  {
    title: 'Fitness-Area',
    category: 'Web',
    tags: ['React', 'CSS3', 'JavaScript'],
    image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/39a8ec147774929.Y3JvcCwxMDgwLDg0NCwwLDg1.png',
    description: 'Interface fitness développée en bootcamp, migrée vers React. Design amélioré et performances optimisées.',
    link: 'https://fitness-area-mohamed-e.vercel.app/',
  },
  {
    title: 'Netflix Interface',
    category: 'Web',
    tags: ['React', 'Bootstrap', 'JavaScript'],
    image: 'https://www.journaldugeek.com/app/uploads/2025/01/netflix-jeux-mobiles.jpg',
    description: "Reproduction pixel-perfect de l'interface Netflix — migration HTML/CSS vers React.",
    link: 'https://github.com/mohamed-elbermil/netflix-interface',
  },
  {
    title: 'DressCode',
    category: 'Web',
    tags: ['React', 'API', 'Automation'],
    image: 'https://vinkit.co/content/images/2025/03/dressing-vinted.png',
    description: "Outil d'automatisation pour la rédaction de descriptions vestimentaires sur Vinted.",
    link: 'https://dress-code-wheat.vercel.app/',
  },
  {
    title: 'Miniatures YouTube',
    category: 'Graphisme',
    tags: ['Figma', 'Illustrator', 'Design'],
    image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/9024c0228643009.Y3JvcCw2NTUsNTEyLDcwMiwyNzQ.png',
    description: 'Création de miniatures attractives pour YouTube, mettant en valeur mes compétences graphiques.',
    link: 'https://www.behance.net/gallery/228643009/Youtubes-Thumbnails',
  },
  {
    title: 'Kaza — Agence Immo',
    category: 'Graphisme',
    tags: ['Figma', 'UI/UX', 'Maquette'],
    image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/f20352228694521.Y3JvcCw5NjcsNzU3LDE5OCw5NQ.png',
    description: 'Maquette UX/UI complète pour une agence immobilière — parcours utilisateur et prototypage.',
    link: 'https://www.behance.net/gallery/228694521/Kaza-Agence-Immobiliere',
  },
  {
    title: '[À COMPLÉTER]',
    category: 'Vidéo',
    tags: ['Vidéo'],
    image: null,
    description: '[À COMPLÉTER — description du montage vidéo]',
    link: null,
  },
  {
    title: '[À COMPLÉTER]',
    category: 'Vidéo',
    tags: ['Vidéo'],
    image: null,
    description: '[À COMPLÉTER — description du montage vidéo]',
    link: null,
  },
];

const catClass = (category) => ({
  Graphisme: styles.catGraphisme,
  Web: styles.catWeb,
  Vidéo: styles.catVideo,
}[category] || '');

/* ── Single card (grid or list variant) ───────────────────────── */
function Card({ project, index, view }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible');
          observer.unobserve(node);
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const isPlaceholder = !project.link;
  const Tag = isPlaceholder ? 'div' : 'a';
  const linkProps = isPlaceholder
    ? {}
    : { href: project.link, target: '_blank', rel: 'noopener noreferrer' };

  return (
    <Tag
      ref={cardRef}
      className={`${styles.card} ${view === 'list' ? styles.cardList : styles.cardGrid} reveal`}
      style={{ transitionDelay: `${Math.min(index, 8) * 60}ms` }}
      {...linkProps}
    >
      <div className={styles.thumb}>
        {project.image ? (
          <img src={project.image} alt="" loading="lazy" className={styles.thumbImg} />
        ) : (
          <div className={styles.thumbPlaceholder}>
            <i className="fa-solid fa-clapperboard" />
            <span>À compléter</span>
          </div>
        )}

        <div className={styles.thumbOverlay}>
          <div className={styles.tags}>
            {project.tags.map(tag => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
          {!isPlaceholder && (
            <span className={styles.viewCta}>
              Voir le projet <i className="fa-solid fa-arrow-up-right" />
            </span>
          )}
        </div>
      </div>

      <div className={styles.caption}>
        <div className={styles.captionTop}>
          <h3 className={styles.cardTitle}>{project.title}</h3>
          <span className={`${styles.catDot} ${catClass(project.category)}`} />
        </div>
        <p className={styles.cardDesc}>{project.description}</p>
      </div>
    </Tag>
  );
}

/* ── Component ─────────────────────────────────────────────── */
const Project = () => {
  const [category, setCategory] = useState('Tous');
  const [view, setView] = useState('grid');

  const filtered = category === 'Tous'
    ? projects
    : projects.filter(p => p.category === category);

  return (
    <section className={styles.section} id="portfolio">
      <div className={styles.sectionHeader}>
        <span className="eyebrow">
          <span className="eyebrow__index">01</span>
          <span className="eyebrow__rule" />
          Portfolio
        </span>
        <h2 className={styles.sectionTitle}>Réalisations</h2>
      </div>

      <div className={styles.controls}>
        <div className={styles.filters} role="tablist" aria-label="Filtrer les projets">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              role="tab"
              aria-selected={category === cat}
              className={`${styles.filterBtn} ${category === cat ? styles.filterActive : ''}`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={styles.viewToggle} role="group" aria-label="Mode d'affichage">
          <button
            aria-label="Vue grille"
            aria-pressed={view === 'grid'}
            className={`${styles.viewBtn} ${view === 'grid' ? styles.viewActive : ''}`}
            onClick={() => setView('grid')}
          >
            <i className="fa-solid fa-grip" />
          </button>
          <button
            aria-label="Vue liste"
            aria-pressed={view === 'list'}
            className={`${styles.viewBtn} ${view === 'list' ? styles.viewActive : ''}`}
            onClick={() => setView('list')}
          >
            <i className="fa-solid fa-list" />
          </button>
        </div>
      </div>

      <div className={view === 'list' ? styles.list : styles.grid} key={view}>
        {filtered.map((project, i) => (
          <Card key={`${project.title}-${i}`} project={project} index={i} view={view} />
        ))}
      </div>
    </section>
  );
};

export default Project;
