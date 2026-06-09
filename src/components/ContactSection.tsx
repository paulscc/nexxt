import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertTriangle, Compass } from 'lucide-react';
import SplitText from './SplitText';

export default function ContactSection() {
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
    <section id="contact" className="py-4 px-3 md:px-6 lg:px-8 bg-transparent">
      <div className="w-full max-w-7xl mx-auto rounded-[32px] md:rounded-[40px] overflow-hidden min-h-[600px] md:min-h-[700px] flex items-center p-6 md:p-12 lg:p-16 border border-red-500/10 shadow-[0_25px_60px_-15px_rgba(239,68,68,0.12)] relative" id="contact-container">
        <div className="absolute inset-0 z-0">
          <img src="/src/assets/images/contact_bg_g_1780935055633.png" alt="Background" className="w-full h-full object-cover opacity-85 brightness-[0.7] font-sans" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-stone-950/70 mix-blend-multiply" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          {/* Left info column */}
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

          {/* Right form column */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-xl rounded-[28px] glass-panel-dark p-6 sm:p-8 shadow-2xl relative">
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
              
              <AnimatePresence mode="wait">
                {success ? (
                  <motion.div key="success" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="flex flex-col items-center justify-center text-center py-12 gap-5">
                    <div className="w-16 h-16 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center border border-red-500/30"><CheckCircle2 className="w-8 h-8" /></div>
                    <div>
                      <h3 className="font-custom text-[13px] tracking-widest text-white uppercase">MENSAJE ENVIADO</h3>
                      <p className="text-stone-300 text-xs sm:text-sm mt-3 max-w-sm mx-auto leading-relaxed font-sans">Gracias por contactarnos. Revisaremos tu mensaje y te responderemos a la brevedad.</p>
                    </div>
                    <button onClick={() => setSuccess(false)} className="px-6 py-2.5 rounded-full bg-white hover:bg-stone-100 text-stone-950 font-custom text-[10px] tracking-widest font-normal transition-all active:scale-95 cursor-pointer mt-4">ENVIAR OTRO MENSAJE</button>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleFormSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col gap-4">
                    {errorMsg && (
                      <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-red-500/15 border border-red-500/20 text-red-400 font-custom text-[11px] text-left">
                        <AlertTriangle className="w-4 h-4 shrink-0" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

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
                          <option value="" className="text-stone-400">Selecciona...</option>
                          <option value="email" className="text-stone-900">Email</option>
                          <option value="phone" className="text-stone-900">Teléfono</option>
                          <option value="whatsapp" className="text-stone-900">WhatsApp</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-1.5 text-left">
                        <label className="font-custom text-[9px] tracking-widest text-stone-400 uppercase font-normal">Servicio de interés</label>
                        <select name="service" value={formData.service} onChange={handleInputChange} disabled={loading} className="w-full px-4 py-2.5 rounded-xl glass-input text-white text-xs sm:text-sm font-sans focus:outline-none focus:ring-1 focus:ring-red-500/40 transition-colors">
                          <option value="" className="text-stone-400">Selecciona un servicio</option>
                          <option value="Web" className="text-stone-900">Desarrollo Web</option>
                          <option value="IA" className="text-stone-900">Integraciones IA</option>
                          <option value="ML" className="text-stone-900">Machine Learning</option>
                          <option value="LLM" className="text-stone-900">LLMs y Fine-tuning</option>
                          <option value="Consultoria" className="text-stone-900">Consultoría</option>
                          <option value="Otro" className="text-stone-900">Otro</option>
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
  );
}