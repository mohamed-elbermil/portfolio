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
            start: 'top center',   // animation démarre quand top de l’élément touche le centre de la fenêtre
            end: 'bottom center',  // animation se termine quand bottom touche centre
            toggleActions: 'play reverse play reverse', 
            // play à l’entrée, reverse à la sortie, play à retour, reverse à sortie retour
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
  
    return () => ctx.revert();
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
            Salut, moi c’est <span className={styles.highlight}>Mohamed</span>
          </h1>
          <p className={styles.subtext}>
            Développeur Front-end passionné. J’aide les marques à créer des interfaces modernes et performantes.
          </p>
          <div className={styles.ctaGroup}>
            <a href="cv-mohamed-elbermil.pdf" download className={styles.cvBtn}>
              <i className="fa-solid fa-download"></i> Télécharger le CV
            </a>
            <a href="#projects" className={styles.altBtn}>Voir mes projets</a>
          </div>
        </div>

        <div className={styles.right} ref={rightRef}>
          <div className={styles.card}>
            <img src={Profile} alt="Moi" className={styles.profile} />
            <div className={styles.badge}>
              <p>Mohamed EL BERMIL</p>
              <span>Fondateur de l'agence <a href="https://soblim.com/" target="_blank" rel="noopener noreferrer">SOBLIM</a></span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
