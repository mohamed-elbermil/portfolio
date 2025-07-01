import Navbar from '../Navbar/Navbar'
import styles from './Header.module.css'
function Header() {
  return (
    <>
      <Navbar />
      <div>
        <div className={styles.status}>
            <div className={styles.roundStatus}></div>
            <p>Disponible</p>
        </div>
        <h1>Hello,zgertyzerrtjykui</h1>
        <p>zerthjergthyjzerthjergthyjzerthjergthyjzerthjergthyjzerthjergthyjzerthjergthyjzerthjergthyjzerthjergthyj</p>
        <a href="#contact" id='cv'>Curriculum vitae</a>
      </div>
    </>
  )
}

export default Header
