import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import JournalPage from './pages/JournalPage';
import ContactPage from './pages/ContactPage';
import ServiciosPage from './pages/ServiciosPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import { PrivacidadPage, TerminosPage, CookiesPage } from './pages/legalPages';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* Page Flip Effect - top left corner */}
      <div className="fixed top-0 left-0 z-[999] w-16 h-16 overflow-hidden cursor-pointer group" onClick={() => window.location.href = '/old/index.html'} title="Ir a versión anterior">
        <div className="absolute top-0 left-0 w-0 h-0 border-l-[60px] border-t-[60px] border-l-stone-200/80 border-t-stone-200/80 group-hover:border-l-amber-500/30 group-hover:border-t-amber-500/30 transition-all duration-500" />
        <div className="absolute top-0 left-0 w-0 h-0 border-l-[56px] border-t-[56px] border-l-white border-t-white group-hover:border-l-amber-100 group-hover:border-t-amber-100 transition-all duration-500" />
        <span className="absolute top-[10px] right-[6px] text-[10px] font-mono font-bold text-stone-400 group-hover:text-amber-600 transition-colors duration-500 opacity-0 group-hover:opacity-100 pointer-events-none rotate-45 origin-top-left">✦</span>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/journal" element={<JournalPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/servicios" element={<ServiciosPage />} />
        <Route path="/privacidad" element={<PrivacidadPage />} />
        <Route path="/terminos" element={<TerminosPage />} />
        <Route path="/cookies" element={<CookiesPage />} />
        <Route path="/:id" element={<ServiceDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}