import { useState } from 'react';
import styles from './About.module.css';
import Reveal from '../Reveal/Reveal';
import Profile from '../../assets/images/profile.png';
import MusculationPhoto from '../../assets/images/projects/musculation.png';
import EscaladePhoto from '../../assets/images/projects/escalade.png';
import SkiPhoto from '../../assets/images/projects/ski.png';
import LecturePhoto from '../../assets/images/projects/lecture.png';

const FACTS = [
  { label: 'Fondateur', value: 'Agence SOBLIM' },
  { label: 'Expertise', value: 'Développement & Design' },
  { label: 'Disponibilité', value: 'Nouvelles opportunités' },
];

const HOBBIES = [
  { label: 'Escalade',     icon: 'fa-solid fa-mountain',        image: EscaladePhoto },
  { label: 'Musculation',  icon: 'fa-solid fa-dumbbell',        image: MusculationPhoto },
  { label: 'Lecture',      icon: 'fa-solid fa-book-open',       image: LecturePhoto },
  { label: 'Ski',          icon: 'fa-solid fa-person-skiing',   image: SkiPhoto },
  { label: 'Basket',       icon: 'fa-solid fa-basketball',      image: null },
];

const About = () => {
  const [activeHobby, setActiveHobby] = useState(null);

  return (
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
            {HOBBIES.map((hobby, i) => (
              <span
                key={hobby.label}
                className={styles.hobby}
                onMouseEnter={() => setActiveHobby(i)}
                onMouseLeave={() => setActiveHobby(null)}
              >
                <i className={hobby.icon} />
                {hobby.label}
              </span>
            ))}
          </div>

          <div className={styles.hobbyPreview}>
            {HOBBIES.map((hobby, i) => hobby.image && (
              <img
                key={hobby.label}
                src={hobby.image}
                alt={hobby.label}
                className={`${styles.hobbyPreviewImg} ${activeHobby === i ? styles.hobbyPreviewImgActive : ''}`}
              />
            ))}

            {(activeHobby === null || !HOBBIES[activeHobby].image) && (
              <div className={styles.hobbyPreviewHint}>
                <i className={activeHobby === null ? 'fa-solid fa-arrow-up' : HOBBIES[activeHobby].icon} />
                {activeHobby === null ? 'Survolez une activité' : 'Photo à venir'}
              </div>
            )}
          </div>
        </div>
      </Reveal>
    </div>
  </section>
  );
};

export default About;
