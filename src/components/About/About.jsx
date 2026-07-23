import styles from './About.module.css';
import Reveal from '../Reveal/Reveal';

const FACTS = [
  { label: 'Fondateur', value: 'Agence SOBLIM' },
  { label: 'Expertise', value: 'Développement & Design' },
  { label: 'Disponibilité', value: 'Nouvelles opportunités' },
];

const About = () => (
  <section className={styles.section} id="about">
    <div className={styles.grid}>
      <div className={styles.left}>
        <span className="eyebrow">
          <span className="eyebrow__index">04</span>
          <span className="eyebrow__rule" />
          À propos
        </span>
        <h2 className={styles.title}>Mon parcours</h2>
      </div>

      <Reveal as="div" className={styles.right}>
        <p className={styles.lead}>
          Passionné par le développement web et le design depuis plusieurs années,
          je combine créativité et expertise technique pour créer des expériences
          numériques exceptionnelles.
        </p>
        <p className={styles.text}>
          Fondateur de l'agence SOBLIM, je m'efforce d'aider les entreprises
          à se démarquer dans l'univers digital avec des solutions innovantes
          et des designs mémorables.
        </p>

        <div className={styles.facts}>
          {FACTS.map((fact) => (
            <div key={fact.label} className={styles.fact}>
              <span className={styles.factLabel}>{fact.label}</span>
              <span className={styles.factValue}>{fact.value}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

export default About;
