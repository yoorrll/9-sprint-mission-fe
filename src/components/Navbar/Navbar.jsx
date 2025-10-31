import pandaFace from '../../assets/images/img_panda_face.png';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navBar}>
      <div className={styles.navBarList}>
        <div className={styles.logo}>
          <img className={styles.logoImg} src={pandaFace} alt="판다마켓 로고" />
          <h1 className={styles.logoTitle}>판다마켓</h1>
        </div>
        <ul className={styles.navMenu}>
          <li className={styles.navMenuList}>자유게시판</li>
          <li className={styles.navMenuList}>중고마켓</li>
        </ul>
      </div>
      <button className={styles.loginBtn}>로그인</button>
    </nav>
  );
}
