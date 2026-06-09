import { useNavigate, useLocation } from 'react-router-dom';
import WaveText from './WaveText';

export default function PageFooter() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const scrollToSection = (id: string) => {
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <footer className="p-3 md:p-6 lg:p-8 bg-transparent relative z-10 w-full">
      <div className="w-full max-w-7xl mx-auto rounded-[32px] md:rounded-[40px] bg-stone-950 border border-stone-800/80 p-8 md:p-12 flex flex-col justify-between items-center text-center gap-10 shadow-2xl">
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-start pb-10 text-left">
          
          {/* Servicios */}
          <div className="flex flex-col gap-3">
            <h4 className="font-custom text-[9px] text-stone-400 tracking-[0.25em] font-normal uppercase">Servicios</h4>
            <ul className="flex flex-col gap-2 list-none p-0">
              <li><button onClick={() => navigate('/servicios')} className="font-custom text-[10px] text-stone-400 hover:text-white transition-colors uppercase cursor-pointer text-left">Todos los Servicios</button></li>
              <li><button onClick={() => navigate('/web')} className="font-custom text-[10px] text-stone-400 hover:text-white transition-colors uppercase cursor-pointer text-left">Desarrollo Web</button></li>
              <li><button onClick={() => navigate('/ia')} className="font-custom text-[10px] text-stone-400 hover:text-white transition-colors uppercase cursor-pointer text-left">Integraciones IA</button></li>
              <li><button onClick={() => navigate('/ml')} className="font-custom text-[10px] text-stone-400 hover:text-white transition-colors uppercase cursor-pointer text-left">Machine Learning</button></li>
              <li><button onClick={() => navigate('/llm')} className="font-custom text-[10px] text-stone-400 hover:text-white transition-colors uppercase cursor-pointer text-left">LLMs & Fine-tuning</button></li>
            </ul>
          </div>

          {/* Empresa */}
          <div className="flex flex-col gap-3">
            <h4 className="font-custom text-[9px] text-stone-400 tracking-[0.25em] font-normal uppercase">Empresa</h4>
            <ul className="flex flex-col gap-2 list-none p-0">
              <li><button onClick={() => navigate('/about')} className="font-custom text-[10px] text-stone-400 hover:text-white transition-colors uppercase cursor-pointer text-left">Nosotros</button></li>
              <li><button onClick={() => navigate('/contact')} className="font-custom text-[10px] text-stone-400 hover:text-white transition-colors uppercase cursor-pointer text-left">Contacto</button></li>
            </ul>
          </div>

          {/* Ubicación */}
          <div className="flex flex-col gap-3">
            <h4 className="font-custom text-[9px] text-stone-400 tracking-[0.25em] font-normal uppercase">Ubicación</h4>
            <ul className="flex flex-col gap-2 list-none p-0">
              <li className="font-custom text-[10px] text-stone-400">Quito, Ecuador</li>
              <li className="font-custom text-[10px] text-stone-400">Remoto Global</li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-3">
            <h4 className="font-custom text-[9px] text-stone-400 tracking-[0.25em] font-normal uppercase">Legal</h4>
            <ul className="flex flex-col gap-2 list-none p-0">
              <li><button onClick={() => navigate('/privacidad')} className="font-custom text-[10px] text-stone-400 hover:text-white transition-colors uppercase cursor-pointer text-left">Privacidad</button></li>
              <li><button onClick={() => navigate('/terminos')} className="font-custom text-[10px] text-stone-400 hover:text-white transition-colors uppercase cursor-pointer text-left">Términos</button></li>
              <li><button onClick={() => navigate('/cookies')} className="font-custom text-[10px] text-stone-400 hover:text-white transition-colors uppercase cursor-pointer text-left">Cookies</button></li>
            </ul>
          </div>

        </div>

        {/* GET IN TOUCH */}
        <div className="w-full text-center pb-4">
          <p className="font-custom text-[9px] text-stone-500 tracking-[0.25em] uppercase mb-3">CONTACTO</p>
          <a href="mailto:team@nexxts.es" className="font-custom text-xs md:text-sm text-white hover:text-amber-400 transition-colors tracking-wider">
            TEAM@NEXXTS.ES
          </a>
        </div>

        {/* Mega */}
        <div className="w-full text-center border-t border-stone-800 pt-8">
          <p className="font-custom text-lg sm:text-xl md:text-2xl text-stone-300 leading-relaxed">
            Innovación ecuatoriana para el mundo. <span className="text-amber-500 italic">Nexxts.</span>
          </p>
        </div>

        {/* Branding */}
        <div className="w-full flex flex-col items-center justify-center py-4 select-none">
          <WaveText text="NEXXTS" className="font-custom text-[36px] sm:text-[60px] md:text-[80px] lg:text-[100px] text-white leading-none tracking-[-0.1em] uppercase" />
          <span className="font-custom text-[8px] md:text-[9px] text-stone-500 tracking-[0.3em] uppercase mt-2">
            ✦ Nexxts — © 2026 — Quito, Ecuador — Todos los derechos reservados
          </span>
        </div>
      </div>
    </footer>
  );
}