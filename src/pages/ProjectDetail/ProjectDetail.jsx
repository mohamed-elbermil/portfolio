import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import { projects } from '../../data/projects';
import styles from './ProjectDetail.module.css';

const catClass = (category) => ({
  Graphisme: styles.catGraphisme,
  Web: styles.catWeb,
  Vidéo: styles.catVideo,
}[category] || '');

const isPlaceholder = (text) => typeof text === 'string' && text.startsWith('[');

function NotFoundInline() {
  return (
    <div className={styles.page}>
      <Navbar />
      <div className={styles.notFound}>
        <p>Projet introuvable.</p>
        <Link to="/#portfolio" className={styles.backLink}>
          <i className="fa-solid fa-arrow-left" /> Retour au portfolio
        </Link>
      </div>
    </div>
  );
}

function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) return <NotFoundInline />;

  const index = projects.findIndex((p) => p.slug === slug);
  const number = String(index + 1).padStart(2, '0');

  return (
    <div className={styles.page}>
      <Navbar />

      <div className={styles.container}>
        <Link to="/#portfolio" className={styles.backLink}>
          <i className="fa-solid fa-arrow-left" /> Retour au portfolio
        </Link>

        {/* Hero */}
        <div className={styles.hero}>
          <img src={project.heroImage || project.image} alt="" className={styles.heroImg} />
        </div>

        {/* Header row: title + meta */}
        <div className={styles.headerRow}>
          <div className={styles.headerLeft}>
            <span className="eyebrow">
              <span className="eyebrow__index">{number}</span>
              <span className="eyebrow__rule" />
              <span className={`${styles.catDot} ${catClass(project.category)}`} />
              {project.category}
            </span>
            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.description}>{project.description}</p>
          </div>

          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Année</span>
              <span className={`${styles.metaValue} ${isPlaceholder(project.year) ? styles.placeholder : ''}`}>
                {project.year}
              </span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Disciplines</span>
              <div className={styles.metaTags}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.metaTag}>{tag}</span>
                ))}
              </div>
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.metaLink}>
              Voir en ligne <i className="fa-solid fa-arrow-up-right" />
            </a>
          </div>
        </div>

        {/* Context / Problem */}
        <div className={styles.blocks}>
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>Contexte</h2>
            <p className={styles.blockText}>{project.description}</p>
          </div>
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>Problématique</h2>
            <p className={`${styles.blockText} ${isPlaceholder(project.problem) ? styles.placeholder : ''}`}>
              {project.problem}
            </p>
          </div>
        </div>

        {/* Gallery */}
        <div className={styles.gallerySection}>
          <span className="eyebrow">
            <span className="eyebrow__index">+</span>
            <span className="eyebrow__rule" />
            Galerie
          </span>

          <div className={styles.gallery}>
            {project.gallery && project.gallery.length > 0 ? (
              project.gallery.map((src, i) => (
                <div
                  key={src}
                  className={`${styles.galleryItem} ${i === 0 ? styles.galleryBig : ''}`}
                >
                  <img src={src} alt="" className={styles.galleryImg} />
                </div>
              ))
            ) : (
              <>
                <div className={`${styles.galleryItem} ${styles.galleryBig}`}>
                  <img src={project.image} alt="" className={styles.galleryImg} />
                </div>
                <div className={styles.galleryItem}>
                  <div className={styles.galleryPlaceholder}>
                    <i className="fa-solid fa-image" />
                    <span>À compléter</span>
                  </div>
                </div>
                <div className={styles.galleryItem}>
                  <div className={styles.galleryPlaceholder}>
                    <i className="fa-solid fa-image" />
                    <span>À compléter</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Closing CTA */}
        <div className={styles.closing}>
          <p className={styles.closingText}>Envie d'en voir plus&nbsp;?</p>
          <div className={styles.closingActions}>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btnPrimary">
              Voir le site en ligne <i className="fa-solid fa-arrow-up-right" />
            </a>
            <Link to="/#portfolio" className="btnGhost">
              <i className="fa-solid fa-arrow-left" /> Tous les projets
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
