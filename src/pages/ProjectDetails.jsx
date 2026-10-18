import {Link,useParams} from 'react-router-dom';
import {useEffect} from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import NotFound from './NotFound';
import {useLanguage} from '../i18n';
import {projects} from '../data/projects';
import styles from './ProjectDetails.module.css';
export default function ProjectDetails(){const {id}=useParams();const {t}=useLanguage();const p=projects.find(p=>p.id===id);useEffect(()=>{window.scrollTo(0,0)},[id]);if(!p)return <NotFound/>;return <><Navbar/><main className={styles.main}><div className={styles.inner}>
 <Link to="/#projects" className={styles.back}>← {t('Back to projects')}</Link>
 <div className={styles.heading}><div><p className="section-kicker">{t(p.category)} · {t(p.type)}</p><h1>{p.title}<span>.</span></h1><p>{t(p.tagline)}</p></div>{p.demoUrl.startsWith('http')?<a href={p.demoUrl} className="btn-primary" target="_blank" rel="noreferrer">{t('Launch demo')} ↗</a>:<Link to={p.demoUrl} className="btn-primary">{t('Launch demo')} ↗</Link>}</div>
 <div className={`${styles.cover} ${styles[p.accent]}`}><img src={p.image} alt={`${p.title} project screenshot`}/></div>
 <div className={styles.details}><div><p className="section-kicker">{t('Overview')}</p><h2>{t('What it does')}</h2><p>{t(p.description)}</p><div className={styles.tags}>{p.tech.map(x=><span key={x}>{x}</span>)}</div></div><div><p className="section-kicker">{t('The challenge')}</p><h3>{t('The problem')}</h3><p>{t(p.challenge)}</p><p className="section-kicker">{t('The approach')}</p><h3>{t('The solution')}</h3><p>{t(p.solution)}</p></div></div>
 <div className={styles.features}><p className="section-kicker">{t('Features')}</p><h2>{t('Key features')}</h2><div className={styles.featureGrid}>{p.features.map((f,i)=><div key={f}><span>0{i+1}</span><p>{t(f)}</p></div>)}</div></div>
 <div className={styles.bottom}><p>{t(p.tagline)}</p>{p.demoUrl.startsWith('http')?<a className="btn-primary" href={p.demoUrl} target="_blank" rel="noreferrer">{t('Live demo')} ↗</a>:<Link className="btn-primary" to={p.demoUrl}>{t('Live demo')} ↗</Link>}</div><p className={styles.disclaimer}>{t(p.id==='pearl-dental-clinic'?'This is a portfolio concept based on my earlier HTML/CSS project, not an operating clinic or live appointment system.':'This is a personal demo project using illustrative content and data.')}</p>
 </div></main><Footer/></>}
