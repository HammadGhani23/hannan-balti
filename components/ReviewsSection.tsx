'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const reviews = [
  {
    text: '"Hannan made everything effortless. The mountains were beyond words."',
    name: 'Sarah M.',
    country: 'Australia',
    flag: '🇦🇺',
    url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150',
    tripLabel: 'Hunza Valley · 12 days',
  },
  {
    text: '"Best decision we ever made. Hannan is a legend in Gilgit-Baltistan."',
    name: 'James & Priya',
    country: 'UK',
    flag: '🇬🇧',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150',
    tripLabel: 'Fairy Meadows · 10 days',
  },
  {
    text: '"He speaks five languages and somehow made all of us feel at home."',
    name: 'Mohamed A.',
    country: 'UAE',
    flag: '🇦🇪',
    url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150',
    tripLabel: 'Skardu & Deosai · 8 days',
  },
];

const StarRating = () => (
  <div className="stars mb-4 select-none" style={{ color: '#F5C842', fontSize: '13px', letterSpacing: '3px' }}>
    ★★★★★
  </div>
);

function ReviewCard({ review, index }: { review: (typeof reviews)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15, // Exact 150ms stagger between cards
        ease: [0.16, 1, 0.3, 1] 
      }}
      whileHover={{ y: -4, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
      className="glass-panel rounded-xl p-8 flex flex-col justify-between gap-5 border border-white/10"
      style={{
        background: 'rgba(255, 255, 255, 0.04)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
      data-cursor-hover
    >
      <div>
        <StarRating />
        <blockquote
          className="font-editorial text-[#F0EAE0]/85 italic leading-[1.7] mb-6"
          style={{ fontSize: 'clamp(1rem, 1.4vw, 1.2rem)', fontWeight: 300 }}
        >
          {review.text}
        </blockquote>
      </div>

      <div className="flex items-center gap-3 pt-4 border-t border-white/5">
        <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-white/10">
          <Image
            src={review.url}
            alt={`${review.name} thumbnail`}
            fill
            className="object-cover"
            sizes="40px"
          />
        </div>
        <div>
          <p className="font-nav text-[#F0EAE0] text-[11px] tracking-wider">
            {review.name} {review.flag}
          </p>
          <p className="font-nav text-[#888888] text-[9px] mt-0.5">{review.tripLabel}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function ReviewsSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true });

  return (
    <section id="reviews" className="bg-[#111818] py-32 px-8 lg:px-16 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading with hairline rules */}
        <div className="flex items-center gap-4 mb-20" ref={headingRef}>
          <div className="hairline hidden md:block" />
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={headingInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center w-full md:w-auto"
          >
            <p className="section-number mb-2">05 — EXPERIENCES</p>
            <h2 className="section-heading whitespace-normal md:whitespace-nowrap text-center w-full">WHAT TRAVELERS SAY</h2>
          </motion.div>
          <div className="hairline hidden md:block" />
        </div>

        {/* 3-column Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {reviews.map((review, i) => (
            <ReviewCard key={i} review={review} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
