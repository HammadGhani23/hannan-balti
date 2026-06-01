'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const reviews = [
  {
    text: '"Hannan made everything effortless. The mountains were beyond words — I\'ve traveled to 40 countries and nothing prepared me for northern Pakistan."',
    name: 'Sarah M.',
    country: 'Australia',
    flag: '🇦🇺',
    seed: 64,
    tripLabel: 'Hunza Valley · 12 days',
  },
  {
    text: '"Best decision we ever made. Hannan is a legend — patient, knowledgeable, funny, and deeply genuine. The Fairy Meadows trek alone was worth the journey."',
    name: 'James & Priya',
    country: 'United Kingdom',
    flag: '🇬🇧',
    seed: 91,
    tripLabel: 'Fairy Meadows · 10 days',
  },
  {
    text: '"He speaks five languages and somehow made all of us feel completely at home. The Deosai sunrise changed something in me."',
    name: 'Mohamed A.',
    country: 'United Arab Emirates',
    flag: '🇦🇪',
    seed: 1084,
    tripLabel: 'Skardu & Deosai · 8 days',
  },
  {
    text: '"Every itinerary detail was thoughtful. We weren\'t tourists — we were guests of the mountains. Hannan introduced us to families and traditions impossible to find alone."',
    name: 'Clara V.',
    country: 'Netherlands',
    flag: '🇳🇱',
    seed: 338,
    tripLabel: 'Full Circuit · 18 days',
  },
  {
    text: '"The photography opportunities were extraordinary — Attabad Lake at dawn, the Karakoram Highway at golden hour. Hannan knew every shot."',
    name: 'Kenji T.',
    country: 'Japan',
    flag: '🇯🇵',
    seed: 429,
    tripLabel: 'Hunza & Skardu · 14 days',
  },
  {
    text: '"Traveling as a woman solo, I felt completely safe and cared for. Hannan\'s connections across the region meant we ate with locals, stayed in incredible guesthouses."',
    name: 'Amara O.',
    country: 'Canada',
    flag: '🇨🇦',
    seed: 213,
    tripLabel: 'Chitral & Kalash · 9 days',
  },
];

const StarRating = () => (
  <div className="stars text-base mb-4 tracking-wider">★★★★★</div>
);

function ReviewCard({ review, index }: { review: (typeof reviews)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: (index % 3) * 0.13, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
      className="glass-panel rounded-xl p-7 flex flex-col gap-4"
    >
      <StarRating />

      <blockquote
        className="font-editorial text-[#F0EAE0]/80 italic leading-[1.75] flex-1"
        style={{ fontSize: 'clamp(0.9rem, 1.3vw, 1.05rem)', fontWeight: 300 }}
      >
        {review.text}
      </blockquote>

      <div className="flex items-center gap-3 pt-2 border-t border-white/5">
        <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-white/10">
          <Image
            src={`https://picsum.photos/seed/${review.seed}/80/80`}
            alt={review.name}
            fill
            className="object-cover"
            sizes="40px"
          />
        </div>
        <div>
          <p className="font-nav text-[#F0EAE0] text-[11px] tracking-wider">
            {review.name} {review.flag}
          </p>
          <p className="font-nav text-[#888888] text-[10px]">{review.tripLabel}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function ReviewsSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true });

  return (
    <section id="reviews" className="bg-[#111818] py-32 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex items-center gap-4 mb-20" ref={headingRef}>
          <div className="hairline" />
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={headingInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <p className="section-number mb-2">05 — GUEST REVIEWS</p>
            <h2 className="section-heading whitespace-nowrap text-center">WHAT TRAVELERS SAY</h2>
          </motion.div>
          <div className="hairline" />
        </div>

        {/* Review grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <ReviewCard key={i} review={review} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
