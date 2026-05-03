import { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './Header.module.css';
import Profile from '../../assets/images/profile.png';

/* ── Typewriter hook ─────────────────────────────────────────── */
function useTypewriter(phrases, typeSpeed = 75, deleteSpeed = 40, pauseMs = 2000) {
  const [phraseIdx, setPhraseIdx]   = useState(0);
  const [charIdx, setCharIdx]       = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused]     = useState(false);

  useEffect(() => {
    if (isPaused) {
      const t = setTimeout(() => { setIsPaused(false); setIsDeleting(true); }, pauseMs);
      return () => clearTimeout(t);
    }
    const phrase = phrases[phraseIdx];
    const speed  = isDeleting ? deleteSpeed : typeSpeed;
    const t = setTimeout(() => {
      if (!isDeleting) {
        if (charIdx < phrase.length) setCharIdx(c => c + 1);
        else setIsPaused(true);
      } else {
        if (charIdx > 0) setCharIdx(c => c - 1);
        else { setIsDeleting(false); setPhraseIdx(i => (i + 1) % phrases.length); }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [charIdx, isDeleting, isPaused, phraseIdx, phrases, typeSpeed, deleteSpeed, pauseMs]);

  return phrases[phraseIdx].slice(0, charIdx);
}

const ROLES = ['Développeur Web', 'Designer UI/UX', 'Créateur digital'];

/* ── Component ───────────────────────────────────────────────── */
function Header() {
  const role = useTypewriter(ROLES);

  return (
    <>
      <Navbar />
      <header className={styles.header}>
        <div className={styles.orb1} aria-hidden="true" />
        <div className={styles.orb2} aria-hidden="true" />

        {/* Top row */}
        <div className={styles.topRow}>
          <div className={styles.available}>
            <span className={styles.availableDot} />
            Disponible pour de nouvelles opportunités
          </div>
          <span className={styles.topYear}>2025</span>
        </div>

        {/* Title block */}
        <div className={styles.titleBlock}>
          <h1 className={styles.mainTitle}>
            <span className={styles.line1}>Développeur</span>
            <span className={styles.line2}>
              Web <span className={styles.accentChar}>&</span>
            </span>
            <span className={styles.line3}>Designer</span>
          </h1>

          <div className={styles.photoWrapper} aria-hidden="true">
            <img src={Profile} alt="" className={styles.photo} />
            <div className={styles.photoFade} />
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottomBar}>
          <div className={styles.identity}>
            <p className={styles.identityName}>Mohamed EL BERMIL</p>
            <p className={styles.identityRole}>
              {role}
              <span className={styles.cursor} aria-hidden="true">|</span>
            </p>
          </div>

          <span className={styles.barDivider} aria-hidden="true" />

          <div className={styles.ctaGroup}>
            <a href="#projects" className={styles.primaryBtn}>
              Voir mes projets
              <i className="fa-solid fa-arrow-right" />
            </a>
            <a href="cv-mohamed-elbermil.pdf" download className={styles.ghostBtn}>
              <i className="fa-solid fa-download" />
              CV
            </a>
          </div>

          <span className={styles.barDivider} aria-hidden="true" />

          <div className={styles.socials}>
            <a href="https://www.linkedin.com/in/mohamed-el-bermil-b957861bb/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="https://www.behance.net/melbi" target="_blank" rel="noopener noreferrer" aria-label="Behance">
              <i className="fab fa-behance" />
            </a>
            <a href="https://github.com/mohamed-elbermil" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github" />
            </a>
            <a href="https://www.instagram.com/soblim_crea/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
