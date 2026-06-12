'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Included', href: '#included' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-8 py-6 transition-all duration-500 ${
          scrolled || menuOpen
            ? 'bg-[rgba(10,15,15,0.85)] backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        {/* Wordmark */}
        <a href="#" onClick={() => setMenuOpen(false)} className="flex items-center gap-2.5 group z-50">
          <svg width="20" height="16" viewBox="0 0 20 16" fill="none" className="text-[#5EC2C2]">
            <path
              d="M10 0L20 14H14.5L10 7L5.5 14H0L10 0Z"
              fill="currentColor"
              fillOpacity="0.9"
            />
            <path d="M6 14H14V16H6V14Z" fill="currentColor" fillOpacity="0.4" />
          </svg>
          <span className="font-nav text-[#F0EAE0] tracking-[0.25em] text-[11px]">
            HANNAN BALTI
          </span>
        </a>

        {/* Nav links (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link font-nav text-[#FAFAFA]/70 hover:text-[#FAFAFA] transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <a href="#contact" className="btn-glacier hidden md:block">
            <span>Book a Tour</span>
          </a>

          {/* Social icons */}
          <div className="hidden lg:flex items-center gap-3 ml-2">
            <a
              href="https://instagram.com/hannanbalti"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-40 hover:opacity-100 transition-opacity duration-300"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@hannanbalti3438"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-40 hover:opacity-100 transition-opacity duration-300"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22.54 6.42a2.78 2.78 0 00-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex md:hidden flex-col justify-center items-center w-8 h-8 gap-[5px] z-50 relative pointer-events-auto"
            aria-label="Toggle Menu"
            data-cursor-hover
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-6 h-[1.5px] bg-[#FAFAFA]"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="w-6 h-[1.5px] bg-[#FAFAFA]"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-6 h-[1.5px] bg-[#FAFAFA]"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-[#0A0F0F]/95 backdrop-blur-2xl md:hidden flex flex-col justify-center px-10 py-20 border-b border-white/10"
          >
            {/* Nav list */}
            <div className="flex flex-col gap-6">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 + idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-display text-[#FAFAFA] text-4xl hover:text-[#5EC2C2] transition-colors leading-none tracking-wider"
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Mobile Booking CTA inside drawer */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-16 pt-8 border-t border-white/5 flex flex-col gap-6"
            >
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="btn-teal text-center"
              >
                Book a Tour
              </a>

              {/* Minimal social row */}
              <div className="flex items-center justify-center gap-6 mt-2 opacity-50 text-[10px] font-nav tracking-widest">
                <a href="https://instagram.com/hannanbalti" target="_blank" rel="noopener noreferrer" className="hover:text-[#5EC2C2] transition-colors">
                  INSTAGRAM
                </a>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" className="hover:text-[#5EC2C2] transition-colors">
                  WHATSAPP
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
