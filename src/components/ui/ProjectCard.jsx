import {Link} from 'react-router-dom';
import {useLanguage} from '../../i18n';
import styles from './ProjectCard.module.css';
export default function ProjectCard({project}){
 const {t}=useLanguage();
 return <article className={styles.card}><div className={styles.frame}><div className={styles.content}>
   <Link className={styles.media} to={`/projectDetails/${project.id}`} aria-label={`${t('View details')}: ${project.title}`}><img src={project.image} alt={`${project.title} preview`} loading="lazy"/></Link>
   <div className={styles.body}>
    <h3 className={styles.title}>{project.title}</h3><p className={styles.description}>{t(project.description)}</p>
    <ul className={styles.tags}>{project.tech.map(x=><li key={x}>{x}</li>)}</ul>
    <div className={styles.footer}><Link className={styles.details} to={`/projectDetails/${project.id}`}>{t('View details')}</Link><div className={styles.links}>{project.demoUrl.startsWith('http')?<a href={project.demoUrl} target="_blank" rel="noreferrer">{t('Live demo')} ↗</a>:<Link to={project.demoUrl}>{t('Live demo')} ↗</Link>}{project.githubUrl&&<a href={project.githubUrl} target="_blank" rel="noreferrer">GitHub</a>}</div></div>
   </div>
 </div></div></article>;
}
