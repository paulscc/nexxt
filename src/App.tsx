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
      {/* Page Flip Effect - top right corner */}
      <div 
        className="fixed top-0 right-0 z-[999] w-12 h-12 cursor-pointer group"
        onClick={() => window.location.href = '/old/index.html'}
        title="Ir a versión anterior"
      >
        {/* Background page */}
        <div className="absolute top-0 right-0 w-0 h-0 border-r-[48px] border-t-[48px] border-r-stone-200/60 border-t-stone-200/60 transition-all duration-300" />
        {/* Folded corner - visible on hover */}
        <div className="absolute top-0 right-0 w-0 h-0 border-r-[44px] border-t-[44px] border-r-transparent border-t-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        {/* Arrow indicator */}
        <span className="absolute top-[14px] right-[14px] text-xs text-stone-500 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">→</span>
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