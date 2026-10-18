import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';
import Footer from '../components/layout/Footer';
import {scrollToSection} from '../utils/navigation';
export default function Home(){const location=useLocation();useEffect(()=>{if(location.hash){const t=requestAnimationFrame(()=>scrollToSection(location.hash));return()=>cancelAnimationFrame(t)}else window.scrollTo(0,0)},[location.hash]);return <><header><Navbar/></header><main><Hero/><About/><Skills/><Projects/><Contact/></main><Footer/></>}
