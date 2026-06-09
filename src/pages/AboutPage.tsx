import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import SplitText from '../components/SplitText';
import PageFooter from '../components/PageFooter';
import ContactSection from '../components/ContactSection';
import FloatingNavBar from '../components/FloatingNavBar';
import { Sparkles, MapPin, Globe, Clock } from 'lucide-react';

const team = [
  { role: 'CEO & Fundador', name: 'Carlos Martínez', desc: 'Experto en arquitectura de software con más de 12 años de experiencia liderando proyectos tecnológicos en Latinoamérica.' },
  { role: 'CTO', name: 'Ana Rodríguez', desc: 'Especialista en inteligencia artificial y machine learning, PhD en Ciencias de la Computación.' },
  { role: 'Lead Developer', name: 'Miguel Sánchez', desc: 'Desarrollador full-stack con expertise en React, Node.js y arquitecturas cloud-native.' },
  { role: 'AI Engineer', name: 'Laura González', desc: 'Especialista en LLMs, fine-tuning y NLP con experiencia en implementación de soluciones de IA generativa.' },
];

const values = [
  { icon: '🎯', title: 'Excelencia Técnica', desc: 'Nos comprometemos con las más altas estándares de calidad en cada línea de código que escribimos.' },
  { icon: '🤝', title: 'Colaboración', desc: 'Trabajamos como una extensión de tu equipo, manteniendo comunicación transparente y constante.' },
  { icon: '💡', title: 'Innovación', desc: 'Exploramos continuamente nuevas tecnologías para ofrecer soluciones vanguardistas a nuestros clientes.' },
  { icon: '🌍', title: 'Impacto Local', desc: 'Creemos en el potencial de Ecuador y Latinoamérica para liderar la transformación digital.' },
];

export default function AboutPage() {
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
                src="/src/assets/images/photo-1544256718-3bcf237f3974.avif"
                alt="Sobre Nexxts"
                className="w-full h-full object-contain opacity-30 font-sans scale-150"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-stone-950/85 via-stone-950/60 to-stone-950/30" />
            </div>
            <div className="relative z-10 min-h-[400px] md:min-h-[500px] flex flex-col lg:flex-row items-center justify-between p-8 md:p-16 lg:p-20">
              <div>
                <h1 className="font-custom text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] leading-[0.9] font-normal text-white uppercase">
                  NOSOTROS
                </h1>
              </div>
              <div className="lg:max-w-xs text-right">
                <p className="font-sans text-[7px] sm:text-[9px] text-stone-300 leading-relaxed tracking-wide font-light">
                  Somos un equipo de desarrolladores apasionados comprometidos con transformar ideas en soluciones digitales de vanguardia desde el corazón de Ecuador.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-12 px-4 md:px-8">
          <div className="w-full max-w-7xl mx-auto">
            <span className="font-custom text-xs tracking-widest text-amber-600 uppercase block mb-2">NUESTRA HISTORIA</span>
            <h2 className="font-custom text-3xl sm:text-4xl md:text-5xl text-stone-900 uppercase tracking-normal leading-tight mb-8">Una visión compartida</h2>
            <div className="max-w-3xl">
              <p className="font-sans text-sm sm:text-base text-stone-600 leading-relaxed mb-6">
                Nexxts nació en Quito, Ecuador, con la convicción de que la tecnología de calidad no debería ser exclusiva de grandes centros tecnológicos. Desde 2018, hemos trabajado incansablemente para demostrar que el talento ecuatoriano puede competir a nivel global en desarrollo de software, inteligencia artificial y machine learning.
              </p>
              <p className="font-sans text-sm sm:text-base text-stone-600 leading-relaxed">
                Nuestro equipo combina experiencia técnica con una profunda comprensión de las necesidades empresariales latinoamericanas, creando soluciones que no solo funcionan técnicamente, sino que generan valor real para nuestros clientes.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-12 px-4 md:px-8 bg-transparent">
          <div className="w-full max-w-7xl mx-auto">
            <span className="font-custom text-xs tracking-widest text-amber-600 uppercase block text-center mb-2">NUESTROS VALORES</span>
            <h2 className="font-custom text-3xl sm:text-4xl md:text-5xl text-stone-900 uppercase tracking-normal leading-tight text-center mb-12">Lo que nos define</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <motion.div key={i} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-[24px] bg-white border border-stone-200 shadow-sm hover:shadow-md transition-all">
                  <div className="text-3xl mb-4">{v.icon}</div>
                  <h3 className="font-custom text-lg text-stone-900 mb-2">{v.title}</h3>
                  <p className="font-sans text-sm text-stone-500 leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-12 px-4 md:px-8">
          <div className="w-full max-w-7xl mx-auto">
            <span className="font-custom text-xs tracking-widest text-amber-600 uppercase block mb-2">NUESTRO EQUIPO</span>
            <h2 className="font-custom text-3xl sm:text-4xl md:text-5xl text-stone-900 uppercase tracking-normal leading-tight mb-12">Las personas detrás del código</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, i) => (
                <motion.div key={i} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-[24px] bg-white border border-stone-200 shadow-sm hover:shadow-md transition-all">
                  <span className="font-custom text-[9px] tracking-widest text-orange-500 uppercase">{member.role}</span>
                  <h3 className="font-custom text-lg text-stone-900 mt-2 mb-3">{member.name}</h3>
                  <p className="font-sans text-xs text-stone-500 leading-relaxed">{member.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="py-12 px-4 md:px-8 bg-transparent">
          <div className="w-full max-w-7xl mx-auto">
            <span className="font-custom text-xs tracking-widest text-amber-600 uppercase block mb-2">NUESTRA UBICACIÓN</span>
            <h2 className="font-custom text-3xl sm:text-4xl md:text-5xl text-stone-900 uppercase tracking-normal leading-tight mb-8">Desde Quito para el mundo</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="font-sans text-sm sm:text-base text-stone-600 leading-relaxed mb-4">
                  Estamos orgullosamente ubicados en Quito, Ecuador, una ciudad que combina historia rica con una vibrante comunidad tecnológica en crecimiento.
                </p>
                <p className="font-sans text-sm sm:text-base text-stone-600 leading-relaxed mb-6">
                  Trabajamos de forma remota con equipos distribuidos, adaptándonos a diferentes zonas horarias y culturas de trabajo.
                </p>
                <div className="flex flex-col gap-3 font-custom text-[11px] text-stone-500">
                  <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-orange-500 shrink-0" /> Quito, Ecuador</div>
                  <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-orange-500 shrink-0" /> Zona horaria: GMT-5</div>
                  <div className="flex items-center gap-2"><Globe className="w-4 h-4 text-orange-500 shrink-0" /> Servicios globales</div>
                </div>
              </div>
              <div className="aspect-[16/9] rounded-[24px] overflow-hidden bg-stone-200 border border-stone-300">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199359.9548475375!2d-78.5759709375!3d-0.2298519999999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a2c5b6c5f5f%3A0x6d8b4b4b4b4b4b4b!2sQuito%2C%20Ecuador!5e0!3m2!1sen!2sus!4v1234567890" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Mapa Quito" />
              </div>
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