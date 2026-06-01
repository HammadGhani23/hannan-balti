'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const polaroidCards = [
  {
    url: 'https://images.unsplash.com/photo-1621841315897-b8519d855715?q=80&w=800',
    caption: '4 epic destinations',
    label: 'Attabad Lake',
  },
  {
    url: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800',
    caption: 'custom itineraries',
    label: 'Fairy Meadows',
  },
  {
    url: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=800',
    caption: 'international guides',
    label: 'Deosai Plains',
  },
  {
    url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800',
    caption: '5 languages spoken',
    label: 'Karakoram Highway',
  },
  {
    url: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?q=80&w=800',
    caption: 'your trip, your pace',
    label: 'Jeep in Chitral',
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Parallax transforms using linear easing ONLY for scroll-linked parameters
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const stripX = useTransform(scrollYProgress, [0, 1], ['0%', '-40%']);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative w-full min-h-screen overflow-hidden bg-[#0A0F0F]"
      style={{ height: '100svh' }}
    >
      {/* ─── BACKGROUND PLANE: Mountain photograph (z-index: 0) ─── */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY, willChange: 'transform' }}
      >
        <Image
          src="https://images.unsplash.com/photo-1627856013091-fed6e4e30025?q=80&w=2000"
          alt="Passu Cones at dawn — cinematic, towering glaciers in amber light, Pakistan"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Cinematic color grade overlay: cool-to-warm */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(16,28,48,0.65) 0%, rgba(10,20,25,0.45) 40%, rgba(40,20,5,0.5) 100%)',
          }}
        />
        {/* Bottom vignette */}
        <div
          className="absolute bottom-0 left-0 right-0 h-2/3"
          style={{
            background:
              'linear-gradient(to top, rgba(10,15,15,0.95) 0%, rgba(10,15,15,0.5) 50%, transparent 100%)',
          }}
        />
        {/* Top vignette */}
        <div
          className="absolute top-0 left-0 right-0 h-32"
          style={{
            background: 'linear-gradient(to bottom, rgba(10,15,15,0.7), transparent)',
          }}
        />
      </motion.div>

      {/* ─── MID-GROUND PLANE: PAKISTAN display typography (z-index: 1) ─── */}
      <motion.div
        className="absolute inset-x-0 z-[1] flex items-end justify-center pointer-events-none"
        style={{
          y: textY,
          bottom: '18%',
          willChange: 'transform',
        }}
      >
        <h1
          className="font-display text-transparent select-none w-full text-center leading-none"
          style={{
            fontSize: 'clamp(9rem, 22vw, 20rem)',
            WebkitTextStroke: '1px rgba(240, 234, 224, 0.18)',
            letterSpacing: '0.08em',
            lineHeight: 0.85,
          }}
        >
          PAKISTAN
        </h1>
      </motion.div>

      {/* ─── FOREGROUND MOUNTAIN CROP: (z-index: 2) ─── */}
      {/* Sits at z-[2] to crop the typography. Parallax synced with bgY to prevent drift! */}
      <motion.div 
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{ y: bgY, willChange: 'transform' }}
      >
        {/* Mask reveals only the bottom mountain ridgeline to overlap the typography */}
        <div
          className="absolute inset-0"
          style={{
            background: 'transparent',
            maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 35%, black 55%, black 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, transparent 35%, black 55%, black 100%)',
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1627856013091-fed6e4e30025?q=80&w=2000"
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(16,28,48,0.6) 0%, rgba(10,20,25,0.4) 40%, rgba(35,18,5,0.45) 100%)',
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-2/3"
            style={{
              background: 'linear-gradient(to top, rgba(10,15,15,0.95) 0%, rgba(10,15,15,0.45) 50%, transparent 100%)',
            }}
          />
        </div>
      </motion.div>

      {/* ─── FOREGROUND PLANE: Solitary Hiker Figure (z-index: 3, highest) ─── */}
      <div className="absolute inset-0 z-[3] pointer-events-none">
        {/* Foreground figure — solitary adventure operator/hiker on the right, completely static */}
        <div className="absolute bottom-0 right-[8vw] w-[20vw] max-w-[340px] min-w-[180px]">
          <div className="relative w-full" style={{ paddingBottom: '160%' }}>
            <Image
              src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=800"
              alt="Hannan Balti — Solitary explorer in Gilgiti cap looking towards Karakoram Peaks"
              fill
              priority
              className="object-cover object-top"
              sizes="20vw"
              style={{
                maskImage: 'linear-gradient(to top, transparent 0%, black 25%, black 100%)',
                WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 25%, black 100%)',
              }}
            />
          </div>
        </div>

        {/* Right social icons — faint outline fixed-esque stack */}
        <div className="absolute right-7 top-1/2 -translate-y-1/2 flex flex-col items-center gap-5 pointer-events-auto">
          <div className="w-px h-16 bg-white/10" />
          <a
            href="https://instagram.com/hannanbalti"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-30 hover:opacity-100 text-[#FAFAFA] transition-opacity duration-300"
            data-cursor-hover
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-30 hover:opacity-100 text-[#FAFAFA] transition-opacity duration-300"
            data-cursor-hover
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
          <a
            href="https://youtube.com/@hannanbalti"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-30 hover:opacity-100 text-[#FAFAFA] transition-opacity duration-300"
            data-cursor-hover
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M22.54 6.42a2.78 2.78 0 00-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
              <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <div className="w-px h-16 bg-white/10" />
        </div>
      </div>

      {/* ─── HERO CONTENT: Copy + Polaroid Card Strip + Floating CTA ─── */}
      <div className="absolute inset-0 z-[4] flex flex-col justify-end pb-16 px-8 lg:px-16 pointer-events-none">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-8">
          {/* Main tags & tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <p className="font-nav text-[#5EC2C2] mb-3">
              NORTHERN PAKISTAN ADVENTURE TOURS
            </p>
            <p
              className="font-editorial text-[#F0EAE0]/90 leading-relaxed"
              style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', fontWeight: 300 }}
            >
              Guided by a Skardu-born expert who has walked every pass personally.
              Hunza · Skardu · Fairy Meadows · Chitral
            </p>
          </motion.div>

          {/* Floating CTA with bottom-up fill animation on hover */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto"
          >
            <a
              href="#contact"
              className="btn-glacier inline-block text-center whitespace-nowrap"
              style={{ backdropFilter: 'blur(12px)' }}
              data-cursor-hover
            >
              <span>Plan My Trip</span>
            </a>
          </motion.div>
        </div>

        {/* ─── POLAROID CARD STRIP (translating horizontally) ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-auto"
          style={{ x: stripX, willChange: 'transform' }}
        >
          <div className="flex gap-5 w-max">
            {polaroidCards.map((card, i) => (
              <PolaroidCard key={i} card={card} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PolaroidCard({
  card,
  index,
}: {
  card: (typeof polaroidCards)[number];
  index: number;
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
        boxShadow: '0 20px 40px rgba(94, 194, 194, 0.2)',
      }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="polaroid rounded-lg overflow-hidden flex-shrink-0 cursor-pointer"
      style={{ width: 'clamp(140px, 15vw, 210px)' }}
      data-cursor-hover
    >
      <div className="relative" style={{ paddingBottom: '62%' }}>
        <Image
          src={card.url}
          alt={card.label}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="210px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <span className="absolute bottom-2.5 left-3 right-3 font-nav text-[9px] text-[#FAFAFA]/75 leading-tight">
          {card.label}
        </span>
      </div>
      <div className="px-3 py-2.5 bg-[#111818]">
        <p className="font-nav text-[9px] text-[#5EC2C2] tracking-widest uppercase">
          {card.caption}
        </p>
      </div>
    </motion.div>
  );
}
