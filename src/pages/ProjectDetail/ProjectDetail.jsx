import { useEffect, useState } from 'react';
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
  const [lightboxSrc, setLightboxSrc] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (!lightboxSrc) return;
    const onKeyDown = (e) => { if (e.key === 'Escape') setLightboxSrc(null); };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightboxSrc]);

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
          <img
            src={project.heroImage || project.image}
            alt=""
            className={`${styles.heroImg} ${project.galleryFramed ? styles.heroImgFramed : ''}`}
          />
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
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.metaLink}>
                Voir en ligne <i className="fa-solid fa-arrow-up-right" />
              </a>
            )}
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

          {project.compareEmbed && (
            <div className={styles.compareWrapper}>
              <iframe
                src={project.compareEmbed}
                title={project.title}
                className={`juxtapose ${styles.compareFrame}`}
                frameBorder="0"
                scrolling="no"
              />
            </div>
          )}

          {project.videoEmbed ? (
            <div className={styles.videoWrapper}>
              <iframe
                src={project.videoEmbed}
                title={project.title}
                className={styles.videoFrame}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          ) : (
            <div className={`${styles.gallery} ${project.galleryFramed ? styles.galleryFramed : ''}`}>
              {project.gallery && project.gallery.length > 0 ? (
                project.gallery.map((src, i) => (
                  <div
                    key={src}
                    className={`${styles.galleryItem} ${i === 0 && !project.compareEmbed && !project.galleryEven ? styles.galleryBig : ''}`}
                    onClick={() => setLightboxSrc(src)}
                  >
                    <img
                      src={src}
                      alt=""
                      className={`${styles.galleryImg} ${project.galleryFramed ? styles.galleryImgFramed : ''}`}
                    />
                  </div>
                ))
              ) : (
                <>
                  <div
                    className={`${styles.galleryItem} ${styles.galleryBig}`}
                    onClick={() => setLightboxSrc(project.image)}
                  >
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
          )}

          {project.videos && project.videos.length > 0 && (
            <div className={styles.videosGrid}>
              {project.videos.map((video) => {
                const key = video.src || video.embed;
                const media = video.embed ? (
                  <iframe
                    src={video.embed}
                    title={video.title || project.title}
                    className={styles.videoFrame}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                ) : (
                  <video
                    src={video.src}
                    controls
                    preload="metadata"
                    className={styles.videoFrame}
                  />
                );

                return video.title || video.description ? (
                  <div key={key} className={styles.videoFeatureRow}>
                    <div className={styles.videoWrapper}>{media}</div>
                    <div className={styles.videoFeatureText}>
                      {video.title && <h3 className={styles.videoFeatureTitle}>{video.title}</h3>}
                      {video.description && (
                        <p className={styles.videoFeatureDesc}>{video.description}</p>
                      )}
                    </div>
                  </div>
                ) : (
                  <div
                    key={key}
                    className={`${styles.videoItem} ${video.featured ? styles.videoItemFeatured : ''}`}
                  >
                    <div className={styles.videoWrapper}>{media}</div>
                    {video.label && <p className={styles.videoLabel}>{video.label}</p>}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* 3D model (Sketchfab) */}
        {project.sketchfab && (
          <div className={styles.modelSection}>
            <span className="eyebrow">
              <span className="eyebrow__index">+</span>
              <span className="eyebrow__rule" />
              Modèle 3D interactif
            </span>

            <div className={styles.modelWrapper}>
              <iframe
                title={project.sketchfab.title}
                src={project.sketchfab.embed}
                className={styles.modelFrame}
                frameBorder="0"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                allowFullScreen
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                xr-spatial-tracking="true"
                execution-while-out-of-viewport="true"
                execution-while-not-rendered="true"
                web-share="true"
              />
            </div>
            <p className={styles.modelCredit}>
              <a href={project.sketchfab.modelUrl} target="_blank" rel="noopener noreferrer nofollow">
                {project.sketchfab.title}
              </a>{' '}
              par{' '}
              <a href={project.sketchfab.authorUrl} target="_blank" rel="noopener noreferrer nofollow">
                {project.sketchfab.author}
              </a>{' '}
              sur{' '}
              <a href="https://sketchfab.com" target="_blank" rel="noopener noreferrer nofollow">
                Sketchfab
              </a>
            </p>
          </div>
        )}

        {/* Closing CTA */}
        <div className={styles.closing}>
          <p className={styles.closingText}>Envie d'en voir plus&nbsp;?</p>
          <div className={styles.closingActions}>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btnPrimary">
                Voir le site en ligne <i className="fa-solid fa-arrow-up-right" />
              </a>
            )}
            <Link to="/#portfolio" className="btnGhost">
              <i className="fa-solid fa-arrow-left" /> Tous les projets
            </Link>
          </div>
        </div>
      </div>

      {lightboxSrc && (
        <div className={styles.lightbox} onClick={() => setLightboxSrc(null)}>
          <button
            className={styles.lightboxClose}
            onClick={() => setLightboxSrc(null)}
            aria-label="Fermer l'aperçu"
          >
            <i className="fa-solid fa-xmark" />
          </button>
          <img
            src={lightboxSrc}
            alt=""
            className={styles.lightboxImg}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default ProjectDetail;
