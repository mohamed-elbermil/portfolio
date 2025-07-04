import React from 'react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    'Développement Web',
    'Design UI/UX',
    'Applications Mobile',
    'Consultation',
    'Maintenance',
    'Support 24/7'
  ];

  const quickLinks = [
    'À propos',
    'Portfolio',
    'Blog',
    'Témoignages',
    'FAQ',
    'Carrières'
  ];

  const socialLinks = [
    { icon: '📘', href: '#', label: 'Facebook' },
    { icon: '🐦', href: '#', label: 'Twitter' },
    { icon: '📸', href: '#', label: 'Instagram' },
    { icon: '💼', href: '#', label: 'LinkedIn' },
    { icon: '🐙', href: '#', label: 'GitHub' }
  ];

  return (
    <footer className="footer">
      <div className="footer__background" />

      <button
        onClick={scrollToTop}
        className="scroll-top-btn"
        aria-label="Remonter en haut"
      >
        🔝
      </button>

      <div className="footer__content">
        <div className="footer__grid">
          {/* Brand section */}
          <div className="footer__brand">
            <div className="footer__logo">
              <div className="footer__logo-icon">❤️</div>
              <h3 className="footer__logo-text">YourBrand</h3>
            </div>
            <p className="footer__desc">
              Créons ensemble l'avenir numérique. Solutions innovantes, designs
              exceptionnels, et expériences utilisateur mémorables.
            </p>
            <div className="footer__socials">
              {socialLinks.map(({ icon, href, label }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="social-btn"
                >
                  {icon}
                </a>
              ))}
            </div>
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
              <span className="icon">📍</span>
              <div>
                <p>123 Rue de l'Innovation</p>
                <p>75001 Paris, France</p>
              </div>
            </div>

            <div className="contact-item">
              <span className="icon">📞</span>
              <a href="tel:+33123456789">+33 1 23 45 67 89</a>
            </div>

            <div className="contact-item">
              <span className="icon">📧</span>
              <a href="mailto:contact@yourbrand.com">
                contact@yourbrand.com
              </a>
            </div>

            {/* Newsletter */}
            <div className="newsletter">
              <h5>Newsletter</h5>
              <div className="newsletter__form">
                <input type="email" placeholder="Votre email" />
                <button>S'abonner</button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="footer__bottom">
          <p>© 2024 YourBrand. Tous droits réservés.</p>
          <div className="footer__links">
            <a href="#">Politique de confidentialité</a>
            <a href="#">Conditions d'utilisation</a>
            <a href="#">Mentions légales</a>
          </div>
        </div>

        <p className="footer__made">
          Fait avec ❤️ par YourBrand
        </p>
      </div>
    </footer>
  );
};

export default Footer;
