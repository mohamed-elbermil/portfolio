import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '💻',
      title: 'Développement Web',
      description: 'Sites web modernes et responsives avec les dernières technologies (React, Next.js, Node.js)',
      features: ['Sites vitrine', 'E-commerce', 'Applications web', 'APIs REST']
    },
    {
      icon: '🎨',
      title: 'Design UI/UX',
      description: 'Interfaces utilisateur intuitives et expériences utilisateur optimisées',
      features: ['Maquettes Figma', 'Prototypes interactifs', 'Design System', 'Tests utilisateurs']
    },
    {
      icon: '📱',
      title: 'Applications Mobile',
      description: 'Applications mobiles natives et hybrides pour iOS et Android',
      features: ['React Native', 'Applications natives', 'PWA', 'Maintenance']
    },
    {
      icon: '🔧',
      title: 'Maintenance & Support',
      description: 'Support technique continu et maintenance préventive de vos projets',
      features: ['Support 24/7', 'Mises à jour', 'Sauvegardes', 'Monitoring']
    }
  ];

  return (
    <div className="services-page">
      <section className="hero-section">
        <div className="container">
          <h1>Mes Services</h1>
          <p className="subtitle">Des solutions complètes pour votre présence digitale</p>
        </div>
      </section>

      <section className="services-content">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services; 