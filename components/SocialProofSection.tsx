'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Modal from './Modal';

const creators = [
  {
    name: 'LUKE DAMANT',
    quote: '"One of the most incredible trips of my life."',
    tag: 'Adventure YouTuber · Australia',
    url: '/images/influencer_luke.jpg',
    link: 'https://youtube.com/@lukedamant',
    icon: 'youtube',
    followers: '500K+ Subscribers',
    nationality: '🇦🇺 Australian',
    platform: 'YouTube',
    bio: 'Luke Damant is an Australian adventure travel creator known for his breathtaking cinematic journeys through the world\'s most remote destinations. He visited Pakistan with Hannan Balti Tours and documented the full expedition from Lahore to the Karakoram, capturing landscapes and moments that shocked his global audience.',
    tripTaken: 'Hunza Valley & K2 Base Camp, 14 Days',
    videoHighlight: 'His Pakistan series reached over 3 million views and is considered one of the most authentic portrayals of Northern Pakistan on YouTube.',
  },
  {
    name: 'JAY PALFREY',
    quote: '"Hannan made Pakistan feel like home."',
    tag: 'Travel Creator · UK',
    url: '/images/influencer_jay.jpg',
    link: 'https://instagram.com/jaypalfrey',
    icon: 'instagram',
    followers: '200K+ Followers',
    nationality: '🇬🇧 British',
    platform: 'Instagram & YouTube',
    bio: 'Jay Palfrey is a British travel content creator who specialises in off-the-beaten-path adventures. His warm, personal storytelling style captured the soul of Pakistan in a way that resonated deeply with his audience. From Kalash valleys to glacial lakes, Jay experienced Pakistan in full with Hannan as his guide and host.',
    tripTaken: 'Chitral, Kalash & Hunza, 12 Days',
    videoHighlight: 'Jay\'s Pakistan Reels hit over 1.2 million views and sparked a wave of travel enquiries about Northern Pakistan from the UK.',
  },
  {
    name: 'THE DON ROB SHOW',
    quote: '"The real Pakistan — raw, beautiful, unforgettable."',
    tag: 'YouTube Documentary · USA',
    url: '/images/influencer_don_rob.jpg',
    link: 'https://youtube.com/@thedonrobshow',
    icon: 'youtube',
    followers: '300K+ Subscribers',
    nationality: '🇺🇸 American',
    platform: 'YouTube',
    bio: 'The Don Rob Show is an American documentary YouTube channel that explores countries often misunderstood by Western media. Their Pakistan series with Hannan Balti broke multiple stereotypes, showing the warmth of the people, the majesty of the mountains, and the rich Balti culture that most of the world has never seen.',
    tripTaken: 'Skardu, Deosai Plains & Fairy Meadows, 10 Days',
    videoHighlight: 'The Pakistan documentary series became their most-watched content ever, with episodes averaging 800K–1.5M views each.',
  },
  {
    name: 'OMER & FATIMA',
    quote: '"Every detail handled. Every moment magical."',
    tag: 'Travel Couple · Pakistan',
    url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800',
    link: 'https://instagram.com',
    icon: 'instagram',
    followers: '180K+ Followers',
    nationality: '🇵🇰 Pakistani',
    platform: 'Instagram',
    bio: 'Omer & Fatima are one of Pakistan\'s most beloved travel couples, documenting their adventures across the country in a beautifully authentic way. They trusted Hannan Balti Tours to craft a luxury honeymoon experience in the north — and what resulted was a collection of content that defined the gold standard for couple travel in Pakistan.',
    tripTaken: 'Hunza, Skardu & Deosai Full Circuit, 11 Days',
    videoHighlight: 'Their Hannan-guided trip content is among their top 5 most-saved Instagram posts, driving ongoing enquiries to Hannan\'s team.',
  },
];

type Creator = (typeof creators)[number];

function InfluencerModal({ creator, onClose }: { creator: Creator; onClose: () => void }) {
  return (
    <Modal isOpen onClose={onClose} maxWidth="660px">
      <div style={{ position: 'relative' }}>
        {/* Hero image */}
        <div className="modal-hero-img-container" style={{ borderRadius: '16px 16px 0 0' }}>
          <Image
            src={creator.url}
            alt={creator.name}
            fill
            className="object-cover object-top"
            sizes="660px"
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(17,24,24,1) 0%, rgba(17,24,24,0.2) 65%, transparent 100%)' }} />

          {/* Platform badge */}
          <div style={{ position: 'absolute', top: '1rem', left: '1.25rem', background: 'rgba(10,15,15,0.8)', border: '1px solid rgba(94,194,194,0.25)', borderRadius: '999px', padding: '5px 14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            {creator.icon === 'youtube' ? (
              <svg width="10" height="10" viewBox="0 0 24 24" fill="#5EC2C2">
                <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805z" />
              </svg>
            ) : (
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#5EC2C2" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="#5EC2C2" stroke="none" />
              </svg>
            )}
            <span className="font-nav" style={{ color: '#5EC2C2', fontSize: '9px' }}>{creator.platform}</span>
          </div>

          <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem' }}>
            <p className="font-nav" style={{ color: '#5EC2C2', fontSize: '10px', marginBottom: '5px' }}>{creator.tag}</p>
            <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', letterSpacing: '0.06em', color: '#FAFAFA', lineHeight: 1 }}>
              {creator.name}
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="modal-content-padding">
          {/* Stats pills */}
          <div className="modal-meta-pills">
            {[
              { icon: '👥', value: creator.followers },
              { icon: '🌍', value: creator.nationality },
            ].map((s) => (
              <div key={s.value} className="modal-meta-pill">
                <span style={{ fontSize: '11px' }}>{s.icon}</span>
                <span className="font-nav" style={{ color: '#5EC2C2', fontSize: '9px' }}>{s.value}</span>
              </div>
            ))}
          </div>

          {/* Quote */}
          <blockquote className="font-editorial" style={{ color: 'rgba(240,234,224,0.9)', fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', fontStyle: 'italic', fontWeight: 300, lineHeight: 1.7, borderLeft: '2px solid #5EC2C2', paddingLeft: '1.25rem', marginBottom: '1.5rem' }}>
            {creator.quote}
          </blockquote>

          {/* Bio */}
          <p className="font-editorial" style={{ color: 'rgba(240,234,224,0.75)', fontSize: '1rem', lineHeight: 1.8, fontWeight: 300, marginBottom: '1.5rem' }}>
            {creator.bio}
          </p>

          {/* Trip & Highlight */}
          <div style={{ background: 'rgba(94,194,194,0.06)', border: '1px solid rgba(94,194,194,0.15)', borderRadius: '10px', padding: '1.25rem', marginBottom: '1.75rem' }}>
            <div style={{ marginBottom: '0.75rem' }}>
              <p className="font-nav" style={{ color: '#5EC2C2', fontSize: '9px', marginBottom: '4px' }}>TRIP TAKEN WITH HANNAN</p>
              <p className="font-nav" style={{ color: 'rgba(240,234,224,0.85)', fontSize: '10px', textTransform: 'none', letterSpacing: '0.06em' }}>{creator.tripTaken}</p>
            </div>
            <div>
              <p className="font-nav" style={{ color: '#5EC2C2', fontSize: '9px', marginBottom: '4px' }}>CONTENT IMPACT</p>
              <p className="font-nav" style={{ color: 'rgba(240,234,224,0.75)', fontSize: '10px', textTransform: 'none', letterSpacing: '0.06em', lineHeight: 1.6 }}>{creator.videoHighlight}</p>
            </div>
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href={creator.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-teal"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', flex: 1, justifyContent: 'center' }}
            >
              Watch Their Journey →
            </a>
            <a
              href="#contact"
              onClick={onClose}
              className="btn-glacier"
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: 1 }}
            >
              <span>Join Their Footsteps</span>
            </a>
          </div>
        </div>
      </div>
    </Modal>
  );
}

function CreatorCard({ creator, index, onOpen }: { creator: Creator; index: number; onOpen: () => void }) {
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
      onClick={onOpen}
      className="relative overflow-hidden rounded-lg flex-shrink-0 cursor-pointer group"
      style={{ width: 'clamp(260px, 28vw, 340px)', height: 480 }}
      data-cursor-hover
    >
      {/* Background image */}
      <motion.div
        animate={{ scale: hovered ? 1.05 : 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <Image
          src={creator.url}
          alt={`${creator.name} — expedition journey with Hannan`}
          fill
          className="object-cover object-top"
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

      {/* Teal hover wash */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0"
        style={{ background: 'rgba(94, 194, 194, 0.12)' }}
      />

      {/* Hover border */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-lg"
        style={{ border: '1px solid rgba(94,194,194,0.4)' }}
      />

      {/* Click hint */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : -6 }}
        transition={{ duration: 0.25 }}
        style={{ position: 'absolute', top: '1rem', right: '1rem' }}
      >
        <span className="font-nav" style={{ fontSize: '9px', color: '#5EC2C2', letterSpacing: '0.18em', background: 'rgba(10,15,15,0.85)', padding: '4px 10px', borderRadius: '999px', border: '1px solid rgba(94,194,194,0.25)' }}>
          VIEW PROFILE
        </span>
      </motion.div>

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
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
          transition={{ duration: 0.3 }}
          className="inline-flex items-center gap-2.5 font-nav text-[#5EC2C2] text-[10px] tracking-widest"
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
          Click to View Profile →
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function SocialProofSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true });
  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaInView = useInView(ctaRef, { once: true });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeCreator = activeIndex !== null ? creators[activeIndex] : null;

  return (
    <section id="social-proof" className="bg-[#0A0F0F] py-32 overflow-hidden">
      {/* Heading */}
      <div className="px-8 lg:px-16 mb-16">
        <div className="flex items-center gap-4" ref={headingRef}>
          <div className="hairline hidden md:block" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center w-full md:w-auto"
          >
            <p className="section-number mb-2">02 — TRUSTED BY CREATORS</p>
            <h2 className="section-heading whitespace-normal md:whitespace-nowrap w-full">AS SEEN WITH</h2>
          </motion.div>
          <div className="hairline hidden md:block" />
        </div>
      </div>

      {/* Horizontal scrollable row */}
      <div className="px-8 lg:px-16">
        <div className="flex gap-6 overflow-x-auto pb-6 no-scrollbar">
          {creators.map((creator, i) => (
            <CreatorCard key={creator.name} creator={creator} index={i} onOpen={() => setActiveIndex(i)} />
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

      {/* Modal */}
      <AnimatePresence>
        {activeCreator && (
          <InfluencerModal key={activeCreator.name} creator={activeCreator} onClose={() => setActiveIndex(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
