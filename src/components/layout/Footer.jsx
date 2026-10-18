import {Link} from 'react-router-dom';
import {scrollToSection} from '../../utils/navigation';
import {socials} from '../../data/socials';
import {useLanguage} from '../../i18n';
import styles from './Footer.module.css';

export default function Footer(){
  const {t,lang}=useLanguage();
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <Link to="/#hero" className={styles.identity} onClick={() => scrollToSection('hero')}>
          <img src={socials.avatarImage} alt="" aria-hidden="true" />
          <span>
            <strong>{lang==='ar'?socials.nameAr:socials.name}</strong>
            <small>{t('Front-End Developer')}</small>
          </span>
        </Link>
        <p>© {new Date().getFullYear()} {socials.name}. {t('Made with React.')}</p>
        <Link to="/#hero" className={styles.top} onClick={() => scrollToSection('hero')}>{t('Back to top')} ↑</Link>
      </div>
    </footer>
  );
}
