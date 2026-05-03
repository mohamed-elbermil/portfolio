import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import './Footer.css';

const quickLinks = [
  { name: 'Accueil',      href: '/'          },
  { name: 'Portfolio',    href: '/portfolio'  },
  { name: 'Services',     href: '/services'   },
  { name: 'Contact',      href: '/contact'    },
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="footer__background" />

      <button onClick={scrollToTop} className="scroll-top-btn" aria-label="Remonter en haut">
        <i className="fa-regular fa-circle-up" />
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
          </div>

          {/* Quick links */}
          <div className="footer__col">
            <h4>Navigation</h4>
            <ul>
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link to={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
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
