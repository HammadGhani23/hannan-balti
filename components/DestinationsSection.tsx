'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Modal from './Modal';

const destinations = [
  {
    id: 'hunza',
    name: 'HUNZA VALLEY',
    description: 'Baltit Fort · Attabad Lake · Passu Cones · Khunjerab Pass',
    url: '/images/karakoram_highway.jpg',
    href: '#contact',
    duration: '8–14 Days',
    altitude: '2,438m – 4,693m',
    bestTime: 'April – October',
    highlights: [
      'Baltit & Altit Forts (900+ years old)',
      'Attabad Lake — turquoise glacial wonder',
      'Passu Cathedral Cones sunrise trek',
      'Khunjerab Pass — highest paved border crossing',
      "Eagle's Nest viewpoint over the valley",
      'Karimabad Bazaar & local apricot cuisine',
    ],
    about:
      "Hunza Valley is one of the most breathtaking places on Earth — a legendary land of longevity, ancient forts, and glacier-fed lakes framed by the Karakoram giants. Hannan personally navigates every road, ensuring your journey is seamless, culturally rich, and utterly unforgettable.",
  },
  {
    id: 'skardu',
    name: 'SKARDU & DEOSAI',
    description: 'Shangrila · Deosai National Park · K2 Gateway · Sarfaranga Desert',
    url: '/images/deosai_plains.jpg',
    href: '#contact',
    duration: '7–12 Days',
    altitude: '2,228m – 4,114m',
    bestTime: 'June – September',
    highlights: [
      'Deosai Plains — second highest plateau on Earth',
      'Shangrila Resort & Lower Kachura Lake',
      'Cold desert of Katpana & Sarfaranga',
      'K2 & Karakoram gateway expeditions',
      'Satpara Lake at golden hour',
      'Shigar Fort & ancient Balti culture',
    ],
    about:
      "Skardu is the crown jewel of Baltistan — a stark, dramatic high-altitude world where vast golden deserts meet icy lakes and the world's highest peaks. Hannan, born and raised in the region, brings an authentic, insider perspective that no outsider can replicate.",
  },
  {
    id: 'fairy',
    name: 'FAIRY MEADOWS',
    description: "Nanga Parbat Basecamp · The World's Most Scenic Trek",
    url: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600',
    href: '#contact',
    duration: '4–6 Days',
    altitude: '3,300m – 4,200m',
    bestTime: 'May – September',
    highlights: [
      'Fairy Meadows — emerald alpine meadow under Nanga Parbat',
      'Nanga Parbat Basecamp trek (4,200m)',
      'Raikot Bridge dramatic gorge entry',
      'Beyal Camp sunrise — 8,126m peak up close',
      'Jeep ride on one of world's most thrilling roads',
      'Stargazing at altitude with zero light pollution',
    ],
    about:
      "Fairy Meadows lives up to its name — a lush green paradise sitting directly beneath the sheer south face of Nanga Parbat, the Killer Mountain. The jeep track to reach it is legendary in itself. Hannan knows every metre of this journey and ensures absolute safety paired with peak adventure.",
  },
  {
    id: 'chitral',
    name: 'CHITRAL & KALASH',
    description: 'Shandur Polo · Kalash Culture · Lowari Pass · Ancient Valleys',
    url: '/images/kalash_chitral.jpg',
    href: '#contact',
    duration: '6–10 Days',
    altitude: '1,500m – 3,734m',
    bestTime: 'May – October',
    highlights: [
      'Kalash Valleys — ancient pre-Islamic culture',
      'Shandur Pass — "Roof of the World" polo festival',
      'Tirich Mir — highest peak of the Hindu Kush',
      'Chitral Fort & historic bazaars',
      'Lowari Tunnel scenic drive',
      'Traditional Kalash festivals (Chilam Joshi, Uchal)',
    ],
    about:
      "Chitral is Pakistan's best-kept cultural secret — home to the ancient Kalash people, a unique non-Muslim minority with their own language, traditions, and vibrant festivals. Pair that with dramatic mountain passes and the world's highest polo ground, and you have a journey unlike anything else on Earth.",
  },
];

type Destination = (typeof destinations)[number];

function DestinationModal({ dest, onClose }: { dest: Destination; onClose: () => void }) {
  return (
    <Modal isOpen onClose={onClose} maxWidth="680px">
      <div style={{ position: 'relative' }}>
        {/* Hero image */}
        <div style={{ position: 'relative', height: '260px', borderRadius: '16px 16px 0 0', overflow: 'hidden' }}>
          <Image
            src={dest.url}
            alt={dest.name}
            fill
            className="object-cover"
            sizes="680px"
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(17,24,24,1) 0%, rgba(17,24,24,0.3) 60%, transparent 100%)' }} />
          <div style={{ position: 'absolute', bottom: '1.5rem', left: '2rem' }}>
            <p className="font-nav" style={{ color: '#5EC2C2', fontSize: '10px', marginBottom: '6px' }}>EXPEDITION REGION</p>
            <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', letterSpacing: '0.05em', color: '#FAFAFA', lineHeight: 1 }}>
              {dest.name}
            </h2>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: '2rem' }}>
          {/* Meta pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '1.5rem' }}>
            {[
              { label: '⏱ Duration', value: dest.duration },
              { label: '🏔 Altitude', value: dest.altitude },
              { label: '🗓 Best Time', value: dest.bestTime },
            ].map((m) => (
              <div
                key={m.label}
                style={{
                  background: 'rgba(94,194,194,0.08)',
                  border: '1px solid rgba(94,194,194,0.2)',
                  borderRadius: '999px',
                  padding: '6px 16px',
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

          {/* About */}
          <p className="font-editorial" style={{ color: 'rgba(240,234,224,0.85)', fontSize: '1.1rem', lineHeight: 1.75, fontWeight: 300, marginBottom: '1.75rem' }}>
            {dest.about}
          </p>

          {/* Highlights */}
          <div style={{ marginBottom: '2rem' }}>
            <p className="font-nav" style={{ color: '#5EC2C2', fontSize: '10px', marginBottom: '1rem' }}>HIGHLIGHTS</p>
            <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', listStyle: 'none', padding: 0 }}>
              {dest.highlights.map((h) => (
                <li key={h} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <span style={{ color: '#5EC2C2', marginTop: '3px', flexShrink: 0 }}>›</span>
                  <span className="font-nav" style={{ color: 'rgba(240,234,224,0.75)', fontSize: '10px', lineHeight: 1.6, textTransform: 'none', letterSpacing: '0.05em' }}>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <a href="#contact" onClick={onClose} className="btn-teal" style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>
            Book This Expedition
          </a>
        </div>
      </div>
    </Modal>
  );
}

function DestinationCard({
  dest,
  index,
  onOpen,
}: {
  dest: Destination;
  index: number;
  onOpen: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -35 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onOpen}
      className="relative overflow-hidden rounded-xl cursor-pointer group"
      style={{ height: 'clamp(170px, 20vw, 260px)' }}
      data-cursor-hover
    >
      {/* Background image: scales 1.03x on hover */}
      <motion.div
        animate={{ scale: hovered ? 1.05 : 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <Image
          src={dest.url}
          alt={`${dest.name} — adventure journey landscape`}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* Primary dark editorial gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, rgba(10,15,15,0.92) 0%, rgba(10,15,15,0.45) 50%, rgba(10,15,15,0.2) 100%)',
        }}
      />

      {/* Hover Teal Gradient Wash */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, rgba(94,194,194,0.18) 0%, transparent 60%)',
        }}
      />

      {/* Hover border brightening */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-xl"
        style={{ border: '1px solid rgba(94, 194, 194, 0.4)' }}
      />

      {/* Click hint */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -8 }}
        transition={{ duration: 0.3 }}
        className="absolute top-4 right-4 font-nav"
        style={{ fontSize: '9px', color: '#5EC2C2', letterSpacing: '0.2em' }}
      >
        CLICK TO EXPLORE
      </motion.div>

      {/* Card Content Row */}
      <div className="absolute inset-0 flex flex-col justify-center px-8 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between items-start justify-center gap-3 md:gap-8 w-full">
          <div>
            <p className="font-nav text-[#5EC2C2] text-[10px] tracking-widest mb-1.5 md:mb-2">
              04.{String(index + 1).padStart(2, '0')} — EXPEDITION REGION
            </p>
            <h3
              className="font-display text-white mb-1.5 md:mb-2"
              style={{ fontSize: 'clamp(1.6rem, 4.5vw, 4.2rem)', letterSpacing: '0.04em', lineHeight: 1 }}
            >
              {dest.name}
            </h3>
            <p className="font-nav text-[#888888] text-[10px] md:text-[11px] tracking-wider leading-relaxed">
              {dest.description}
            </p>
          </div>

          {/* Explore button */}
          <motion.div
            animate={{ opacity: hovered ? 1 : 0.6, x: hovered ? 0 : 8 }}
            transition={{ duration: 0.3 }}
            className="font-nav text-[#5EC2C2] text-[10px] tracking-widest flex items-center gap-2 flex-shrink-0 ml-0 md:ml-8 mt-1 md:mt-0"
          >
            Explore
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function DestinationsSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true });
  const [activeId, setActiveId] = useState<string | null>(null);

  const activeDest = destinations.find((d) => d.id === activeId) ?? null;

  return (
    <section id="destinations" className="bg-[#0A0F0F] py-32 px-8 lg:px-16 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading with horizontal rules */}
        <div className="flex items-center gap-4 mb-20" ref={headingRef}>
          <div className="hairline hidden md:block" />
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={headingInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center w-full md:w-auto"
          >
            <p className="section-number mb-2">04 — WHERE TO ESCAPE</p>
            <h2 className="section-heading whitespace-normal md:whitespace-nowrap w-full">DESTINATIONS</h2>
          </motion.div>
          <div className="hairline hidden md:block" />
        </div>

        {/* Stack of full-width horizontal rows */}
        <div className="flex flex-col gap-6 relative z-10">
          {destinations.map((dest, i) => (
            <DestinationCard
              key={dest.id}
              dest={dest}
              index={i}
              onOpen={() => setActiveId(dest.id)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeDest && (
          <DestinationModal key={activeDest.id} dest={activeDest} onClose={() => setActiveId(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
