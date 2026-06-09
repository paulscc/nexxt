import { motion } from 'motion/react';
import { Sparkles, MoveRight, Layers } from 'lucide-react';
import SplitText from './SplitText';

interface HeroSectionProps {
  onContactClick: () => void;
  onExploreProjects: () => void;
}

export default function HeroSection({ onContactClick, onExploreProjects }: HeroSectionProps) {
  return (
    <section 
      id="home" 
      className="p-3 md:p-6 lg:p-8 min-h-screen flex items-center justify-center bg-transparent"
    >
      <div 
        className="relative w-full max-w-7xl mx-auto rounded-[32px] md:rounded-[48px] bg-[#ececec] text-stone-900 overflow-hidden flex flex-col justify-between p-6 md:p-12 lg:p-16 min-h-[85vh] md:min-h-[90vh]"
        id="hero-enclosure"
      >
        
        {/* Core Layout Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto py-8">
          {/* Brand Heading & Subtitles */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left order-2 lg:order-1">
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <SplitText 
                text="NEXXTS" 
                as="h1" 
                className="font-custom text-[36px] sm:text-[52px] md:text-[66px] lg:text-[64px] xl:text-[72px] leading-[0.9] font-normal text-stone-950 uppercase"
                id="hero-main-title"
              />
              
              <div className="mt-3 flex flex-col gap-0" id="hero-subheaders">
                <SplitText text="AGENCIA DIGITAL • QUITO" as="p" className="font-custom text-[10px] md:text-xs font-normal text-stone-800 uppercase tracking-normal" />
              </div>
            </motion.div>
          </div>

          {/* Centered Creative Portrait Image */}
          <div className="lg:col-span-4 flex items-center justify-center order-1 lg:order-2 h-full max-w-[380px] lg:max-w-none mx-auto relative">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="relative w-full flex items-center justify-center"
              id="hero-portrait-frame"
            >
              <img
              src="/src/assets/images/pix1861-keyboard-1628579_1920-removebg-preview.png"
              alt="Keyboard creative showcase"
                className="w-full h-auto object-contain max-h-[70vh] font-sans"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-3 flex flex-col justify-center order-3 lg:order-3 text-left">
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              className="flex flex-col gap-4 text-stone-700 font-sans font-light"
              id="hero-intro-text-column"
            >
              <p className="text-xs text-stone-500 leading-relaxed">
                Creamos páginas web profesionales, rápidas y optimizadas que impulsan tu negocio en el entorno digital. Innovación ecuatoriana para el mundo.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
