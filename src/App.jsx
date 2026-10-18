import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {LanguageProvider} from './i18n';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ProjectDetails from './pages/ProjectDetails';
import StarBackground from './components/layout/StarBackground';
import PearlDentalDemo from './demos/PearlDentalDemo';
import CommerceDemo from './demos/CommerceDemo';
import FlowboardDemo from './demos/FlowboardDemo';
import './index.css';
import './demos/demos.css';
import './demos/pearl.css';
export default function App(){return <LanguageProvider><BrowserRouter><StarBackground/><Routes><Route path="/" element={<Home/>}/><Route path="/projectDetails/:id" element={<ProjectDetails/>}/><Route path="/demo/pearl-dental-clinic" element={<PearlDentalDemo/>}/><Route path="/demo/aura-commerce" element={<CommerceDemo/>}/><Route path="/demo/flowboard" element={<FlowboardDemo/>}/><Route path="*" element={<NotFound/>}/></Routes></BrowserRouter></LanguageProvider>}
