import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Navbar.modules.css';
import Logo from '../../assets/images/logo.png';

const NAV_LINKS = [
  { to: '/',          label: 'accueil'     },
  { to: '/portfolio', label: 'réalisations' },
  { to: '/services',  label: 'services'    },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setIsMenuOpen(false); }, [location.pathname]);

  const toggleMenu = () => setIsMenuOpen(o => !o);

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="logo-link">
        <img src={Logo} alt="Logo Mohamed EL BERMIL" />
      </Link>

      {/* Hamburger */}
      <button
        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Ouvrir le menu"
        aria-expanded={isMenuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`navbar-list ${isMenuOpen ? 'active' : ''}`}>
        {NAV_LINKS.map(({ to, label }) => (
          <li key={to} className="navbar-item">
            <Link to={to} className={isActive(to) ? 'active-link' : ''}>
              {label}
            </Link>
          </li>
        ))}

        {/* CTA — inline to avoid nested <li> */}
        <li className="navbar-item cta">
          <Link to="/contact">
            <div className="cta-icon">
              <i className="fa-solid fa-paper-plane" />
            </div>
            un besoin particulier ?
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
