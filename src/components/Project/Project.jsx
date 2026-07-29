import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Project.module.css';
import { CATEGORIES, projects } from '../../data/projects';

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
  const Tag = isPlaceholder ? 'div' : Link;
  const linkProps = isPlaceholder ? {} : { to: `/portfolio/${project.slug}` };

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
