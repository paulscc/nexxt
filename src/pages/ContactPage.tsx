import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertTriangle, Compass } from 'lucide-react';
import SplitText from '../components/SplitText';
import { useNavigate } from 'react-router-dom';
import PageFooter from '../components/PageFooter';
import FloatingNavBar from '../components/FloatingNavBar';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    contactMethod: '',
    service: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg(null);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) { setErrorMsg('El nombre es obligatorio'); return; }
    if (!formData.email.trim()) { setErrorMsg('El email es obligatorio'); return; }
    if (!/\S+@\S+\.\S+/.test(formData.email)) { setErrorMsg('Ingresa un email válido'); return; }
    if (!formData.message.trim()) { setErrorMsg('El mensaje es obligatorio'); return; }
    setLoading(true);
    setErrorMsg(null);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({ name: '', email: '', company: '', phone: '', contactMethod: '', service: '', message: '' });
    }, 1500);
  };

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
                src="/src/assets/images/photo-1697577418970-95d99b5a55cf.avif"
                alt="Contacto Nexxts"
                className="w-full h-full object-contain opacity-30 font-sans scale-150"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-stone-950/85 via-stone-950/60 to-stone-950/30" />
            </div>
            <div className="relative z-10 min-h-[400px] md:min-h-[500px] flex flex-col lg:flex-row items-center justify-between p-8 md:p-16 lg:p-20">
              <div>
                <h1 className="font-custom text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] leading-[0.9] font-normal text-white uppercase">
                  CONTACTO
                </h1>
              </div>
              <div className="lg:max-w-xs text-right">
                <p className="font-sans text-[7px] sm:text-[9px] text-stone-300 leading-relaxed tracking-wide font-light">
                  Estamos listos para ayudarte a transformar tus ideas en realidad. Cuéntanos sobre tu proyecto y te responderemos pronto.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-3 md:px-6 lg:px-8 bg-transparent">
          <div className="w-full max-w-7xl mx-auto rounded-[32px] md:rounded-[40px] overflow-hidden min-h-[600px] md:min-h-[700px] flex items-center p-6 md:p-12 lg:p-16 border border-red-500/10 shadow-[0_25px_60px_-15px_rgba(239,68,68,0.12)] relative">
            <div className="absolute inset-0 z-0">
              <img src="/src/assets/images/contact_bg_g_1780935055633.png" alt="Background" className="w-full h-full object-cover opacity-85 brightness-[0.7] font-sans" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-stone-950/70 mix-blend-multiply" />
            </div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
              <div className="lg:col-span-5 text-left flex flex-col gap-6">
                <SplitText text="CONTACTO" as="h2" className="font-custom text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-normal leading-tight font-normal" />
                <p className="text-stone-300 text-[10px] sm:text-xs leading-relaxed font-sans font-light">
                  ¿Tienes un proyecto en mente? Ya sea que estés lanzando una marca, diseñando un producto o elevando tu presencia digital, estamos aquí para hacer realidad tu visión.
                </p>
                <div className="flex flex-col gap-4 text-left font-custom text-[11px] text-stone-400">
                  <div className="flex items-center gap-3"><MapPin className="w-4 h-4 text-red-500 shrink-0" /><span>Quito, Ecuador — Trabajamos remoto con clientes en todo el mundo</span></div>
                  <div className="flex items-center gap-3"><Mail className="w-4 h-4 text-red-500 shrink-0" /><span>team@nexxts.es</span></div>
                  <div className="flex items-center gap-3"><Phone className="w-4 h-4 text-red-500 shrink-0" /><span>Respuesta en 24h</span></div>
                </div>
              </div>
              <div className="lg:col-span-7 flex justify-center">
                <div className="w-full max-w-xl rounded-[28px] glass-panel-dark p-6 sm:p-8 shadow-2xl relative">
                  <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
                  <AnimatePresence mode="wait">
                    {success ? (
                      <motion.div key="success" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="flex flex-col items-center justify-center text-center py-12 gap-5">
                        <div className="w-16 h-16 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center border border-red-500/30"><CheckCircle2 className="w-8 h-8" /></div>
                        <div><h3 className="font-custom text-[13px] tracking-widest text-white uppercase">MENSAJE ENVIADO</h3><p className="text-stone-300 text-xs sm:text-sm mt-3 max-w-sm mx-auto leading-relaxed font-sans">Gracias por contactarnos. Revisaremos tu mensaje y te responderemos a la brevedad.</p></div>
                        <button onClick={() => setSuccess(false)} className="px-6 py-2.5 rounded-full bg-white hover:bg-stone-100 text-stone-950 font-custom text-[10px] tracking-widest font-normal transition-all active:scale-95 cursor-pointer mt-4">ENVIAR OTRO MENSAJE</button>
                      </motion.div>
                    ) : (
                      <motion.form key="form" onSubmit={handleFormSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col gap-4">
                        {errorMsg && (<div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-red-500/15 border border-red-500/20 text-red-400 font-custom text-[11px] text-left"><AlertTriangle className="w-4 h-4 shrink-0" /><span>{errorMsg}</span></div>)}

                        <div className="flex flex-col gap-1.5 text-left">
                          <label className="font-custom text-[9px] tracking-widest text-stone-400 uppercase font-normal">Nombre completo *</label>
                          <input type="text" name="name" value={formData.name} onChange={handleInputChange} disabled={loading} placeholder="Tu nombre" className="w-full px-4 py-2.5 rounded-xl glass-input text-white placeholder-stone-400 text-xs sm:text-sm font-sans focus:outline-none focus:ring-1 focus:ring-red-500/40 transition-colors" required />
                        </div>

                        <div className="flex flex-col gap-1.5 text-left">
                          <label className="font-custom text-[9px] tracking-widest text-stone-400 uppercase font-normal">Email *</label>
                          <input type="email" name="email" value={formData.email} onChange={handleInputChange} disabled={loading} placeholder="tu@email.com" className="w-full px-4 py-2.5 rounded-xl glass-input text-white placeholder-stone-400 text-xs sm:text-sm font-sans focus:outline-none focus:ring-1 focus:ring-red-500/40 transition-colors" required />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="flex flex-col gap-1.5 text-left">
                            <label className="font-custom text-[9px] tracking-widest text-stone-400 uppercase font-normal">Empresa (opcional)</label>
                            <input type="text" name="company" value={formData.company} onChange={handleInputChange} disabled={loading} placeholder="Nombre de tu empresa" className="w-full px-4 py-2.5 rounded-xl glass-input text-white placeholder-stone-400 text-xs sm:text-sm font-sans focus:outline-none focus:ring-1 focus:ring-red-500/40 transition-colors" />
                          </div>
                          <div className="flex flex-col gap-1.5 text-left">
                            <label className="font-custom text-[9px] tracking-widest text-stone-400 uppercase font-normal">Teléfono (opcional)</label>
                            <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} disabled={loading} placeholder="+593 99 999 9999" className="w-full px-4 py-2.5 rounded-xl glass-input text-white placeholder-stone-400 text-xs sm:text-sm font-sans focus:outline-none focus:ring-1 focus:ring-red-500/40 transition-colors" />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="flex flex-col gap-1.5 text-left">
                            <label className="font-custom text-[9px] tracking-widest text-stone-400 uppercase font-normal">Método de contacto</label>
                            <select name="contactMethod" value={formData.contactMethod} onChange={handleInputChange} disabled={loading} className="w-full px-4 py-2.5 rounded-xl glass-input text-white text-xs sm:text-sm font-sans focus:outline-none focus:ring-1 focus:ring-red-500/40 transition-colors">
                              <option value="">Selecciona...</option>
                              <option value="email">Email</option>
                              <option value="phone">Teléfono</option>
                              <option value="whatsapp">WhatsApp</option>
                            </select>
                          </div>
                          <div className="flex flex-col gap-1.5 text-left">
                            <label className="font-custom text-[9px] tracking-widest text-stone-400 uppercase font-normal">Servicio de interés</label>
                            <select name="service" value={formData.service} onChange={handleInputChange} disabled={loading} className="w-full px-4 py-2.5 rounded-xl glass-input text-white text-xs sm:text-sm font-sans focus:outline-none focus:ring-1 focus:ring-red-500/40 transition-colors">
                              <option value="">Selecciona...</option>
                              <option value="Web">Desarrollo Web</option>
                              <option value="IA">Integraciones IA</option>
                              <option value="ML">Machine Learning</option>
                              <option value="LLM">LLMs y Fine-tuning</option>
                              <option value="Consultoria">Consultoría</option>
                              <option value="Otro">Otro</option>
                            </select>
                          </div>
                        </div>

                        <div className="flex flex-col gap-1.5 text-left">
                          <label className="font-custom text-[9px] tracking-widest text-stone-400 uppercase font-normal">Mensaje *</label>
                          <textarea name="message" value={formData.message} onChange={handleInputChange} disabled={loading} rows={4} placeholder="Cuéntanos sobre tu proyecto..." className="w-full px-4 py-2.5 rounded-xl glass-input text-white placeholder-stone-400 text-xs sm:text-sm font-sans focus:outline-none focus:ring-1 focus:ring-red-500/40 transition-colors resize-none" required />
                        </div>

                        <button type="submit" disabled={loading} className="w-full mt-2 py-3 rounded-xl bg-white hover:bg-stone-100 text-stone-950 font-custom font-normal tracking-widest text-xs flex items-center justify-center gap-2.5 transition-all active:scale-98 cursor-pointer border border-transparent shadow shadow-white/15 focus:outline-none">
                          {loading ? <><Compass className="w-4 h-4 animate-spin text-stone-900" /><span>ENVIANDO...</span></> : <><span>ENVIAR MENSAJE</span><Send className="w-3.5 h-3.5 stroke-[2.5px]" /></>}
                        </button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Llamada */}
        <section className="py-16 px-4 md:px-8 bg-transparent">
          <div className="w-full max-w-7xl mx-auto text-center">
            <h2 className="font-custom text-3xl sm:text-4xl text-stone-900 uppercase tracking-normal leading-tight mb-4">¿Prefieres una <span className="text-orange-500 italic">llamada?</span></h2>
            <p className="text-stone-500 text-sm font-sans max-w-xl mx-auto mb-8">
              Agenda una llamada con nuestro equipo para discutir tu proyecto en detalle. Sin compromiso.
            </p>
            <a href="mailto:team@nexxts.es?subject=Solicitud%20de%20llamada" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500 text-white font-custom text-xs tracking-widest uppercase hover:bg-orange-600 transition-all">
              Solicitar Llamada
            </a>
          </div>
        </section>

        <FloatingNavBar />
        <PageFooter />
      </main>
    </div>
  );
}