import Navbar from '../Navbar/Navbar'
import styles from './Header.module.css'
import Profile from '../../assets/images/profile.png'
function Header() {
  return (
    <>
      <Navbar />
      <div className={styles.header}>
      <div className={styles['left-side-header']}>
        <div className={styles.status}>
            <div className={styles.roundStatus}></div>
            <p>Disponible</p>
        </div>
        <h1 className={styles.h1}>Hello,zgertyze <br /> rrtjykui</h1>
        <p>zerthjergthyjzerthjergthyjzerthjergthyjzerthjergthyjzerthjergthyjzerthjergthyjzezerthjergthyjzerthjergthyjzerthjergthyjzezerthjergthyjzerthjergthyjzerthjergthyjzezerthjergthyjzerthjergthyjzerthjergthyjzezerthjergthyjzerthjergthyjzerthjergthyjzerthjegthyjzerthjergthyjzerthjergthyjzerthjergthyjzerthjergthyjzezerthjergthyjzerthjergthyjzerthjergthyjzezerthjergthyjzerthjergthyjzerthjergthyjzezerthjergthyjzerthjergthyjzerthjergthyjzezerthjergthyjzerthjergthyjzerthjergthyjzerthjergthyjzerthjergthyj</p>
        <a href="cv-mohamed-elbermil.pdf" download className={styles.cv}>
          <i className="fa-solid fa-download"></i>
          Curriculum vitae
        </a>
      </div>
      <div className={styles['right-side-header']}>
        <div className={styles['bloc-top']}>
          <div className={styles['fitness-area-cover']}>
              <div className={styles['title']}>
                  <p>Fitness-Area</p>
                  <span>Salle de sport</span>
                  <div className={styles.time}>
                  </div>
              </div>
              <div className={styles.both}>
                  <a href="https://fitness-area-mohamed-e.vercel.app/" target='blank' className={styles.ticket}>Accéder au site</a>
                  <span className={styles.ticket}>
                  <i class="fa-solid fa-hourglass-start"></i>
                    1 week</span>
              </div>
          </div>
          <img src={Profile} alt="Photo de profil" />
        </div>
        <div className={styles['bloc-bottom']}>
          <div className={styles['bloc-left']}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sunt recusandae nihil!</p>
          </div>
          <div className={styles['bloc-right']}>
            <a href="https://www.linkedin.com/in/mohamed-el-bermil-b957861bb/" target='blank'><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="https://www.tiktok.com/@melbi6000" target='blank'><i class="fa-brands fa-tiktok"></i></a>
            <a href="https://www.youtube.com/@melbi-099" target='blank'><i class="fa-brands fa-youtube"></i></a>
          </div>
        </div>
      </div>

      </div>
    </>
  )
}

export default Header
