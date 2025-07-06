import React from 'react';
import styles from './Offer.module.css';
import CTALink from '../CTALink/CTALink';
import '../CTALink/CTALink.css';

function Offer() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles['content-grid']}>
          {/* Left Section */}
          <div className={styles['left-section']}>
            <div className={styles['gradient-overlay']}></div>
          </div>

          {/* Right Section */}
          <div className={styles['right-section']}>
            <div className={styles['badge-container']}>
              <div className={styles.badge}>WEB DESIGN</div>
            </div>

            <div className={styles['text-content']}>
              <h1>
              Visibilité Optimisée
              </h1>
              <p>
              Je conçois des sites web élégants, rapides et adaptés à vos besoins.
              Que vous soyez une entreprise, un indépendant ou une startup, je vous accompagne de la conception à la mise en ligne.
              </p>
            </div>

            <CTALink text="Prendre rendez-vous" href="#contact" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
