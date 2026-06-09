import { useState } from 'react';
import { motion } from 'motion/react';
import { JournalPost } from '../types';
import { JOURNAL_POSTS } from '../data';
import { BookOpen } from 'lucide-react';
import SplitText from './SplitText';

interface JournalSectionProps {
  onSelectPost: (post: JournalPost) => void;
}

export default function JournalSection({ onSelectPost }: JournalSectionProps) {
  return (
    <section 
      id="journal" 
      className="py-4 px-4 md:px-8 bg-transparent flex flex-col justify-center"
    >
      <div className="w-full max-w-7xl mx-auto rounded-[32px] md:rounded-[40px] bg-stone-950 border border-stone-800/80 px-6 md:px-12 lg:px-20 py-16 md:py-24 lg:py-40 shadow-2xl">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4 mb-10 text-left">
          <SplitText text="JOURNAL" as="h2" className="font-custom text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-normal leading-tight font-normal" />
        </div>

        {/* 3-Column Blog Grid - only images and titles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8" id="journal-posts-grid">
          {JOURNAL_POSTS.map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              onClick={() => onSelectPost(post)}
              className="group cursor-pointer text-left"
              id={`journal-post-${post.id}`}
            >
              {/* Cover image */}
              <div className="w-full aspect-[3/4] rounded-[20px] overflow-hidden bg-stone-950 border border-stone-800 mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Title only */}
              <h3 className="font-sans text-[10px] sm:text-xs text-stone-100 group-hover:text-white leading-snug tracking-normal font-normal">
                {post.title}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}