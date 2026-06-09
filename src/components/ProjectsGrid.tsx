import { useState } from 'react';
import { motion } from 'motion/react';
import { Project } from '../types';
import { PROJECTS } from '../data';
import { ArrowUpRight, FolderGit2, Calendar, Target, Eye } from 'lucide-react';

interface ProjectsGridProps {
  onSelectProject: (project: Project) => void;
}

export default function ProjectsGrid({ onSelectProject }: ProjectsGridProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section 
      id="projects" 
      className="py-4 px-4 md:px-8 bg-transparent flex flex-col justify-center"
    >
      <div className="w-full max-w-7xl mx-auto">
        
        {/* 2x2 Grid of Rounded Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 lg:p-2" id="projects-container">
          {PROJECTS.map((project) => {
            const isHovered = hoveredId === project.id;
            return (
              <motion.div
                key={project.id}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => onSelectProject(project)}
                className="relative aspect-square md:aspect-[4/3] rounded-[32px] md:rounded-[40px] overflow-hidden group cursor-pointer border border-stone-800/60 bg-stone-900 shadow-2xl"
                whileTap={{ scale: 0.98 }}
                id={`project-card-${project.id}`}
              >
                {/* Background Image with hover scale */}
                <motion.div
                  className="absolute inset-0 w-full h-full"
                  animate={{ scale: isHovered ? 1.05 : 1 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-90 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-stone-950/35" />
                </motion.div>

                {/* Corner Tech Label (Top Left) */}
                <div className="absolute top-6 left-6 font-mono text-[10px] tracking-widest bg-stone-950/60 backdrop-blur-md px-3 py-1 rounded-full text-stone-300 border border-stone-800 uppercase select-none">
                  {project.year}
                </div>

                {/* Corner Icon (Top Right) */}
                <div className="absolute top-6 right-6 w-9 h-9 flex items-center justify-center rounded-full bg-stone-950/80 backdrop-blur-md text-white border border-stone-800 opacity-0 group-hover:opacity-100 transition-all transform translate-y-[-10px] group-hover:translate-y-0 duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>

                {/* Centered Glassmorphism Pill overlay mimicking Image 2 precisely */}
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <motion.div
                    animate={{ 
                      y: isHovered ? -5 : 0,
                      scale: isHovered ? 1.03 : 1,
                    }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full max-w-[240px] sm:max-w-[280px] aspect-square rounded-[32px] glass-panel-dark flex flex-col justify-center items-center text-center p-4 sm:p-6 shadow-2xl relative overflow-hidden"
                    id={`glass-panel-${project.id}`}
                  >
                    {/* Tiny micro elements for supreme design look */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    
                    <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.25em] font-medium text-amber-500 mb-2 uppercase select-noneBlock">
                      {project.category}
                    </span>
                    <h3 className="font-pixel text-sm sm:text-lg md:text-xl text-white tracking-widest leading-snug px-2">
                      {project.title}
                    </h3>
                    
                    <p className="font-mono text-[9px] uppercase tracking-widest text-[#ececec]/50 mt-3 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 translate-y-[5px] group-hover:translate-y-0 transition-all duration-300">
                      Ver más <ArrowUpRight className="w-2.5 h-2.5" />
                    </p>
                  </motion.div>
                </div>

                {/* Bottom Technical Info Slider */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-sans text-xs text-stone-300 truncate max-w-[80%] italic">
                    {project.tagline}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}