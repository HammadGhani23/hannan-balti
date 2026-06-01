'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const creators = [
  {
    name: 'LUKE DAMANT',
    quote: '"One of the most incredible trips of my life."',
    tag: 'Adventure YouTuber · Australia',
    url: '/images/influencer_luke.jpg',
    link: 'https://youtube.com',
    icon: 'youtube',
  },
  {
    name: 'JAY PALFREY',
    quote: '"Hannan made Pakistan feel like home."',
    tag: 'Travel Creator · UK',
    url: '/images/influencer_jay.jpg',
    link: 'https://instagram.com',
    icon: 'instagram',
  },
  {
    name: 'THE DON ROB SHOW',
    quote: '"The real Pakistan — raw, beautiful, unforgettable."',
    tag: 'YouTube Documentary · USA',
    url: '/images/influencer_don_rob.jpg',
    link: 'https://youtube.com',
    icon: 'youtube',
  },
  {
    name: 'OMER & FATIMA',
    quote: '"Every detail handled. Every moment magical."',
    tag: 'Travel Couple · Pakistan',
    url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800',
    link: 'https://instagram.com',
    icon: 'instagram',
  },
];

function CreatorCard({ creator, index }: { creator: (typeof creators)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden rounded-lg flex-shrink-0 cursor-pointer group"
      style={{ width: 'clamp(260px, 28vw, 340px)', height: 480 }}
      data-cursor-hover
    >
      {/* Background image - 1.03x scaling on hover */}
      <motion.div
        animate={{ scale: hovered ? 1.03 : 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <Image
          src={creator.url}
          alt={`${creator.name} — expedition journey with Hannan`}
          fill
          className="object-cover"
          sizes="340px"
        />
      </motion.div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(10,15,15,0.98) 0%, rgba(10,15,15,0.4) 50%, transparent 100%)',
        }}
      />

      {/* Teal hover wash: #5EC2C2 at 15% opacity */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0"
        style={{ background: 'rgba(94, 194, 194, 0.15)' }}
      />

      {/* Content wrapper */}
      <div className="absolute inset-0 flex flex-col justify-end p-7">
        <p className="font-nav text-[#5EC2C2] text-[10px] tracking-widest mb-2">
          {creator.tag}
        </p>
        <h3
          className="font-display text-white mb-2"
          style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)', letterSpacing: '0.06em' }}
        >
          {creator.name}
        </h3>
        <p 
          className="font-editorial text-[#F0EAE0]/85 italic leading-relaxed mb-4"
          style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)', fontWeight: 300 }}
        >
          {creator.quote}
        </p>

        {/* Watch Journey CTA */}
        <motion.a
          href={creator.link}
          target="_blank"
          rel="noopener noreferrer"
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
          transition={{ duration: 0.3 }}
          className="inline-flex items-center gap-2.5 font-nav text-[#5EC2C2] text-[10px] tracking-widest hover:text-white transition-colors"
        >
          {creator.icon === 'youtube' ? (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805z" />
            </svg>
          ) : (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          )}
          Watch Their Journey →
        </motion.a>
      </div>
    </motion.div>
  );
}

export default function SocialProofSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true });
  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaInView = useInView(ctaRef, { once: true });

  return (
    <section id="social-proof" className="bg-[#0A0F0F] py-32 overflow-hidden">
      {/* Heading */}
      <div className="px-8 lg:px-16 mb-16">
        <div className="flex items-center gap-4" ref={headingRef}>
          <div className="hairline" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <p className="section-number mb-2">02 — TRUSTED BY CREATORS</p>
            <h2 className="section-heading whitespace-nowrap">AS SEEN WITH</h2>
          </motion.div>
          <div className="hairline" />
        </div>
      </div>

      {/* Horizontal scrollable row */}
      <div className="px-8 lg:px-16">
        <div className="flex gap-6 overflow-x-auto pb-6 no-scrollbar">
          {creators.map((creator, i) => (
            <CreatorCard key={creator.name} creator={creator} index={i} />
          ))}
        </div>
      </div>

      {/* Centered Editorial Footer CTA */}
      <motion.div
        ref={ctaRef}
        initial={{ opacity: 0, y: 20 }}
        animate={ctaInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mt-16 px-8"
      >
        <p
          className="font-editorial text-[#F0EAE0]/75 italic mb-6"
          style={{ fontSize: 'clamp(1.1rem, 2vw, 1.45rem)', fontWeight: 300 }}
        >
          Your adventure could be next.
        </p>
        <a href="#contact" className="btn-teal inline-block" data-cursor-hover>
          Book With Hannan
        </a>
      </motion.div>
    </section>
  );
}
