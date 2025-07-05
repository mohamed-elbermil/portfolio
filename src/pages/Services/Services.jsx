import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Services.css';

function Services() {
  const services = [
    {
      icon: (
        <svg viewBox="0 0 24 24" className="icon">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" fill="white" stroke="currentColor" strokeWidth="2" />
          <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      title: "Web Design",
      description:
        "Création d'interfaces utilisateur modernes et intuitives qui captivent vos visiteurs et renforcent votre identité de marque.",
      features: ["Design responsive", "UX/UI optimisé", "Interface moderne", "Branding cohérent"]
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="icon">
          <polyline points="16 18 22 12 16 6" fill="none" stroke="currentColor" strokeWidth="2" />
          <polyline points="8 6 2 12 8 18" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      title: "Développement Web",
      description:
        "Développement de sites web performants et évolutifs avec les dernières technologies pour une expérience utilisateur exceptionnelle.",
      features: ["React & TypeScript", "Performance optimisée", "SEO-friendly", "Maintenance incluse"]
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="icon">
          <circle cx="11" cy="11" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      title: "SEO",
      description:
        "Optimisation pour les moteurs de recherche afin d'améliorer votre visibilité en ligne et attirer plus de clients qualifiés.",
      features: ["Audit SEO complet", "Optimisation technique", "Stratégie de contenu", "Suivi des performances"]
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="icon">
          <path d="M12 2L15 8H9L12 2Z" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="13" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      title: "Graphisme",
      description:
        "Création d'identités visuelles percutantes et de supports graphiques qui communiquent efficacement vos valeurs.",
      features: ["Identité visuelle", "Supports print", "Illustrations", "Charte graphique"]
    }
  ];

  return (
    <div className="Services">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="badge">
          <span className="badge-icon">★</span>
          Services Premium
        </div>
        <h1 className="hero-title">
          Transformez votre
          <span className="highlight">présence numérique</span>
        </h1>
        <p className="hero-subtitle">
          Des solutions digitales sur mesure pour propulser votre entreprise vers le succès.
          Expertise technique, créativité et résultats garantis.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">
            Découvrir nos services
            <span className="arrow">→</span>
          </button>
          <button className="btn-secondary">Voir nos réalisations</button>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2 className="section-title">Nos Services</h2>
        <p className="section-description">
          Une gamme complète de services digitaux pour répondre à tous vos besoins
        </p>
        <div className="service-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <ul className="feature-list">
                {service.features.map((f, i) => (
                  <li key={i}>
                    <span className="dot" /> {f}
                  </li>
                ))}
              </ul>
              <button className="btn-learn">En savoir plus</button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2 className="cta-title">Prêt à démarrer votre projet ?</h2>
        <p className="cta-subtitle">
          Discutons de vos besoins et créons ensemble une solution digitale qui vous ressemble.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">
            Demander un devis <span className="arrow">→</span>
          </button>
          <button className="btn-secondary">Planifier un appel</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Services Digitaux. Créé avec passion et expertise.</p>
      </footer>
    </div>
  );
}

export default Services;
