// Header.jsx
import Navbar from '../Navbar/Navbar';
import styles from './Header.module.css';
import Profile from '../../assets/images/profile.png';

function Header() {
  return (
    <>
      <Navbar />
      <header className={styles.header}>
        <div className={styles.left}>
          <span className={styles.status}>
            <span className={styles.dot}></span>
            Disponible
          </span>
          <h1 className={styles.title}>
            Salut, moi c’est <span className={styles.highlight}>Mohamed</span>
          </h1>
          <p className={styles.subtext}>
            Développeur Front-end passionné. J’aide les marques à créer des interfaces modernes et performantes.
          </p>
          <div className={styles.ctaGroup}>
            <a href="cv-mohamed-elbermil.pdf" download className={styles.cvBtn}>
              <i className="fa-solid fa-download"></i> Télécharger le CV
            </a>
            <a href="#projects" className={styles.altBtn}>Voir mes projets</a>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.card}>
            <img src={Profile} alt="Moi" className={styles.profile} />
            <div className={styles.badge}>
              <p>Mohamed EL BERMIL</p>
              <span>Fondateur de l'agence <a href="https://soblim.com/" target="_blank">SOBLIM</a></span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
