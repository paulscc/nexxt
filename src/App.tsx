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
      {/* Leaf decorator - link to classic version */}
      <a
        href="/classic"
        className="fixed top-4 left-4 z-[999] w-10 h-10 flex items-center justify-center rounded-full bg-white/30 backdrop-blur-md border border-stone-300/50 hover:border-amber-500/50 hover:bg-white/60 hover:scale-110 transition-all duration-300 cursor-pointer group"
        title="Ir a versión clásica"
      >
        <span className="text-lg group-hover:animate-[leaf-spin_1.5s_ease-in-out_infinite]">🌿</span>
      </a>
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