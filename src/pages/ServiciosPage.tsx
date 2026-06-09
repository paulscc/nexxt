import { useState } from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../data';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SplitText from '../components/SplitText';
import PageFooter from '../components/PageFooter';
import FloatingNavBar from '../components/FloatingNavBar';
import ContactSection from '../components/ContactSection';

export default function ServiciosPage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen text-stone-800">
      <div className="fixed top-6 left-6 z-50">
        <button onClick={() => navigate('/')} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-stone-200 text-stone-700 font-custom text-[10px] tracking-widest uppercase hover:bg-white transition-all shadow-md cursor-pointer">← BACK</button>
      </div>
      <main className="w-full flex flex-col bg-gradient-to-b from-white via-stone-100 via-stone-200 via-stone-300 to-stone-950">

        {/* Hero */}
        <section className="p-3 md:p-6 lg:p-8 min-h-[80vh] flex items-center justify-center bg-transparent">
          <div className="relative w-full max-w-7xl mx-auto rounded-[32px] md:rounded-[48px] overflow-hidden bg-stone-900 shadow-2xl border border-stone-800/80">
            <div className="absolute inset-0 z-0">
              <img
                src="/src/assets/images/photo-1508882100003-8ae16a4abbaf.avif"
                alt="Servicios Nexxts"
                className="w-full h-full object-contain opacity-30 font-sans scale-150"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-stone-950/85 via-stone-950/60 to-stone-950/30" />
            </div>
            <div className="relative z-10 min-h-[400px] md:min-h-[500px] flex flex-col lg:flex-row items-center justify-between p-8 md:p-16 lg:p-20">
              <div>
                <h1 className="font-custom text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] leading-[0.9] font-normal text-white uppercase">
                  SERVICIOS
                </h1>
              </div>
              <div className="lg:max-w-xs text-right">
                <p className="font-sans text-[7px] sm:text-[9px] text-stone-300 leading-relaxed tracking-wide font-light">
                  Creamos sitios web y aplicaciones web profesionales, rápidas y optimizadas que impulsan tu negocio en el entorno digital.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios Grid - same format as home projects */}
        <section className="py-16 px-4 md:px-8">
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {SERVICES.map((service) => {
                const isHovered = hoveredId === service.id;
                return (
                  <motion.div
                    key={service.id}
                    onMouseEnter={() => setHoveredId(service.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    onClick={() => navigate(`/${service.id}`)}
                    className="relative aspect-square md:aspect-[4/3] rounded-[32px] md:rounded-[40px] overflow-hidden group cursor-pointer border border-stone-800/60 bg-stone-900 shadow-2xl"
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className="absolute inset-0 w-full h-full"
                      animate={{ scale: isHovered ? 1.05 : 1 }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-90 transition-all duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-stone-950/35" />
                    </motion.div>

                    <div className="absolute top-6 left-6 font-custom text-[10px] tracking-widest bg-stone-950/60 backdrop-blur-md px-3 py-1 rounded-full text-stone-300 border border-stone-800 uppercase select-none">
                      {service.num}
                    </div>

                    <div className="absolute top-6 right-6 w-9 h-9 flex items-center justify-center rounded-full bg-stone-950/80 backdrop-blur-md text-white border border-stone-800 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <motion.div
                        animate={{ y: isHovered ? -5 : 0, scale: isHovered ? 1.03 : 1 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full max-w-[240px] sm:max-w-[280px] aspect-square rounded-[32px] glass-panel-dark flex flex-col justify-center items-center text-center p-4 sm:p-6 shadow-2xl relative overflow-hidden"
                      >
                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                        <span className="font-custom text-[9px] sm:text-[10px] tracking-[0.25em] font-normal text-amber-500 mb-2 uppercase">{service.tag}</span>
                        <h3 className="font-custom text-sm sm:text-lg md:text-xl text-white tracking-widest leading-snug px-2">{service.title}</h3>
                        <p className="font-custom text-[9px] uppercase tracking-widest text-[#ececec]/50 mt-3 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 translate-y-[5px] group-hover:translate-y-0 transition-all duration-300">
                          Ver más <ArrowUpRight className="w-2.5 h-2.5" />
                        </p>
                      </motion.div>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="font-sans text-xs text-stone-300 truncate max-w-[80%] italic">{service.desc}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <ContactSection />
        <FloatingNavBar />
        <PageFooter />
      </main>
    </div>
  );
}