'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const includedItems = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 20h20L12 2z" />
        <path d="M12 2v18" />
        <path d="M12 7l-4 5" />
        <path d="M12 11l6 7" />
      </svg>
    ),
    title: 'LOCAL EXPERT GUIDE',
    body:
      'Hannan and his team are Baltistan-born. Every viewpoint, shortcut, and chai stop worth stopping at.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="11" rx="2" />
        <path d="M7 16h10" />
        <circle cx="6" cy="18" r="2" />
        <circle cx="18" cy="18" r="2" />
        <path d="M2 10h20" />
        <path d="M14 5l-2-3H6l-2 3" />
      </svg>
    ),
    title: 'ALL TRANSFERS',
    body:
      'Airport pickup, 4x4 jeep across mountain passes, inter-city logistics — fully managed.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 10l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <path d="M9 22V12h6v10" />
        <path d="M12 7v2" />
      </svg>
    ),
    title: 'CURATED STAYS',
    body:
      'Handpicked guesthouses and mountain lodges. Breakfast included. Local family homes wherever possible.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18l6-6-6-6" />
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8" />
      </svg>
    ),
    title: 'CUSTOM ITINERARIES',
    body:
      'Your trip, your pace. Designed around you — trekking, photography, culture, or all three.',
  },
];

function IncludedCard({ item, index }: { item: (typeof includedItems)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{
        y: -4,
        borderColor: 'rgba(94, 194, 194, 0.45)',
        transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
      }}
      className="relative rounded-2xl p-8 flex flex-col gap-5 cursor-default overflow-hidden border border-white/10"
      style={{
        background: 'rgba(255, 255, 255, 0.04)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
      data-cursor-hover
    >
      {/* Ambient Cool Teal Glow Behind Card on Hover */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute -inset-10 bg-[radial-gradient(circle_at_center,rgba(94,194,194,0.12)_0%,transparent_60%)] pointer-events-none z-0"
      />

      {/* Card Content */}
      <div className="relative z-10 flex flex-col gap-5">
        {/* Icon (scales 1.1x on card hover) */}
        <motion.div
          animate={{ scale: hovered ? 1.1 : 1 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#5EC2C2] w-fit"
        >
          {item.icon}
        </motion.div>

        {/* Title */}
        <h3 className="font-nav text-[#F0EAE0] tracking-widest text-[11px]">
          {item.title}
        </h3>

        {/* Body Description */}
        <p 
          className="font-editorial text-[#888888] leading-[1.75]"
          style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)', fontWeight: 300 }}
        >
          {item.body}
        </p>
      </div>
    </motion.div>
  );
}

export default function IncludedSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true });

  return (
    <section id="included" className="bg-[#111818] py-32 px-8 lg:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading layout with hairline rules */}
        <div className="flex items-center gap-6 mb-20" ref={headingRef}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={headingInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="section-number mb-2">03 — INCLUSIONS</p>
            <h2 className="section-heading" style={{ lineHeight: '0.9' }}>
              WHAT&apos;S
              <br />
              INCLUDED
            </h2>
          </motion.div>
          <div className="hairline-teal hidden md:block" />
        </div>

        {/* 4-up Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 relative z-10">
          {includedItems.map((item, i) => (
            <IncludedCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
