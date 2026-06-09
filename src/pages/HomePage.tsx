import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { 
  Instagram, 
  Linkedin, 
  Youtube, 
  Globe, 
  Heart
} from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ProjectsGrid from '../components/ProjectsGrid';
import ServiceHighlightSection from '../components/ServiceHighlightSection';
import AboutSection from '../components/AboutSection';
import TechnologiesSection from '../components/TechnologiesSection';
import JournalSection from '../components/JournalSection';
import ContactSection from '../components/ContactSection';
import FloatingNavBar from '../components/FloatingNavBar';
import DetailsModal from '../components/DetailsModal';
import WaveText from '../components/WaveText';
import { Project, JournalPost } from '../types';

export default function HomePage() {
  const [activeSegment, setActiveSegment] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedPost, setSelectedPost] = useState<JournalPost | null>(null);

  useEffect(() => {
    const segments = ['home', 'about', 'projects', 'journal', 'contact'];
    const observers = segments.map((id) => {
      const element = document.getElementById(id);
      if (!element) return null;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveSegment(id);
          });
        },
        { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
      );
      observer.observe(element);
      return { element, observer };
    });
    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.element);
      });
    };
  }, []);

  const handleContactScroll = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExploreScroll = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-white text-stone-800 flex flex-col justify-between selection:bg-amber-500 selection:text-stone-950">
      <FloatingNavBar />
      <main className="w-full flex flex-col bg-gradient-to-b from-white via-stone-100 via-stone-200 via-stone-300 to-stone-950">
        <HeroSection onContactClick={handleContactScroll} onExploreProjects={handleExploreScroll} />
        <AboutSection />
        <ServiceHighlightSection />
        <TechnologiesSection />
        <ProjectsGrid onSelectProject={(project) => { setSelectedProject(project); setSelectedPost(null); }} />
        <JournalSection onSelectPost={(post) => { setSelectedPost(post); setSelectedProject(null); }} />
        <ContactSection />
        <footer className="p-3 md:p-6 lg:p-8 bg-transparent relative z-10 w-full">
        <div className="w-full max-w-7xl mx-auto rounded-[32px] md:rounded-[40px] bg-stone-950 border border-stone-800/80 p-8 md:p-12 flex flex-col justify-between items-center text-center gap-10 shadow-2xl">
          <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-10 text-left">
            <div className="md:col-span-4 flex flex-col gap-3">
              <span className="font-custom text-[9px] text-stone-400 tracking-[0.25em] font-normal uppercase">STAY CONNECTED.</span>
              <h3 className="font-custom text-lg md:text-xl text-white tracking-normal leading-tight font-normal">NEXXTS.COM.EC</h3>
              <p className="font-sans text-xs text-stone-400 mt-1 uppercase tracking-widest">Diseño Web e Identidad Digital</p>
              <div className="flex items-center gap-1.5 mt-4 text-[10px] text-stone-500 font-custom">
                <span>Made with</span> <Heart className="w-3.5 h-3.5 text-orange-500 fill-current animate-pulse" /> <span>by Nexxts Studio</span>
              </div>
            </div>
            <div className="md:col-span-4 flex flex-col gap-3">
              <span className="font-custom text-[9px] text-stone-400 tracking-[0.25em] font-normal uppercase">NAVIGATION</span>
              <div className="grid grid-cols-2 gap-2 text-xs font-custom">
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-amber-400 text-stone-400 transition-colors uppercase cursor-pointer text-left">Home</button>
                <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-amber-400 text-stone-400 transition-colors uppercase cursor-pointer text-left">About</button>
                <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-amber-400 text-stone-400 transition-colors uppercase cursor-pointer text-left">Projects</button>
                <button onClick={() => document.getElementById('journal')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-amber-400 text-stone-400 transition-colors uppercase cursor-pointer text-left">Journal</button>
                <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-amber-400 text-stone-400 transition-colors uppercase cursor-pointer text-left col-span-2">Contact us</button>
              </div>
            </div>
            <div className="md:col-span-4 flex flex-col gap-4 text-left">
              <span className="font-custom text-[9px] text-stone-400 tracking-[0.25em] font-normal uppercase">SOCIAL MEDIA</span>
              <div className="flex items-center gap-3.5">
                <a href="https://x.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-stone-800 border border-stone-700 flex items-center justify-center text-stone-400 hover:text-white hover:border-amber-500/40 transition-all"><Globe className="w-4 h-4" /></a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-stone-800 border border-stone-700 flex items-center justify-center text-stone-400 hover:text-white hover:border-amber-500/40 transition-all"><Instagram className="w-4 h-4" /></a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-stone-800 border border-stone-700 flex items-center justify-center text-stone-400 hover:text-white hover:border-amber-500/40 transition-all"><Linkedin className="w-4 h-4" /></a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-stone-800 border border-stone-700 flex items-center justify-center text-stone-400 hover:text-white hover:border-amber-500/40 transition-all"><Youtube className="w-4 h-4" /></a>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center py-6 select-none">
            <WaveText text="NEXXTS" className="font-custom text-[36px] sm:text-[60px] md:text-[80px] lg:text-[100px] text-white leading-none tracking-[-0.1em] uppercase" />
            <span className="font-mono text-[9px] md:text-[10px] text-stone-500 tracking-[0.3em] uppercase mt-2">@2025 MAGNETTO STUDIO. ALL RIGHTS RESERVED.</span>
          </div>
        </div>
      </footer>
      </main>
      <AnimatePresence mode="wait">
        {(selectedProject || selectedPost) && (
          <DetailsModal project={selectedProject} post={selectedPost} onClose={() => { setSelectedProject(null); setSelectedPost(null); }} />
        )}
      </AnimatePresence>
    </div>
  );
}