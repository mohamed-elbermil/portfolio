import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import './Footer.css';

const quickLinks = [
  { name: 'Accueil',      id: 'home'      },
  { name: 'Portfolio',    id: 'portfolio' },
  { name: 'Compétences',  id: 'skills'    },
  { name: 'À propos',     id: 'about'     },
  { name: 'Contact',      id: 'contact'   },
];

const socials = [
  { label: 'LinkedIn',  icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/mohamed-el-bermil-b957861bb/' },
  { label: 'Behance',   icon: 'fab fa-behance',      href: 'https://www.behance.net/melbi' },
  { label: 'GitHub',    icon: 'fab fa-github',       href: 'https://github.com/mohamed-elbermil' },
  { label: 'Instagram', icon: 'fab fa-instagram',    href: 'https://www.instagram.com/soblim_crea/' },
];

const Footer = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const sectionHref = (id) => (isHome ? `#${id}` : `/#${id}`);

  return (
    <footer className="footer">
      <div className="footer__background" />

      <button onClick={scrollToTop} className="scroll-top-btn" aria-label="Remonter en haut">
        <i className="fa-solid fa-arrow-up" />
      </button>

      <div className="footer__content">
        <div className="footer__grid">

          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <div className="footer__logo-icon">
                <img src={Logo} alt="Logo Mohamed EL BERMIL" />
              </div>
            </div>
            <p className="footer__desc">
              Créons ensemble votre présence numérique. Interfaces modernes,
              expériences mémorables, résultats mesurables.
            </p>
            <a href="/cv-mohamed-elbermil.pdf" download className="footer__cv">
              <i className="fa-solid fa-download" />
              Télécharger mon CV
            </a>
          </div>

          {/* Quick links */}
          <div className="footer__col">
            <h4>Navigation</h4>
            <ul>
              {quickLinks.map((item) => (
                <li key={item.id}>
                  <a href={sectionHref(item.id)}>{item.name}</a>
                </li>
              ))}
              <li><Link to="/services">Services</Link></li>
            </ul>
          </div>

          {/* Contact + socials */}
          <div className="footer__col">
            <h4>Contact</h4>
            <div className="contact-item">
              <span className="icon"><i className="fa-solid fa-phone" /></span>
              <a href="tel:+33612173910">06 12 17 39 10</a>
            </div>
            <div className="contact-item">
              <span className="icon"><i className="fa-solid fa-envelope" /></span>
              <a href="mailto:melbermil@outlook.fr">melbermil@outlook.fr</a>
            </div>

            <div className="footer__socials">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p>© 2025 — Mohamed EL BERMIL. Tous droits réservés.</p>
          <div className="footer__links">
            <Link to="/mentions-legales">Mentions légales</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
