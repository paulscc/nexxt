import { motion } from 'motion/react';
import SplitText from './SplitText';

const techs = [
  { name: 'Python', svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13H10.7l-.1.12h3.72l.1.12v1.04l-.05.12h-2.9l-.1.12v.96h-1.8l-.1-.12-.01-1.04.02-.5.1-.44.19-.4.27-.33.34-.28.39-.2.44-.14.38-.08.32-.02.24-.02.13-.01.24.01zM12.2 1.17c-.37 0-.67.3-.67.67 0 .36.3.66.67.66.36 0 .66-.3.66-.66 0-.37-.3-.67-.66-.67z"/><path d="M11.3 9.65c.08.4.18.79.3 1.18.25.78.56 1.54.92 2.28.35.74.76 1.45 1.22 2.14.46.68.97 1.33 1.53 1.94.56.61 1.16 1.17 1.8 1.7.64.52 1.32.98 2.04 1.38.72.4 1.47.74 2.25 1.01.78.27 1.58.47 2.4.6.82.13 1.65.19 2.48.19v1.2c-.92-.04-1.83-.16-2.72-.36-.89-.2-1.75-.48-2.58-.84-.83-.36-1.62-.78-2.37-1.26-.75-.48-1.45-1.02-2.1-1.62-.65-.6-1.24-1.25-1.78-1.95-.54-.7-1.02-1.44-1.44-2.22-.42-.78-.78-1.58-1.08-2.42-.3-.83-.53-1.68-.7-2.55z"/></svg> },
  { name: 'React', svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg> },
  { name: 'TS', svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm9.221 10.5h4.26v2.11h-1.44v6.92h-1.68v-6.92h-1.44V12.61h.3zm4.79 0h3.84l.07.51.89 5.5.65-5.5h3.39v9.14h-1.5v-6.4l-.95 6.4h-1.53l-.86-6.19v6.19h-1.5v-9.14z"/></svg> },
  { name: 'Node', svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M11.998 0c-.191 0-.382.05-.548.148L2.482 5.336c-.332.192-.546.548-.546.933v11.462c0 .385.214.741.546.933l8.968 5.188c.166.098.357.148.548.148.191 0 .382-.05.548-.148l8.968-5.188c.332-.192.546-.548.546-.933V6.269c0-.385-.214-.741-.546-.933L12.546.148C12.38.05 12.189 0 11.998 0zm1.09 2.1l7.693 4.457c.192.11.302.31.302.527v8.727c0 .217-.11.417-.302.527l-7.693 4.457c-.192.11-.432.11-.624 0l-7.693-4.457c-.192-.11-.302-.31-.302-.527V7.084c0-.217.11-.417.302-.527l7.693-4.457c.192-.11.432-.11.624 0z"/></svg> },
  { name: 'TF', svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M1.292 5.856v11.78l3.985 2.3V8.158l9.2-5.312-2.3-1.328zm18.623 3.985l-8.14 4.7v9.77l3.985-2.3V14.31l8.14-4.7z"/></svg> },
  { name: 'PyT', svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12 2L2 7v10l10 5 10-5V7zm0 2.1l7.3 3.6-7.3 3.6-7.3-3.6zM4 16.3V9.5l7 3.5v6.9l-7-3.5zm9 3.5v-6.9l7-3.5v6.9l-7 3.5z"/></svg> },
];

export default function TechnologiesSection() {
  return (
    <section className="py-4 px-3 md:px-6 lg:px-8 bg-transparent" id="technologies">
      <div className="w-full max-w-7xl mx-auto rounded-[32px] md:rounded-[40px] bg-stone-950 border border-stone-800/80 px-6 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20 shadow-2xl">
        <div className="flex flex-col gap-4 mb-10 text-left">
          <SplitText text="TECNOLOGÍAS" as="h3" className="font-custom text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-normal leading-tight font-normal" />
          <p className="font-sans text-[9px] sm:text-[10px] text-stone-400 leading-relaxed font-light max-w-xl">
            Utilizamos las tecnologías más modernas y robustas para construir soluciones escalables, seguras y de alto rendimiento.
          </p>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {techs.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex flex-col items-center gap-2 p-3 rounded-[16px] bg-stone-900/50 hover:bg-stone-900/90 border border-stone-800/60 hover:border-amber-500/20 transition-all group"
            >
              <div className="text-stone-400 group-hover:text-amber-400 group-hover:scale-110 transition-all">
                {tech.svg}
              </div>
              <span className="font-custom text-[8px] text-stone-400 group-hover:text-white uppercase tracking-wider">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}