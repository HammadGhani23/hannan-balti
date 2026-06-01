'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const destinations = [
  'Hunza',
  'Skardu',
  'Fairy Meadows',
  'Chitral',
  'Full Northern Circuit',
  'Not sure yet — surprise me',
];

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const formRef = useRef<HTMLDivElement>(null);
  const formInView = useInView(formRef, { once: true, margin: '-60px' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    destination: '',
    dates: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waText = encodeURIComponent(
      `Hi Hannan! I'm interested in booking a tour.\n\nName: ${formData.name}\nEmail: ${formData.email}\nWhatsApp: ${formData.whatsapp}\nDestination: ${formData.destination}\nTravel Dates: ${formData.dates}\n\nMessage/Questions: ${formData.message}`
    );
    window.open(`https://wa.me/923001234567?text=${waText}`, '_blank');
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative min-h-screen flex items-center py-24 px-8 lg:px-16 overflow-hidden bg-[#0A0F0F]"
    >
      {/* ─── FULL-BLEED CINEMATIC BACKGROUND ─── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?q=80&w=2000"
          alt="Golden hour K2 / Karakoram peak with small red-roofed guesthouse in Skardu valley"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Cinematic gradient wash */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(5,15,15,0.85) 0%, rgba(10,15,15,0.65) 50%, rgba(35,15,5,0.7) 100%)',
          }}
        />
      </div>

      {/* ─── CONTENT GRID ─── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT: Frosted-glass form panel */}
        <motion.div
          ref={formRef}
          initial={{ opacity: 0, x: -40 }}
          animate={formInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl p-8 lg:p-12 border"
          style={{
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            background: 'rgba(10,20,20,0.6)',
            borderColor: 'rgba(255,255,255,0.1)',
          }}
        >
          <p className="section-number mb-4">06 — EXPEDITION BOOKING</p>
          <h2
            className="font-editorial text-[#F0EAE0] mb-2 leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 300 }}
          >
            Ready to explore the north?
          </h2>
          <p className="font-nav text-[#888888] text-[9px] tracking-[0.18em] mb-8">
            LEAVE YOUR DETAILS — HANNAN WILL REACH OUT WITHIN 24 HOURS.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Full name"
                value={formData.name}
                onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                required
                className="form-field"
                id="contact-name"
                data-cursor-hover
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email address"
                value={formData.email}
                onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                required
                className="form-field"
                id="contact-email"
                data-cursor-hover
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="WhatsApp number (with country code)"
                value={formData.whatsapp}
                onChange={e => setFormData(p => ({ ...p, whatsapp: e.target.value }))}
                required
                className="form-field"
                id="contact-whatsapp"
                data-cursor-hover
              />
            </div>
            <div>
              <select
                value={formData.destination}
                onChange={e => setFormData(p => ({ ...p, destination: e.target.value }))}
                required
                className="form-field"
                id="contact-destination"
                data-cursor-hover
              >
                <option value="" disabled className="text-white bg-[#111818]">Where do you want to go?</option>
                {destinations.map(d => (
                  <option key={d} value={d} className="text-white bg-[#111818]">{d}</option>
                ))}
              </select>
            </div>
            <div>
              <input
                type="text"
                placeholder="Approximate travel dates"
                value={formData.dates}
                onChange={e => setFormData(p => ({ ...p, dates: e.target.value }))}
                required
                className="form-field"
                id="contact-dates"
                data-cursor-hover
              />
            </div>
            <div>
              <textarea
                placeholder="Message or questions"
                value={formData.message}
                onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                rows={3}
                className="form-field resize-none"
                id="contact-message"
                data-cursor-hover
              />
            </div>

            {/* Glacier White full-width button. Hover transitions to #5EC2C2 with dark text */}
            <button
              type="submit"
              className="w-full rounded-full py-4 text-center font-nav text-[11px] tracking-widest bg-[#FAFAFA] text-[#0A0F0F] hover:bg-[#5EC2C2] hover:text-[#0A0F0F] transition-all duration-300 pointer-events-auto cursor-pointer"
              id="contact-submit"
              data-cursor-hover
            >
              PLAN MY EXPEDITION
            </button>
          </form>

          {/* Side-by-side Contact Pills */}
          <div className="flex flex-wrap gap-4 mt-8 border-t border-white/5 pt-6 justify-between">
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-full border border-white/10 font-nav text-[10px] text-[#5EC2C2] tracking-widest hover:border-[#5EC2C2] transition-all duration-300"
              data-cursor-hover
            >
              💬 WHATSAPP HANNAN
            </a>
            <a
              href="https://instagram.com/hannanbalti"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-full border border-white/10 font-nav text-[10px] text-[#F0EAE0]/75 tracking-widest hover:border-white/30 transition-all duration-300"
              data-cursor-hover
            >
              📸 @HANNANBALTI
            </a>
          </div>
        </motion.div>

        {/* RIGHT: Ambient information and highlights */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={formInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:flex flex-col gap-8"
        >
          <div>
            <p className="font-nav text-[#5EC2C2] text-[10px] tracking-widest mb-4">
              EVERY JOURNEY BEGINS WITH A CONVERSATION
            </p>
            <h3
              className="font-editorial text-[#F0EAE0] leading-[1.35] italic"
              style={{ fontSize: 'clamp(1.4rem, 3vw, 2.4rem)', fontWeight: 300 }}
            >
              &quot;The peaks have been waiting for ten thousand years. The only question is when you will finally answer.&quot;
            </h3>
            <p className="font-nav text-[#888888] text-[9px] mt-3 tracking-widest">
              — HANNAN BALTI, SKARDU BASECAMP
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Avg Response Time', value: '< 24 Hours' },
              { label: 'Expeditions Led', value: '180+ Trips' },
              { label: 'Local Base', value: 'Skardu, Pakistan' },
              { label: 'Expedition Years', value: '12+ Years' },
            ].map(item => (
              <div key={item.label} className="rounded-xl p-5 border border-white/5" style={{ background: 'rgba(255,255,255,0.03)' }}>
                <p className="font-nav text-[#888888] text-[9px] tracking-widest mb-1">{item.label}</p>
                <p className="font-editorial text-[#5EC2C2]" style={{ fontSize: '1.15rem' }}>{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
