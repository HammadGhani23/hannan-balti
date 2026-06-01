'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const destinations = [
  'Hunza Valley',
  'Skardu & Deosai',
  'Fairy Meadows',
  'Chitral & Kalash',
  'Full Circuit',
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
      `Hi Hannan! I'm interested in a tour.\n\nName: ${formData.name}\nEmail: ${formData.email}\nDestination: ${formData.destination}\nDates: ${formData.dates}\n\n${formData.message}`
    );
    window.open(`https://wa.me/923001234567?text=${waText}`, '_blank');
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative min-h-screen flex items-center py-24 px-8 lg:px-16 overflow-hidden"
    >
      {/* Full-bleed cinematic background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/seed/karak99/1920/1080"
          alt="K2 and Nanga Parbat at golden hour"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(5,15,15,0.85) 0%, rgba(10,15,15,0.7) 50%, rgba(20,10,5,0.75) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: form panel */}
        <motion.div
          ref={formRef}
          initial={{ opacity: 0, x: -40 }}
          animate={formInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel-dark rounded-2xl p-10 lg:p-12"
        >
          <p className="section-number mb-4">06 — BOOK YOUR TRIP</p>
          <h2
            className="font-editorial text-[#F0EAE0] mb-2 leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 300 }}
          >
            Ready to explore the north?
          </h2>
          <p className="font-nav text-[#888888] text-[10px] tracking-widest mb-8">
            LEAVE YOUR DETAILS — HANNAN WILL REACH OUT WITHIN 24 HOURS.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your full name"
                value={formData.name}
                onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                required
                className="form-field"
                id="contact-name"
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
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="WhatsApp number (with country code)"
                value={formData.whatsapp}
                onChange={e => setFormData(p => ({ ...p, whatsapp: e.target.value }))}
                className="form-field"
                id="contact-whatsapp"
              />
            </div>
            <div>
              <select
                value={formData.destination}
                onChange={e => setFormData(p => ({ ...p, destination: e.target.value }))}
                required
                className="form-field"
                id="contact-destination"
              >
                <option value="" disabled>Where do you want to go?</option>
                {destinations.map(d => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
            <div>
              <input
                type="text"
                placeholder="Approximate travel dates"
                value={formData.dates}
                onChange={e => setFormData(p => ({ ...p, dates: e.target.value }))}
                className="form-field"
                id="contact-dates"
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
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ backgroundColor: '#5EC2C2', color: '#0A0F0F' }}
              transition={{ duration: 0.3 }}
              className="w-full rounded-full py-4 font-nav text-[11px] tracking-widest text-[#0A0F0F] bg-[#F0EAE0] border border-[#F0EAE0] cursor-pointer"
              id="contact-submit"
            >
              SEND MESSAGE VIA WHATSAPP
            </motion.button>
          </form>

          {/* Direct contact pills */}
          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 font-nav text-[10px] text-[#5EC2C2] tracking-widest hover:border-[#5EC2C2] transition-colors duration-300"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WHATSAPP HANNAN
            </a>
            <a
              href="https://instagram.com/hannanbalti"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 font-nav text-[10px] text-[#F0EAE0]/70 tracking-widest hover:border-white/30 transition-colors duration-300"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              @HANNANBALTI
            </a>
          </div>
        </motion.div>

        {/* Right: ambient info */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={formInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:flex flex-col gap-8"
        >
          <div>
            <p className="font-nav text-[#5EC2C2] text-[10px] tracking-widest mb-4">
              EVERY JOURNEY BEGINS WITH A MESSAGE
            </p>
            <h3
              className="font-editorial text-[#F0EAE0] leading-[1.3]"
              style={{ fontSize: 'clamp(1.4rem, 3vw, 2.4rem)', fontWeight: 300 }}
            >
              "The mountains have always been waiting. The only question is when you&apos;ll go."
            </h3>
            <p className="font-nav text-[#888888] text-[10px] mt-3 tracking-widest">
              — HANNAN BALTI, SKARDU
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Response Time', value: '< 24 hours' },
              { label: 'Languages', value: 'EN · UR · BA · SH · PS' },
              { label: 'Base', value: 'Skardu, Gilgit-Baltistan' },
              { label: 'Operating Since', value: '2014' },
            ].map(item => (
              <div key={item.label} className="glass-panel rounded-lg p-5">
                <p className="font-nav text-[#888888] text-[10px] tracking-widest mb-1">{item.label}</p>
                <p className="font-editorial text-[#F0EAE0]" style={{ fontSize: '1.05rem' }}>{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
