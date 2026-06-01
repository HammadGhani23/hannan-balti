'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const timelineItems = [
  {
    id: 'hunza',
    label: 'HUNZA VALLEY',
    description: 'Baltit Fort · Attabad Lake · Passu Cones · Khunjerab Pass',
    images: [
      { url: '/images/karakoram_highway.jpg', rotation: -3, top: '0', left: '-10px' },
      { url: '/images/client_tree_pose.jpg', rotation: 4, top: '60px', left: '90px' },
    ],
  },
  {
    id: 'skardu',
    label: 'SKARDU & DEOSAI',
    description: 'Shangrila · Sheosar Lake · Sarfaranga Desert · K2 Gateway',
    images: [
      { url: '/images/deosai_plains.jpg', rotation: 2, top: '0', left: '0' },
      { url: '/images/cold_desert_skardu.jpg', rotation: -4, top: '55px', left: '85px' },
    ],
  },
  {
    id: 'fairy',
    label: 'FAIRY MEADOWS',
    description: 'Nanga Parbat basecamp · World\'s most scenic trek',
    images: [
      { url: '/images/composite_van_mosque.jpg', rotation: -2, top: '0', left: '-5px' },
      { url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600', rotation: 3, top: '65px', left: '88px' },
    ],
  },
  {
    id: 'chitral',
    label: 'CHITRAL & KALASH',
    description: 'Shandur Pass · Kalash Valley · Polo at the top of the world',
    images: [
      { url: '/images/kalash_chitral.jpg', rotation: 3, top: '0', left: '0' },
      { url: '/images/client_backpack.jpg', rotation: -3, top: '58px', left: '92px' },
    ],
  },
];

const stats = [
  { value: '10+', label: 'Years Guiding' },
  { value: '5', label: 'Languages Spoken' },
  { value: '4', label: 'Destinations: Hunza · Skardu · Fairy Meadows · Chitral' },
];

function useCountUp(target: number, duration = 1500) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  const start = () => {
    if (started) return;
    setStarted(true);
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOut cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  return { count, start };
}

function StatCard({ stat, index }: { stat: (typeof stats)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const numericValue = parseInt(stat.value.replace('+', ''));
  const { count, start } = useCountUp(numericValue);

  useEffect(() => {
    if (inView) start();
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="stat-card flex-1 min-w-[200px]"
    >
      <div
        className="font-display text-[#5EC2C2] mb-1"
        style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
      >
        {count}{stat.value.includes('+') ? '+' : ''}
      </div>
      <p className="font-nav text-[#888888] text-[10px] leading-relaxed">
        {stat.label}
      </p>
    </motion.div>
  );
}

function TimelineNode({ item, index }: { item: (typeof timelineItems)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.2, // 200ms timeline node stagger
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative flex gap-8 items-start"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Timeline Bullet Node */}
      <div className="flex flex-col items-center flex-shrink-0" style={{ width: 20 }}>
        <motion.div
          animate={{ scale: hovered ? 1.3 : 1, backgroundColor: hovered ? '#5EC2C2' : '#FAFAFA' }}
          transition={{ duration: 0.3 }}
          className="w-3 h-3 rounded-full border border-[#5EC2C2] bg-[#FAFAFA] mt-1 z-10"
        />
        {index < timelineItems.length - 1 && (
          <div className="w-px flex-1 bg-white/10 mt-2" style={{ minHeight: 140 }} />
        )}
      </div>

      {/* Content scrapbook container */}
      <div className="flex-1 pb-16">
        <p className="font-nav text-[#5EC2C2] text-[10px] mb-1 tracking-widest">
          {String(index + 1).padStart(2, '0')} — DESTINATION
        </p>
        <h3
          className="font-display text-[#FAFAFA] mb-1 group-hover:text-[#5EC2C2] transition-colors"
          style={{ fontSize: 'clamp(1.4rem, 3vw, 2.2rem)', letterSpacing: '0.06em' }}
        >
          {item.label}
        </h3>
        <p className="font-nav text-[#888888] text-[11px] leading-relaxed mb-6">
          {item.description}
        </p>

        {/* Photo cluster - separated on hover with spring physics */}
        <div className="relative" style={{ height: 160, width: 230 }}>
          {item.images.map((img, imgIdx) => (
            <motion.div
              key={imgIdx}
              animate={
                hovered
                  ? { 
                      rotate: imgIdx === 0 ? -6 : 6, 
                      x: imgIdx === 0 ? -15 : 15,
                      scale: 1.05
                    }
                  : { rotate: img.rotation, x: 0, scale: 1 }
              }
              transition={{ type: 'spring', stiffness: 120, damping: 14 }}
              className="absolute border-[6px] border-white shadow-xl overflow-hidden cursor-pointer"
              style={{
                width: 140,
                height: 100,
                top: img.top,
                left: img.left,
                zIndex: imgIdx + 1,
              }}
              data-cursor-hover
            >
              <Image
                src={img.url}
                alt={`${item.label} cluster view`}
                fill
                className="object-cover"
                sizes="140px"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Scroll-in teal highlight wrapper
function HighlightText({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-20px' });

  return (
    <motion.span
      ref={ref}
      animate={inView ? { color: '#5EC2C2' } : { color: '#F0EAE0' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="font-semibold transition-colors duration-300"
    >
      {children}
    </motion.span>
  );
}

export default function AboutSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true });

  return (
    <section id="about" className="bg-[#111818] py-32 px-8 lg:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section label heading with hairline side rules */}
        <div className="flex items-center gap-4 mb-20" ref={headingRef}>
          <div className="hairline hidden md:block" />
          <motion.h2
            initial={{ opacity: 0, scale: 0.96 }}
            animate={headingInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="section-heading text-center whitespace-normal md:whitespace-nowrap w-full md:w-auto"
          >
            THE GUIDE
          </motion.h2>
          <div className="hairline hidden md:block" />
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* LEFT: editorial text column */}
          <div className="space-y-8">
            <div className="space-y-6">
              <EditorialPara delay={0.1}>
                Hannan Balti is a <HighlightText>Skardu-born</HighlightText> tour guide and adventure
                operator with over a decade of experience leading international travelers through
                Pakistan&apos;s northern highlands.
              </EditorialPara>

              <EditorialPara delay={0.2}>
                Fluent in English, Urdu, Balti, Shina, and Pashto — <HighlightText>five languages</HighlightText>, 
                five ways to listen. He doesn&apos;t just show you the mountains. He introduces you to the people, the
                stories, and the silence between them.
              </EditorialPara>

              <EditorialPara delay={0.3}>
                Hannan has guided global content creators and adventure travelers from across the
                world, handling everything from airport pickup to 4,500m summit views — so you can{' '}
                <HighlightText>simply arrive and experience</HighlightText>.
              </EditorialPara>
            </div>

            {/* Stat cards row */}
            <div className="flex flex-wrap gap-4 pt-8">
              {stats.map((stat, i) => (
                <StatCard key={stat.label} stat={stat} index={i} />
              ))}
            </div>
          </div>

          {/* RIGHT: vertical destination timeline scrapbook */}
          <div className="space-y-0 lg:pl-8">
            {timelineItems.map((item, index) => (
              <TimelineNode key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EditorialPara({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className="font-editorial text-[#F0EAE0]/85 leading-[1.8]"
      style={{ fontSize: 'clamp(1.1rem, 1.6vw, 1.25rem)', fontWeight: 300 }}
    >
      {children}
    </motion.p>
  );
}
