import styles from './About.module.css';
import Reveal from '../Reveal/Reveal';
import Profile from '../../assets/images/profile.png';

const FACTS = [
  { label: 'Fondateur', value: 'Agence SOBLIM' },
  { label: 'Expertise', value: 'Développement & Design' },
  { label: 'Disponibilité', value: 'Nouvelles opportunités' },
];

const HOBBIES = [
  { label: 'Escalade',     icon: 'fa-solid fa-mountain' },
  { label: 'Musculation',  icon: 'fa-solid fa-dumbbell' },
  { label: 'Lecture',      icon: 'fa-solid fa-book-open' },
  { label: 'Ski',          icon: 'fa-solid fa-person-skiing' },
  { label: 'Basket',       icon: 'fa-solid fa-basketball' },
];

const About = () => (
  <section className={styles.section} id="about">
    <div className={styles.grid}>
      <div className={styles.left}>
        <span className="eyebrow">
          <span className="eyebrow__index">03</span>
          <span className="eyebrow__rule" />
          À propos
        </span>
        <h2 className={styles.title}>Mon parcours</h2>

        <div className={styles.photoWrapper}>
          <img src={Profile} alt="Portrait de Mohamed EL BERMIL" className={styles.photo} />
        </div>
      </div>

      <Reveal as="div" className={styles.right}>
        <p className={styles.lead}>
          Passionné par le développement web et le design depuis plusieurs années,
          je combine créativité et expertise technique pour créer des expériences
          numériques exceptionnelles.
        </p>
        <p className={styles.text}>
          Fondateur de <a href="https://soblim.com/" target="_blank" rel="noopener noreferrer" className={styles.soblim}>l'agence SOBLIM</a>, je m'efforce d'aider les entreprises
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

        <div className={styles.hobbies}>
          <span className={styles.hobbiesLabel}>À côté du travail</span>
          <div className={styles.hobbiesList}>
            {HOBBIES.map((hobby) => (
              <span key={hobby.label} className={styles.hobby}>
                <i className={hobby.icon} />
                {hobby.label}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default About;
