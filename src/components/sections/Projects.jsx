import ProjectCard from '../ui/ProjectCard';
import {useLanguage} from '../../i18n';
import {projects} from '../../data/projects';
import styles from './Projects.module.css';
export default function Projects(){const {t}=useLanguage();return <section id="projects" className={styles.projects}><div className={styles.inner}><div className={styles.heading}><div><p className="section-kicker">{t('Selected projects')}</p><h2 className="section-title">{t('Projects')}</h2></div><p className="section-copy">{t('A few things I’ve built with React.')}</p></div><div className={styles.grid}>{projects.map(p=><ProjectCard project={p} key={p.id}/>)}</div><p className={styles.note}>{t('Pearl Dental Clinic is a React rebuild of my earlier project; Aura and Flowboard are personal demos.')}</p></div></section>}
