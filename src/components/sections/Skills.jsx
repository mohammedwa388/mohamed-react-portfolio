import {useLanguage} from '../../i18n';
import SkillBadge from '../ui/SkillBadge';
import styles from './Skills.module.css';
const skills=[
 {name:'HTML',description:'Semantic and accessible markup',icon:'/skills/html.svg'},
 {name:'CSS',description:'Flexbox, Grid and responsive design',icon:'/skills/css.svg'},
 {name:'CSS Frameworks',description:'Tailwind and Bootstrap',icon:'/skills/tailwind.svg'},
 {name:'JavaScript',description:'Modern ES6+ and the DOM',icon:'/skills/javascript.svg'},
 {name:'React',description:'Components, hooks and routing',icon:'/skills/react.svg'},
 {name:'Java',description:'Object-oriented programming',icon:'/skills/java.svg'},
];
export default function Skills(){const {t}=useLanguage();return <section id="skills" className={styles.skills}><div className={styles.inner}><h2 className={styles.title}>{t('Skills')}</h2><p className={styles.subtitle}>{t('The languages and tools I use to build for the web.')}</p><div className={styles.grid}>{skills.map(s=><SkillBadge key={s.name} name={t(s.name)} description={t(s.description)} icon={s.icon}/>)}</div></div></section>}
