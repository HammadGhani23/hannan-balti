'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const destinations = [
  {
    id: 'hunza',
    name: 'HUNZA VALLEY',
    description: 'Baltit Fort · Attabad Lake · Passu Cones · Khunjerab Pass',
    url: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=1600',
    href: '#contact',
  },
  {
    id: 'skardu',
    name: 'SKARDU & DEOSAI',
    description: 'Shangrila · Deosai National Park · K2 Gateway · Sarfaranga Desert',
    url: 'https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?q=80&w=1600',
    href: '#contact',
  },
  {
    id: 'fairy',
    name: 'FAIRY MEADOWS',
    description: 'Nanga Parbat Basecamp · The World\'s Most Scenic Trek',
    url: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600',
    href: '#contact',
  },
  {
    id: 'chitral',
    name: 'CHITRAL & KALASH',
    description: 'Shandur Polo · Kalash Culture · Lowari Pass · Ancient Valleys',
    url: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?q=80&w=1600',
    href: '#contact',
  },
];

function DestinationCard({
  dest,
  index,
}: {
  dest: (typeof destinations)[number];
  index: number;
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
      className="relative overflow-hidden rounded-xl cursor-pointer group"
      style={{ height: 'clamp(170px, 20vw, 260px)' }}
      data-cursor-hover
    >
      {/* Background image: scales 1.03x on hover */}
      <motion.div
        animate={{ scale: hovered ? 1.03 : 1 }}
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

      {/* Card Content Row */}
      <div className="absolute inset-0 flex flex-col justify-center px-8 lg:px-16">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-nav text-[#5EC2C2] text-[10px] tracking-widest mb-2">
              04.{String(index + 1).padStart(2, '0')} — EXPEDITION REGION
            </p>
            <h3
              className="font-display text-white mb-2"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 4.2rem)', letterSpacing: '0.04em', lineHeight: 1 }}
            >
              {dest.name}
            </h3>
            <p className="font-nav text-[#888888] text-[11px] tracking-wider">
              {dest.description}
            </p>
          </div>

          {/* Explore button on the right */}
          <motion.a
            href={dest.href}
            animate={{ opacity: hovered ? 1 : 0.3, x: hovered ? 0 : 8 }}
            transition={{ duration: 0.3 }}
            className="font-nav text-[#5EC2C2] text-[10px] tracking-widest flex items-center gap-2 flex-shrink-0 ml-8"
          >
            Explore
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default function DestinationsSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true });

  return (
    <section id="destinations" className="bg-[#0A0F0F] py-32 px-8 lg:px-16 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading with horizontal rules */}
        <div className="flex items-center gap-4 mb-20" ref={headingRef}>
          <div className="hairline" />
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={headingInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <p className="section-number mb-2">04 — WHERE TO ESCAPE</p>
            <h2 className="section-heading whitespace-nowrap">DESTINATIONS</h2>
          </motion.div>
          <div className="hairline" />
        </div>

        {/* Stack of full-width horizontal rows */}
        <div className="flex flex-col gap-6 relative z-10">
          {destinations.map((dest, i) => (
            <DestinationCard key={dest.id} dest={dest} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
