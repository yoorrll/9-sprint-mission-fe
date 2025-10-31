import styles from './Footer.module.css';
import facebookIcon from '../../assets/icons/ic_facebook.png';
import twitterIcon from '../../assets/icons/ic_twitter.png';
import youtubeIcon from '../../assets/icons/ic_youtube.png';
import instagramIcon from '../../assets/icons/ic_instagram.png';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>ⓒcodeit - 2024</p>
      <div className={styles.csLink}>
        <a href="/">Privacy Policy</a>
        <a href="/">FAQ</a>
      </div>
      <ul className={styles.snsLinkList}>
        <li>
          <a href="https://facebook.com" target="_black">
            <img className={styles.snsLink} src={facebookIcon} />
          </a>
        </li>
        <li>
          <a href="https://x.com" target="_black">
            <img className={styles.snsLink} src={twitterIcon} />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com" target="_black">
            <img className={styles.snsLink} src={youtubeIcon} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com" target="_black">
            <img className={styles.snsLink} src={instagramIcon} />
          </a>
        </li>
      </ul>
    </footer>
  );
}
