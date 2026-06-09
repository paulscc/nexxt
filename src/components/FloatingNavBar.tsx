import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, ArrowUp, Compass, Home } from 'lucide-react';

export default function FloatingNavBar() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME', path: '/' },
    { label: 'SERVICIOS', path: '/servicios' },
    { label: 'NOSOTROS', path: '/about' },
    { label: 'CONTACTO', path: '/contact' },
  ];

  const handleNavClick = (path: string) => {
    if (isHome && path === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(path);
    }
  };

  const handleContactClick = () => {
    if (isHome) {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/contact');
    }
  };

  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="flex items-center gap-2 md:gap-5 px-3 md:px-5 py-2.5 rounded-full bg-black/70 hover:bg-black/80 border border-stone-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md pointer-events-auto max-w-full overflow-x-auto no-scrollbar transition-colors"
        id="floating-nav-container"
      >
        {/* Logo / Home */}
        <div 
          onClick={() => handleNavClick('/')}
          className="relative group flex items-center justify-center cursor-pointer min-w-10 h-10 w-10 rounded-full bg-gradient-to-tr from-amber-600 to-orange-400 overflow-hidden border border-stone-800 shrink-0 select-none"
          id="nav-logo-btn"
        >
          <img
            src="/src/assets/images/about_ambient_o_1780935044349.png"
            alt="Nexxts Logo"
            className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-orange-500/20 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
        </div>

        {/* Links */}
        <nav className="flex items-center gap-1 shrink-0" id="nav-links-list">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className="relative px-3 md:px-[14px] py-2 text-[11px] md:text-xs font-custom font-normal tracking-widest text-stone-400 hover:text-white transition-colors cursor-pointer focus:outline-none"
                id={`nav-link-${item.label.toLowerCase()}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-white/10 border border-white/5"
                    style={{ originY: '0px' }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-1.5 shrink-0" id="nav-actions-container">
          <button
            onClick={handleContactClick}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 text-white font-custom font-normal tracking-widest text-[11px] md:text-xs transition-transform active:scale-95 shadow-md hover:shadow-lg cursor-pointer focus:outline-none border border-white/10"
            id="nav-contact-btn"
          >
            <span>CONTACTO</span>
            <Plus className="w-3 h-3 stroke-[3px]" />
          </button>

          <AnimatePresence>
            {scrolled && (
              <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-white border border-stone-700 cursor-pointer focus:outline-none"
                title="Scroll to top"
                id="nav-scroll-top-btn"
              >
                <ArrowUp className="w-4 h-4" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}