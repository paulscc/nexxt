import { motion } from 'motion/react';
import { Project, JournalPost } from '../types';
import { X, Calendar, User, ShieldAlert, CheckCircle2, ChevronRight, Eye, Sparkles } from 'lucide-react';

interface DetailsModalProps {
  project: Project | null;
  post: JournalPost | null;
  onClose: () => void;
}

export default function DetailsModal({ project, post, onClose }: DetailsModalProps) {
  if (!project && !post) return null;

  const isProject = !!project;
  const title = isProject ? project.title : post.title;
  const category = isProject ? project.category : post.category;
  const image = isProject ? project.image : post.image;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Dark overlay backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-stone-950/80 backdrop-blur-md"
        id="modal-backdrop-layer"
      />

      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: 'spring', duration: 0.5 }}
        className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto no-scrollbar rounded-[32px] bg-stone-900 border border-stone-800 text-stone-100 shadow-[0_30px_70px_rgba(0,0,0,0.8)] z-10 p-6 md:p-10 text-left"
        id="modal-box-card"
      >
        {/* Absolute Top corner close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-stone-950/50 hover:bg-stone-950/90 text-stone-400 hover:text-white border border-stone-800 flex items-center justify-center cursor-pointer transition-all active:scale-95 z-20 focus:outline-none"
          title="Close details"
          id="modal-close-btn"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header / Type block */}
        <div className="flex flex-col gap-1 text-left mt-4" id="modal-content-lead">
          <div className="flex items-center gap-2 mb-2 font-mono">
            <span className="text-[10px] sm:text-xs tracking-[0.2em] font-medium text-amber-500 uppercase">
              {isProject ? 'PORTFOLIO REDIRECT' : 'JOURNAL OPINION'}
            </span>
            <span className="text-stone-600">●</span>
            <span className="text-[10px] sm:text-xs tracking-wider text-stone-500 uppercase">
              {category}
            </span>
          </div>
          
          <h2 className="font-pixel text-xl sm:text-2xl md:text-3xl text-white tracking-widest leading-snug uppercase">
            {title}
          </h2>
        </div>

        {/* Large Media showcase with curved borders */}
        <div className="relative w-full aspect-[16/9] rounded-[24px] overflow-hidden my-6 border border-stone-800" id="modal-media-frame">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover brightness-[0.8] font-sans"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Dynamic Inner Description / Detailed Spec Content */}
        {isProject && project ? (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-sm font-sans" id="project-detailed-body">
            
            {/* Left smaller column: Info & results list */}
            <div className="md:col-span-5 flex flex-col gap-6 font-sans">
              
              {/* Role Spec */}
              <div className="p-5 rounded-2xl bg-stone-950/50 border border-stone-800 text-left">
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#ececec]/40 block mb-1">
                  OUR ROLE
                </span>
                <span className="font-mono text-xs font-bold text-white tracking-wider">
                  {project.role}
                </span>
              </div>

              {/* Tagline */}
              <div className="p-5 rounded-2xl bg-stone-950/50 border border-stone-800 text-left">
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#ececec]/40 block mb-1">
                  SUMMARY INSIGHT
                </span>
                <span className="text-stone-300 italic tracking-wide text-xs">
                  "{project.tagline}"
                </span>
              </div>

              {/* Accomplished items */}
              <div className="text-left font-sans">
                <h4 className="font-mono text-[10px] uppercase tracking-widest text-stone-500 mb-3 font-semibold">
                  ACCOMPLISHED METRICS
                </h4>
                <div className="flex flex-col gap-3">
                  {project.results.map((res, i) => (
                    <div key={i} className="flex gap-2 text-stone-300 text-xs leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right wide column: Description, Challenge, Solution */}
            <div className="md:col-span-7 flex flex-col gap-6 text-left leading-relaxed text-stone-300">
              <div>
                <h4 className="font-mono text-[10px] uppercase tracking-widest text-stone-500 mb-2 font-semibold">
                  OVERVIEW
                </h4>
                <p className="font-light text-sm text-stone-300">
                  {project.description}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-[10px] uppercase tracking-widest text-stone-500 mb-2 font-semibold">
                  THE CHALLENGE
                </h4>
                <p className="font-light text-sm text-stone-300">
                  {project.challenge}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-[10px] uppercase tracking-widest text-stone-500 mb-2 font-semibold">
                  OUR SOLUTION
                </h4>
                <p className="font-light text-sm text-stone-300">
                  {project.solution}
                </p>
              </div>
            </div>

          </div>
        ) : (
          // Journal Essay content rendering
          post && (
            <div className="max-w-2xl mx-auto flex flex-col gap-6 text-stone-300 font-sans leading-relaxed" id="post-essay-body">
              {/* Intro quote summary */}
              <p className="text-lg text-white font-light border-l-2 border-amber-500 pl-4 py-1.5 italic tracking-wide">
                {post.summary}
              </p>

              {/* Paragraph loops */}
              <div className="flex flex-col gap-5 text-sm sm:text-base font-light font-sans text-stone-300">
                {post.content.map((pText, index) => (
                  <p key={index} className="leading-relaxed">
                    {pText}
                  </p>
                ))}
              </div>

              {/* Author footer banner */}
              <div className="flex items-center justify-between border-t border-stone-800 pt-6 mt-8">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-stone-950 flex items-center justify-center text-stone-500 border border-stone-800 uppercase">
                    <User className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col text-left leading-none font-sans">
                    <span className="text-xs font-bold text-stone-200">NEXXTS WRITING NETWORK</span>
                    <span className="text-[9px] text-stone-500 uppercase tracking-wider mt-1">Lead Design Counsel</span>
                  </div>
                </div>

                <span className="font-mono text-[10px] tracking-widest text-stone-600 uppercase">
                  © {new Date().getFullYear()} STUDIO ESSAYS
                </span>
              </div>
            </div>
          )
        )}

        {/* Modal absolute footer close action */}
        <div className="flex items-center justify-center border-t border-stone-800/80 pt-6 mt-10">
          <button
            onClick={onClose}
            className="flex items-center gap-2 group px-6 py-2.5 rounded-full bg-stone-950 hover:bg-stone-800 text-stone-300 hover:text-white font-mono text-[10px] tracking-widest font-bold border border-stone-800 transition-all cursor-pointer"
            id="modal-footer-close"
          >
            <span>CLOSE PANEL</span>
            <X className="w-3.5 h-3.5 group-hover:rotate-90 transition-transform" />
          </button>
        </div>

      </motion.div>
    </div>
  );
}
