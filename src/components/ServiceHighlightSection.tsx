import { useNavigate } from 'react-router-dom';
import { ArrowRight, Monitor } from 'lucide-react';
import { motion } from 'motion/react';

export default function ServiceHighlightSection() {
  const navigate = useNavigate();

  return (
    <section className="py-4 px-3 md:px-6 lg:px-8 bg-transparent" id="services-highlight">
      <div className="w-full max-w-7xl mx-auto rounded-[32px] md:rounded-[40px] overflow-hidden bg-stone-950 border border-stone-800/80 shadow-2xl min-h-[300px] md:min-h-[400px] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 w-full h-full">
          {/* Left side: Image */}
          <div className="aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden">
            <img
              src="/src/assets/images/web.gif"
              alt="Aplicaciones Web Modernas"
              className="w-full h-full object-cover brightness-90"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Right side: Content */}
          <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 text-left">
            
            <h2 className="font-custom text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-normal leading-tight mb-4">
              Aplicaciones Web Modernas
            </h2>
            <p className="font-sans text-xs sm:text-sm text-stone-400 leading-relaxed max-w-md mb-6">
              Creamos sitios web y aplicaciones web profesionales, rápidas y optimizadas que impulsan tu negocio en el entorno digital.
            </p>
            <ul className="space-y-2 mb-6">
              {['Sitios corporativos y landing pages', 'Tiendas online (E-commerce)', 'Plataformas SaaS', 'APIs y microservicios'].map((item, i) => (
                <li key={i} className="font-sans text-xs text-stone-500 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <motion.button
              onClick={() => navigate('/servicios')}
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-2 text-[10px] px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-custom tracking-widest uppercase border border-white/20 transition-all cursor-pointer w-fit"
            >
              Ver todos los servicios
              <ArrowRight className="w-3 h-3" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}