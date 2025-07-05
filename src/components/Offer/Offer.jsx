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
                Lorem IPSUM<br />
                Lorem IPSUM<br />
                Lorem IPSUM<br />
                Lorem IPSUM
              </h1>
              <p>
                Lorem IPSUM Lorem IPSUM Lorem IPSUM Lorem
                IPSUM Lorem IPSUM Lorem IPSUM Lorem IPSUM Lorem
                IPSUM Lorem IPSUM Lorem IPSUM Lorem IPSUM Lorem
                IPSUM Lorem IPSUM Lorem IPSUM Lorem IPSUM Lorem
                IPSUM
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
