import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './Navbar.module.css';
import Logo from '../../assets/images/logo.png';

const SECTIONS = [
  { id: 'home',      label: 'Accueil'      },
  { id: 'portfolio', label: 'Portfolio'    },
  { id: 'skills',    label: 'Compétences'  },
  { id: 'about',     label: 'À propos'     },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  const [activeId,   setActiveId]   = useState('home');
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setIsMenuOpen(false); }, [location.pathname]);

  /* Scrollspy - only relevant on the single-page Home */
  useEffect(() => {
    if (!isHome) return;
    const targets = SECTIONS
      .map(s => document.getElementById(s.id))
      .filter(Boolean);
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] }
    );
    targets.forEach(t => observer.observe(t));
    return () => observer.disconnect();
  }, [isHome]);

  const toggleMenu = () => setIsMenuOpen(o => !o);

  const sectionHref = (id) => (isHome ? `#${id}` : `/#${id}`);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <Link to="/#home" className={styles.logoLink}>
        <img src={Logo} alt="Logo Mohamed EL BERMIL" />
      </Link>

      {/* Hamburger */}
      <button
        className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
        onClick={toggleMenu}
        aria-label="Ouvrir le menu"
        aria-expanded={isMenuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`${styles.navbarList} ${isMenuOpen ? styles.active : ''}`}>
        {SECTIONS.map(({ id, label }) => (
          <li key={id} className={styles.navbarItem}>
            <a
              href={sectionHref(id)}
              className={isHome && activeId === id ? styles.activeLink : ''}
            >
              {label}
            </a>
          </li>
        ))}

        {/* CTA - inline to avoid nested <li> */}
        <li className={`${styles.navbarItem} ${styles.cta}`}>
          <a href={sectionHref('contact')}>
            <div className={styles.ctaIcon}>
              <i className="fa-solid fa-paper-plane" />
            </div>
            Me contacter
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
