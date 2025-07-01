import Navbar from '../Navbar/Navbar'
import styles from './Header.module.css'
import Profile from '../../assets/images/profile.png'
function Header() {
  return (
    <>
      <Navbar />
      <div className={styles.header}>

      <div>
        <div className={styles.status}>
            <div className={styles.roundStatus}></div>
            <p>Disponible</p>
        </div>
        <h1 className={styles.h1}>Hello,zgertyzerrtjykui</h1>
        <p>zerthjergthyjzerthjergthyjzerthjergthyjzerthjergthyjzerthjergthyjzerthjergthyjzerthjergthyjzerthjergthyj</p>
        <a href="#contact" id='cv'>Curriculum vitae</a>
      </div>
      <div className={styles['right-side-header']}>
        <div className={styles['fitness-area-cover']}>
            <div className={styles.title}>
                <p>Fitness-Area</p>
                <span>Salle de sport</span>
                <div className={styles.time}>
                    
                </div>
            </div>
            <div className={styles.both}>
                <span className={styles.ticket}>1 week</span>
                <a href="#" className={styles.ticket}>Accéder au site</a>
            </div>
        </div>
        <img src={Profile} alt="Photo de profil" />
        <div className={styles['social-media-round']}>
            <div className={styles['icon-social-media']}></div>
        </div>
      </div>

      </div>
    </>
  )
}

export default Header
