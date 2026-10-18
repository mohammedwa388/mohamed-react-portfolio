import {Link} from 'react-router-dom';
import {useLanguage} from '../../i18n';
import styles from './About.module.css';
import {scrollToSection} from '../../utils/navigation';
export default function About(){const {t}=useLanguage();return <section id="about" className={styles.about}>
 <div className={styles.inner}>
  <div className={styles.heading}><p className="section-kicker">{t('A little about me')}</p><h2 className="section-title">{t('Making the web feel easier.')}</h2></div>
  <div className={styles.story}>
   <p>{t('I’m Mohamed, a front-end developer who enjoys building clear, fast, and responsive interfaces. I focus on usability, clean code, and thoughtful details.')}</p>
   <p>{t('My goal is simple: turn ideas into websites people enjoy using.')}</p>
   <Link to="/#projects" className={styles.discover} onClick={() => scrollToSection("projects")}>{t('View my work')} <span aria-hidden="true">↗</span></Link>
  </div>
 </div>
 </section>}
