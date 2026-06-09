import { useParams, useNavigate } from 'react-router-dom';
import { SERVICES } from '../data';
import { ArrowRight, CheckCircle2, ArrowUpRight } from 'lucide-react';
import SplitText from '../components/SplitText';
import PageFooter from '../components/PageFooter';
import ContactSection from '../components/ContactSection';
import FloatingNavBar from '../components/FloatingNavBar';

const bgImages: Record<string, string> = {
  web: '/src/assets/images/photo-1519389950473-47ba0277781c.avif',
  ia: '/src/assets/images/photo-1531403009284-440f080d1e12.avif',
  ml: '/src/assets/images/photo-1555066931-4365d14bab8c.avif',
  llm: '/src/assets/images/photo-1620712943543-bcc4688e7485.avif',
};

export default function ServiceDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = SERVICES.find(s => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-custom text-3xl text-stone-900 mb-4">Servicio no encontrado</h1>
          <button onClick={() => navigate('/servicios')} className="font-custom text-xs tracking-widest text-orange-500 uppercase">← Volver a Servicios</button>
        </div>
      </div>
    );
  }

  const bgImage = service ? (bgImages[service.id] || service.image) : service?.image;

  return (
    <div className="relative min-h-screen text-stone-800">
      <div className="fixed top-6 left-6 z-50">
        <button onClick={() => navigate('/servicios')} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-stone-200 text-stone-700 font-custom text-[10px] tracking-widest uppercase hover:bg-white transition-all shadow-md cursor-pointer">← SERVICIOS</button>
      </div>
      <main className="w-full flex flex-col bg-gradient-to-b from-white via-stone-100 via-stone-200 via-stone-300 to-stone-950">

        {/* Hero */}
        <section className="p-3 md:p-6 lg:p-8 min-h-[80vh] flex items-center justify-center bg-transparent">
          <div className="relative w-full max-w-7xl mx-auto rounded-[32px] md:rounded-[48px] overflow-hidden bg-stone-900 shadow-2xl border border-stone-800/80">
            <div className="absolute inset-0 z-0">
              <img
                src={bgImage}
                alt={service.title}
                className="w-full h-full object-contain opacity-30 font-sans scale-150"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-stone-950/85 via-stone-950/60 to-stone-950/30" />
            </div>
            <div className="relative z-10 min-h-[400px] md:min-h-[500px] flex flex-col lg:flex-row items-center justify-between p-8 md:p-16 lg:p-20">
              <div>
                <h1 className="font-custom text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] leading-[0.9] font-normal text-white uppercase">
                  {service.title}
                </h1>
              </div>
              <div className="lg:max-w-xs text-right">
                <p className="font-sans text-[7px] sm:text-[9px] text-stone-300 leading-relaxed tracking-wide font-light">
                  {service.desc}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-4 md:px-8">
          <div className="w-full max-w-7xl mx-auto">
            <h2 className="font-custom text-3xl sm:text-4xl md:text-5xl text-stone-900 uppercase tracking-normal leading-tight mb-8">Lo que incluye</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-[16px] bg-white border border-stone-200">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                    <span className="font-sans text-sm text-stone-700">{f}</span>
                  </div>
                ))}
              </div>
              <div className="rounded-[24px] overflow-hidden border border-stone-200 aspect-[4/3]">
                <img
                  src={`/src/assets/images/${service.id}.gif`}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 md:px-8 bg-transparent">
          <div className="w-full max-w-7xl mx-auto text-center">
            <h2 className="font-custom text-3xl sm:text-4xl text-stone-900 uppercase tracking-normal leading-tight mb-4">¿Listo para empezar tu proyecto?</h2>
            <p className="text-stone-500 text-sm font-sans max-w-xl mx-auto mb-8">Cuéntanos qué necesitas y te enviaremos una propuesta personalizada sin compromiso.</p>
            <button onClick={() => navigate('/contact')} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500 text-white font-custom text-xs tracking-widest uppercase hover:bg-orange-600 transition-all cursor-pointer">
              Solicitar Cotización <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </section>

        <ContactSection />
        <FloatingNavBar />
        <PageFooter />
      </main>
    </div>
  );
}