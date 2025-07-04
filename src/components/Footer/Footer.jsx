import React from 'react';
import Logo from '../../assets/images/logo.png'
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    'Développement Web',
    'Design UI/UX',
    'Graphisme',
    'Consultation',
    'Maintenance',
    'Support 24/7'
  ];

  const quickLinks = [
    'Portfolio',
    'À propos',
    'Témoignages',
    'FAQ',
  ];

  return (
    <footer className="footer">
      <div className="footer__background" />

      <button
        onClick={scrollToTop}
        className="scroll-top-btn"
        aria-label="Remonter en haut"
      >
      <i class="fa-regular fa-circle-up"></i>
      </button>

      <div className="footer__content">
        <div className="footer__grid">
          {/* Brand section */}
          <div className="footer__brand">
            <div className="footer__logo">
              <div className="footer__logo-icon">
                <img src={Logo} alt="Logo" />
              </div>
            </div>
            <p className="footer__desc">
              Créons ensemble l'avenir numérique. Solutions innovantes, designs
              exceptionnels, et expériences utilisateur mémorables.
            </p>
          </div>

          {/* Services */}
          <div className="footer__col">
            <h4>Services</h4>
            <ul>
              {services.map((item, i) => (
                <li key={i}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4>Liens rapides</h4>
            <ul>
              {quickLinks.map((item, i) => (
                <li key={i}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4>Contact</h4>

           

            <div className="contact-item">
              <span className="icon"><i class="fa-solid fa-phone"></i></span>
              <a href="tel:+33123456789">06 12 17 39 10</a>
            </div>

            <div className="contact-item">
              <span className="icon"><i class="fa-solid fa-envelope"></i></span>
              <a href="mailto:melbermil@outlook.fr">
              melbermil@outlook.fr
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="footer__bottom">
          <p>© 2025 - Mohamed EL BERMIL. Tous droits réservés.</p>
          <div className="footer__links">
            <a href="#">Politique de confidentialité</a>
            <a href="#">Conditions d'utilisation</a>
            <a href="#">Mentions légales</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
