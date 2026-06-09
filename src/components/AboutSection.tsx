import { motion } from 'motion/react';
import { CLIENTS } from '../data';
import SplitText from './SplitText';
import { 
  Compass, 
  Waves, 
  Triangle, 
  Cpu, 
  Sparkles, 
  ChevronRight, 
  Award,
  Users2
} from 'lucide-react';

export default function AboutSection() {
  // Map our logo types to lucide icons safely
  const getLogoIcon = (type: string) => {
    switch (type) {
      case 'wave':
        return <Waves className="w-8 h-8 text-stone-400 group-hover:text-amber-500 transition-colors" />;
      case 'meridian':
        return <Compass className="w-8 h-8 text-stone-400 group-hover:text-amber-500 transition-colors" />;
      case 'arc':
        return <Triangle className="w-8 h-8 text-stone-400 group-hover:text-amber-500 transition-colors" />;
      case 'oakley':
        return <Award className="w-8 h-8 text-stone-400 group-hover:text-amber-500 transition-colors" />;
      case 'delta':
        return <Cpu className="w-8 h-8 text-stone-400 group-hover:text-amber-500 transition-colors" />;
      default:
        return <Sparkles className="w-8 h-8 text-stone-400 group-hover:text-amber-500 transition-colors" />;
    }
  };

  return (
    <section 
      id="about" 
      className="py-4 px-3 md:px-6 lg:px-8 bg-transparent flex flex-col items-center justify-center gap-4"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* About Main Card - Precise mimicry of Image 3 orange bar */}
        <div 
          className="relative w-full rounded-[32px] md:rounded-[40px] overflow-hidden h-[500px] md:h-[600px] lg:h-[700px] flex flex-col lg:flex-row items-center justify-between p-8 md:p-14 lg:p-18 border border-amber-500/10 shadow-[0_20px_50px_rgba(249,115,22,0.15)]"
          id="about-card-container"
        >
          {/* Real Generated Art Image in Background */}
          <div className="absolute inset-0 z-0">
            <img
              src="/src/assets/images/about_ambient_o_1780935044349.png"
              alt="Orange Abstract Backlighting"
              className="w-full h-full object-cover font-sans"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 via-transparent to-black/40 mix-blend-multiply" />
          </div>

          {/* Left Translucent Glass Pill containing "ABOUT" */}
          <div className="relative z-10 w-full lg:w-7/12 flex items-center justify-center lg:justify-start py-6 lg:py-0">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-[460px] h-28 sm:h-36 rounded-full glass-panel-light flex items-center justify-between px-6 sm:px-10 border border-white/35 shadow-2xl"
              id="about-tag-panel"
            >
              <div className="flex flex-col text-left font-mono">
                <span className="text-[10px] sm:text-xs tracking-[0.25em] font-bold text-stone-900 uppercase">I. NOSOTROS</span>
                
              </div>
              
              <SplitText text="ABOUT" as="h2" className="font-custom text-2xl sm:text-4xl text-white uppercase tracking-normal leading-tight font-normal" />
            </motion.div>
          </div>

          {/* Right Text Block */}
          <div className="relative z-10 w-full lg:w-5/12 text-right flex flex-col justify-center items-end">
            <p className="text-white font-sans text-[7px] sm:text-[9px] leading-relaxed tracking-wide font-light max-w-xs">
              En <span className="text-white">Nexxts</span>, creemos que la tecnología debe ser un catalizador para el crecimiento empresarial. Nuestra misión es combinar experiencia técnica con innovación constante, entregando soluciones de software que no solo funcionan, sino que transforman negocios.
            </p>
          </div>
        </div>

        
      </div>
    </section>
  );
}
