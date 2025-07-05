import React from 'react';
import styles from './Offer.module.css';

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

            <div className={styles.cta}>
              <div className={styles['cta-button']}>
                <div className={styles['icon-container']}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles['user-icon']}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5.121 17.804A9.001 9.001 0 0112 15a9.001 9.001 0 016.879 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <span>Un besoin design ?</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
