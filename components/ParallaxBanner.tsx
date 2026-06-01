'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxBanner() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Parallax background shifts on scroll for deep perspective
  const yBg = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);
  const yText = useTransform(scrollYProgress, [0, 1], ['-20px', '20px']);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden bg-[#0A0F0F] flex items-center justify-center border-y border-white/5"
    >
      {/* ─── PARALLAX BACKDROP IMAGE ─── */}
      <motion.div
        className="absolute inset-0 w-full h-[130%] -top-[15%]"
        style={{ y: yBg, willChange: 'transform' }}
      >
        <Image
          src="/images/client_backpack.jpg"
          alt="Hannan Balti walking with a backpack on the Karakoram Highway"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Ambient Dark Gradient Wash */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(10,15,15,0.75) 0%, rgba(10,15,15,0.45) 50%, rgba(10,15,15,0.75) 100%)',
          }}
        />
      </motion.div>

      {/* ─── FLOATING EDITORIAL TEXT ─── */}
      <motion.div
        style={{ y: yText }}
        className="relative z-10 text-center px-8 max-w-4xl pointer-events-none"
      >
        <p className="font-nav text-[#5EC2C2] text-[10px] tracking-[0.25em] mb-4">
          THE EXPEDITION MINDSET
        </p>
        <h2
          className="font-editorial text-[#F0EAE0] leading-snug italic"
          style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.8rem)', fontWeight: 300 }}
        >
          &quot;Walk the paths less traveled, guided by those who call them home.&quot;
        </h2>
        <div className="w-12 h-px bg-[#5EC2C2]/45 mx-auto mt-6" />
      </motion.div>
    </div>
  );
}
