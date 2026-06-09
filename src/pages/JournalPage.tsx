import { useState } from 'react';
import { motion } from 'motion/react';
import { JournalPost } from '../types';
import { JOURNAL_POSTS } from '../data';
import { BookOpen, Calendar, Clock, ChevronRight, PenLine, Hash, Sparkles } from 'lucide-react';
import SplitText from '../components/SplitText';
import { useNavigate } from 'react-router-dom';
import PageFooter from '../components/PageFooter';
import ContactSection from '../components/ContactSection';
import FloatingNavBar from '../components/FloatingNavBar';
import { AnimatePresence } from 'motion/react';
import DetailsModal from '../components/DetailsModal';

const categories = ['All', 'Design', 'Technology', 'Trends', 'AI'];

export default function JournalPage() {
  const [selectedPost, setSelectedPost] = useState<JournalPost | null>(null);
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
              src="/src/assets/images/photo-1460925895917-afdab827c52f.avif"
              alt="Journal Nexxts"
              className="w-full h-full object-contain opacity-30 font-sans scale-150"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/85 via-stone-950/60 to-stone-950/30" />
          </div>
          <div className="relative z-10 min-h-[400px] md:min-h-[500px] flex flex-col lg:flex-row items-center justify-between p-8 md:p-16 lg:p-20">
            <div>
              <h1 className="font-custom text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] leading-[0.9] font-normal text-white uppercase">
                JOURNAL
              </h1>
            </div>
            <div className="lg:max-w-xs text-right">
              <p className="font-sans text-[7px] sm:text-[9px] text-stone-300 leading-relaxed tracking-wide font-light">
                Our writing on the acoustic spectrum of color, neural interfaces with organic design, and physical bezel layouts in modern browser boxes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-4 md:px-8 bg-transparent">
        <div className="w-full max-w-7xl mx-auto flex flex-wrap items-center gap-3">
          <Hash className="w-4 h-4 text-stone-400" />
          {categories.map((cat, i) => (
            <button key={i} className={`px-5 py-2 rounded-full text-xs font-custom tracking-widest uppercase transition-all cursor-pointer ${i === 0 ? 'bg-stone-900 text-white' : 'bg-white text-stone-600 hover:bg-stone-200 border border-stone-200'}`}>{cat}</button>
          ))}
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 px-4 md:px-8">
        <div className="w-full max-w-7xl mx-auto">
          <motion.div onClick={() => setSelectedPost(JOURNAL_POSTS[0])} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="relative w-full aspect-[21/9] rounded-[32px] md:rounded-[40px] overflow-hidden group cursor-pointer border border-stone-200 shadow-xl mb-12">
            <img src={JOURNAL_POSTS[0].image} alt={JOURNAL_POSTS[0].title} className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-90 transition-all duration-700" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16">
              <span className="font-custom text-[9px] tracking-widest text-amber-400 uppercase bg-stone-950/50 px-3 py-1 rounded-full inline-block mb-4">{JOURNAL_POSTS[0].category}</span>
              <h2 className="font-custom text-2xl sm:text-3xl md:text-4xl text-white tracking-normal leading-tight mb-3">{JOURNAL_POSTS[0].title}</h2>
              <p className="text-stone-300 text-sm max-w-2xl font-sans">{JOURNAL_POSTS[0].summary}</p>
              <div className="flex items-center gap-4 mt-4 text-[10px] font-custom text-stone-400 uppercase">
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {JOURNAL_POSTS[0].date}</span>
                <span>●</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {JOURNAL_POSTS[0].readTime}</span>
              </div>
            </div>
          </motion.div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {JOURNAL_POSTS.slice(1).map((post) => (
              <motion.div key={post.id} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} whileHover={{ y: -6 }} transition={{ duration: 0.4, ease: 'easeOut' }} onClick={() => setSelectedPost(post)} className="group cursor-pointer text-left">
                <div className="w-full aspect-[16/9] rounded-[20px] overflow-hidden bg-stone-950 border border-stone-200 mb-4">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" referrerPolicy="no-referrer" />
                </div>
                <span className="font-custom text-[9px] tracking-widest text-amber-500 uppercase block mb-2">{post.category}</span>
                <h3 className="font-sans font-medium text-sm sm:text-base text-stone-900 group-hover:text-stone-700 leading-snug transition-colors mb-2">{post.title}</h3>
                <p className="font-sans text-xs text-stone-500 line-clamp-2">{post.summary}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

        <ContactSection />
        <FloatingNavBar />
        <PageFooter />
      </main>
      <AnimatePresence mode="wait">
        {selectedPost && <DetailsModal project={null} post={selectedPost} onClose={() => setSelectedPost(null)} />}
      </AnimatePresence>
    </div>
  );
}