import { Link } from 'react-router-dom';
import styles from './Offer.module.css';

const SERVICES = [
  { num: '01', name: 'Web Design',       desc: 'Interfaces modernes, élégantes et orientées conversion.' },
  { num: '02', name: 'Développement',    desc: 'React, Next.js, WordPress — performant et scalable.'     },
  { num: '03', name: 'SEO & Visibilité', desc: 'Référencement technique et stratégie de contenu.'        },
  { num: '04', name: 'Graphisme',        desc: 'Identité visuelle, logo, supports print et digital.'     },
];

function Offer() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* Left: statement */}
        <div className={styles.left}>
          <div className={styles.label}>02 · Services</div>
          <h2 className={styles.headline}>
            Votre présence<br />
            en ligne,<br />
            <span className={styles.accent}>réinventée.</span>
          </h2>
        </div>

        {/* Right: service list + CTAs */}
        <div className={styles.right}>
          <ul className={styles.list}>
            {SERVICES.map(s => (
              <li key={s.num} className={styles.listItem}>
                <span className={styles.num}>{s.num}</span>
                <div>
                  <p className={styles.serviceName}>{s.name}</p>
                  <p className={styles.serviceDesc}>{s.desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className={styles.cta}>
            <Link to="/services" className={styles.primaryBtn}>
              Voir tous les services
              <i className="fa-solid fa-arrow-right" />
            </Link>
            <a
              href="https://calendly.com/melbermil/30min"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ghostBtn}
            >
              Prendre rendez-vous
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Offer;
