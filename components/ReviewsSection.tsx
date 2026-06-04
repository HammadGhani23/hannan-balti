'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Modal from './Modal';

const reviews = [
  {
    text: '"Hannan made everything effortless. The mountains were beyond words."',
    name: 'Sarah M.',
    country: 'Australia',
    flag: '🇦🇺',
    url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150',
    tripLabel: 'Hunza Valley · 12 days',
    fullReview:
      'I cannot put into words how much this trip changed my perspective on travel. From the moment Hannan picked us up, every single detail was handled with care, warmth, and professionalism. The roads through Hunza were dramatic beyond belief — and Hannan navigated them like it was nothing. He knew every local family, every hidden viewpoint, and every perfect moment to stop for a photograph. I have travelled to over 40 countries, and this ranks as my single greatest adventure. The accommodations, the food, the pace — everything was tailored to us. I left Pakistan with tears in my eyes and a promise to return.',
    rating: 5,
    tripDate: 'September 2024',
    groupType: 'Solo Traveller',
    standoutMoment: 'Watching sunrise from Eagle\'s Nest as the peaks turned pink — absolutely otherworldly.',
  },
  {
    text: '"Best decision we ever made. Hannan is a legend in Gilgit-Baltistan."',
    name: 'James & Priya',
    country: 'UK',
    flag: '🇬🇧',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150',
    tripLabel: 'Fairy Meadows · 10 days',
    fullReview:
      'We were nervous about Pakistan — our families thought we were mad. But from the first message, Hannan put us completely at ease. His English is perfect, his knowledge of the region is unmatched, and his passion for sharing his homeland is infectious. Fairy Meadows was the most dramatic landscape we have ever stood in — and knowing Hannan had organised everything meant we could just soak it all in. He even arranged a private cook who made us fresh chapati every morning with a view of Nanga Parbat. We are already planning to come back for the K2 base camp.',
    rating: 5,
    tripDate: 'July 2024',
    groupType: 'Couple',
    standoutMoment: 'The Nanga Parbat basecamp trek at 4,200m — standing next to the 8th tallest mountain on Earth.',
  },
  {
    text: '"He speaks five languages and somehow made all of us feel at home."',
    name: 'Mohamed A.',
    country: 'UAE',
    flag: '🇦🇪',
    url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150',
    tripLabel: 'Skardu & Deosai · 8 days',
    fullReview:
      'Our group of 8 included people from the UAE, Saudi Arabia, Pakistan, and the UK. Hannan effortlessly switched between languages, making every single person feel completely catered to. His ability to communicate — both linguistically and culturally — is extraordinary. The Deosai Plains were unlike anything I have ever seen: vast, golden, and completely silent. Hannan arranged a full camp setup under the stars with traditional food. It was like a dream. I have recommended him to at least a dozen friends since returning.',
    rating: 5,
    tripDate: 'August 2024',
    groupType: 'Group of 8',
    standoutMoment: 'Overnight camping on Deosai Plains under a sky full of stars with no light pollution for miles.',
  },
];

type Review = (typeof reviews)[number];

const StarRating = ({ count = 5 }: { count?: number }) => (
  <div style={{ color: '#F5C842', fontSize: '13px', letterSpacing: '3px', marginBottom: '0' }}>
    {'★'.repeat(count)}
  </div>
);

function ReviewModal({ review, onClose }: { review: Review; onClose: () => void }) {
  return (
    <Modal isOpen onClose={onClose} maxWidth="620px">
      <div style={{ padding: '2.5rem 2rem 2rem' }}>
        {/* Stars */}
        <div style={{ marginBottom: '1.25rem' }}>
          <StarRating count={review.rating} />
        </div>

        {/* Full review quote */}
        <blockquote
          className="font-editorial"
          style={{
            color: 'rgba(240,234,224,0.9)',
            fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
            fontStyle: 'italic',
            fontWeight: 300,
            lineHeight: 1.8,
            borderLeft: '2px solid #5EC2C2',
            paddingLeft: '1.25rem',
            marginBottom: '2rem',
          }}
        >
          {review.fullReview}
        </blockquote>

        {/* Traveller info */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '1.75rem', paddingBottom: '1.75rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ position: 'relative', width: '52px', height: '52px', borderRadius: '50%', overflow: 'hidden', border: '2px solid rgba(94,194,194,0.3)', flexShrink: 0 }}>
            <Image src={review.url} alt={review.name} fill className="object-cover" sizes="52px" />
          </div>
          <div>
            <p className="font-nav" style={{ color: '#FAFAFA', fontSize: '12px', marginBottom: '3px' }}>
              {review.name} {review.flag}
            </p>
            <p className="font-nav" style={{ color: '#5EC2C2', fontSize: '9px' }}>
              {review.tripLabel}
            </p>
          </div>
        </div>

        {/* Meta pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '1.75rem' }}>
          {[
            { label: '📅 Trip Date', value: review.tripDate },
            { label: '👥 Group Type', value: review.groupType },
            { label: '🌍 From', value: review.country },
          ].map((m) => (
            <div
              key={m.label}
              style={{
                background: 'rgba(94,194,194,0.07)',
                border: '1px solid rgba(94,194,194,0.18)',
                borderRadius: '999px',
                padding: '6px 14px',
                display: 'flex',
                gap: '6px',
                alignItems: 'center',
              }}
            >
              <span className="font-nav" style={{ color: '#888', fontSize: '9px' }}>{m.label}</span>
              <span className="font-nav" style={{ color: '#5EC2C2', fontSize: '9px' }}>{m.value}</span>
            </div>
          ))}
        </div>

        {/* Standout moment */}
        <div
          style={{
            background: 'rgba(94,194,194,0.06)',
            border: '1px solid rgba(94,194,194,0.15)',
            borderRadius: '10px',
            padding: '1.25rem',
            marginBottom: '1.75rem',
          }}
        >
          <p className="font-nav" style={{ color: '#5EC2C2', fontSize: '9px', marginBottom: '6px' }}>⭐ STANDOUT MOMENT</p>
          <p className="font-editorial" style={{ color: 'rgba(240,234,224,0.85)', fontSize: '1rem', fontStyle: 'italic', fontWeight: 300, lineHeight: 1.7 }}>
            {review.standoutMoment}
          </p>
        </div>

        {/* CTA */}
        <a href="#contact" onClick={onClose} className="btn-teal" style={{ display: 'block', textAlign: 'center', width: '100%' }}>
          Write Your Own Story — Book Now
        </a>
      </div>
    </Modal>
  );
}

function ReviewCard({ review, index, onOpen }: { review: Review; index: number; onOpen: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onOpen}
      className="glass-panel rounded-xl p-8 flex flex-col justify-between gap-5 cursor-pointer relative overflow-hidden"
      style={{
        background: hovered ? 'rgba(94,194,194,0.06)' : 'rgba(255, 255, 255, 0.04)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: hovered ? '1px solid rgba(94,194,194,0.35)' : '1px solid rgba(255,255,255,0.1)',
        transition: 'background 0.3s ease, border-color 0.3s ease',
      }}
      data-cursor-hover
    >
      {/* Read More hint */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : -4 }}
        transition={{ duration: 0.2 }}
        style={{ position: 'absolute', top: '1rem', right: '1rem' }}
      >
        <span className="font-nav" style={{ fontSize: '9px', color: '#5EC2C2', letterSpacing: '0.2em', background: 'rgba(10,15,15,0.8)', padding: '3px 10px', borderRadius: '999px', border: '1px solid rgba(94,194,194,0.2)' }}>
          READ FULL REVIEW
        </span>
      </motion.div>

      <div>
        <div style={{ marginBottom: '1rem' }}>
          <StarRating count={review.rating} />
        </div>
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
        <div style={{ flex: 1 }}>
          <p className="font-nav text-[#F0EAE0] text-[11px] tracking-wider">
            {review.name} {review.flag}
          </p>
          <p className="font-nav text-[#888888] text-[9px] mt-0.5">{review.tripLabel}</p>
        </div>
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 6 }}
          transition={{ duration: 0.25 }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5EC2C2" strokeWidth="1.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function ReviewsSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeReview = activeIndex !== null ? reviews[activeIndex] : null;

  return (
    <section id="reviews" className="bg-[#111818] py-32 px-8 lg:px-16 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
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
            <ReviewCard key={i} review={review} index={i} onOpen={() => setActiveIndex(i)} />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeReview && (
          <ReviewModal key={activeIndex} review={activeReview} onClose={() => setActiveIndex(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
