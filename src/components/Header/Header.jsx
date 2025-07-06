// Header.jsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import Navbar from '../Navbar/Navbar';
import styles from './Header.module.css';
import Profile from '../../assets/images/profile.png';

gsap.registerPlugin(ScrollTrigger);

function Header() {
  const headerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    // Détecter si on est sur mobile
    const isMobile = window.innerWidth <= 768;
    
    // Si on est sur mobile, ne pas exécuter les animations GSAP
    if (isMobile) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: leftRef.current,
            start: 'top center',   // animation démarre quand top de l'élément touche le centre de la fenêtre
            end: 'bottom center',  // animation se termine quand bottom touche centre
            toggleActions: 'play reverse play reverse', 
            // play à l'entrée, reverse à la sortie, play à retour, reverse à sortie retour
            markers: false,
          },
        }
      );
  
      gsap.fromTo(
        rightRef.current,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: rightRef.current,
            start: 'top center',
            end: 'bottom center',
            toggleActions: 'play reverse play reverse',
            markers: false,
          },
        }
      );
    }, headerRef);
  
    // Gestionnaire pour les changements de taille d'écran
    const handleResize = () => {
      const newIsMobile = window.innerWidth <= 768;
      if (newIsMobile && !isMobile) {
        // Si on passe en mode mobile, nettoyer les animations GSAP
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
    };

    window.addEventListener('resize', handleResize);
  
    return () => {
      ctx.revert();
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  

  return (
    <>
      <Navbar />
      <header className={styles.header} ref={headerRef}>
        <div className={styles.left} ref={leftRef}>
          <span className={styles.status}>
            <span className={styles.dot}></span>
            Disponible
          </span>
          <h1 className={styles.title}>
            Hello, moi c'est <span className={styles.highlight}>Mohamed</span>
          </h1>
          <p className={styles.subtext}>
            Développeur Front-end passionné. J'aide les marques à créer des interfaces modernes et performantes.
          </p>
          <div className={styles.ctaGroup}>
            <a href="cv-mohamed-elbermil.pdf" download className={styles.cvBtn}>
              <i className="fa-solid fa-download"></i> Télécharger le CV
            </a>
            <a href="https://calendly.com/melbermil/30min" target='blank' id='projects' className={styles.altBtn}>Réserver une consultation en ligne</a>
          </div>
        </div>

        <div className={styles.right} ref={rightRef}>
          <div className={styles.card}>
            <img src={Profile} alt="Moi" className={styles.profile} />
            <div className={styles.badge}>
              <p>Mohamed EL BERMIL</p>
              <span>Fondateur de l'agence <a href="https://soblim.com/" target="_blank" rel="noopener noreferrer">SOBLIM</a></span>
            </div>
            
            {/* Social Media Icons */}
            <div className={styles.socialIcons}>
              <a href="https://www.linkedin.com/in/mohamed-el-bermil-b957861bb/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.behance.net/melbi" target="_blank" rel="noopener noreferrer" aria-label="Behance">
                <i className="fab fa-behance"></i>
              </a>
              <a href="https://www.instagram.com/soblim_crea/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://github.com/mohamed-elbermil?tab=repositories" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
