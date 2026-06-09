import { useState } from 'react';
import { motion } from 'motion/react';
import { Project } from '../types';
import { PROJECTS } from '../data';
import { ArrowUpRight, FolderGit2, Award, BarChart3, Users, Eye, Sparkles } from 'lucide-react';
import SplitText from '../components/SplitText';
import { useNavigate } from 'react-router-dom';
import DetailsModal from '../components/DetailsModal';
import ContactSection from '../components/ContactSection';
import PageFooter from '../components/PageFooter';
import FloatingNavBar from '../components/FloatingNavBar';
import { AnimatePresence } from 'motion/react';

const stats = [
  { icon: <Award className="w-5 h-5" />, value: '14+', label: 'Projects Delivered' },
  { icon: <Users className="w-5 h-5" />, value: '12', label: 'Global Clients' },
  { icon: <BarChart3 className="w-5 h-5" />, value: '98%', label: 'Client Satisfaction' },
  { icon: <Eye className="w-5 h-5" />, value: '2M+', label: 'Impressions' },
];

export default function ProjectsPage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen text-stone-800">
      <div className="fixed top-6 left-6 z-50">
        <button onClick={() => navigate('/')} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-stone-200 text-stone-700 font-custom text-[10px] tracking-widest uppercase hover:bg-white transition-all shadow-md cursor-pointer">← BACK</button>
      </div>
      <main className="w-full flex flex-col bg-gradient-to-b from-white via-stone-100 via-stone-200 via-stone-300 to-stone-950">
        {/* Hero Section */}
        <section className="p-3 md:p-6 lg:p-8 min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-white to-stone-100">
          <div className="relative w-full max-w-7xl mx-auto rounded-[32px] md:rounded-[48px] bg-[#ececec] overflow-hidden p-8 md:p-16 lg:p-20 shadow-lg">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="relative z-10 text-center">
              <FolderGit2 className="w-8 h-8 text-orange-500 mx-auto mb-4" />
              <span className="font-custom text-xs tracking-widest text-stone-500 uppercase block mb-3">SELECTED WORK // 2025</span>
              <h1 className="font-custom text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-stone-950 uppercase tracking-normal leading-none mb-6">STUDIO PORTFOLIO</h1>
              <p className="max-w-2xl mx-auto text-stone-600 text-sm font-sans leading-relaxed">A curated showcase of absolute design systems, full brand overhauls, and spatial art direction that we have orchestrated this year.</p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 px-4 md:px-8 bg-transparent">
          <div className="w-full max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div key={i} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex flex-col items-center text-center p-6 rounded-[24px] bg-white border border-stone-200 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center mb-3">{stat.icon}</div>
                <span className="font-custom text-2xl sm:text-3xl text-stone-900">{stat.value}</span>
                <span className="font-sans text-xs text-stone-500 mt-1">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 px-4 md:px-8">
          <div className="w-full max-w-7xl mx-auto">
            <div className="flex items-center gap-2 mb-8"><Sparkles className="w-4 h-4 text-orange-500" /><span className="font-custom text-xs tracking-widest text-stone-500 uppercase">FEATURED CASE STUDIES</span></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {PROJECTS.map((project) => {
                const isHovered = hoveredId === project.id;
                return (
                  <motion.div key={project.id} onMouseEnter={() => setHoveredId(project.id)} onMouseLeave={() => setHoveredId(null)} onClick={() => setSelectedProject(project)} className="relative aspect-square md:aspect-[4/3] rounded-[32px] md:rounded-[40px] overflow-hidden group cursor-pointer border border-stone-800/60 bg-stone-900 shadow-2xl" whileTap={{ scale: 0.98 }}>
                    <motion.div className="absolute inset-0 w-full h-full" animate={{ scale: isHovered ? 1.05 : 1 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-90 transition-all duration-700" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-stone-950/35" />
                    </motion.div>
                    <div className="absolute top-6 left-6 font-custom text-[10px] tracking-widest bg-stone-950/60 backdrop-blur-md px-3 py-1 rounded-full text-stone-300 border border-stone-800 uppercase">{project.year}</div>
                    <div className="absolute top-6 right-6 w-9 h-9 flex items-center justify-center rounded-full bg-stone-950/80 backdrop-blur-md text-white border border-stone-800 opacity-0 group-hover:opacity-100 transition-all duration-300"><ArrowUpRight className="w-4 h-4" /></div>
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <motion.div animate={{ y: isHovered ? -5 : 0, scale: isHovered ? 1.03 : 1 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} className="w-full max-w-[240px] sm:max-w-[280px] aspect-square rounded-[32px] glass-panel-dark flex flex-col justify-center items-center text-center p-4 sm:p-6 shadow-2xl">
                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                        <span className="font-custom text-[9px] sm:text-[10px] tracking-[0.25em] font-normal text-amber-500 mb-2 uppercase">{project.category}</span>
                        <h3 className="font-custom text-sm sm:text-lg md:text-xl text-white tracking-widest leading-snug px-2">{project.title}</h3>
                        <p className="font-custom text-[9px] uppercase tracking-widest text-[#ececec]/50 mt-3 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 translate-y-[5px] group-hover:translate-y-0 transition-all duration-300">Explore Case <ArrowUpRight className="w-2.5 h-2.5" /></p>
                      </motion.div>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"><span className="font-sans text-xs text-stone-300 truncate max-w-[80%] italic">{project.tagline}</span></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <ContactSection />
        <PageFooter />
      <FloatingNavBar />
      </main>
      <AnimatePresence mode="wait">
        {selectedProject && <DetailsModal project={selectedProject} post={null} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </div>
  );
}