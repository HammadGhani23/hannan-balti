'use client';

import { motion } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Included', href: '#included' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0F0F] border-t border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-14">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Wordmark */}
          <div className="flex items-center gap-2.5">
            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" className="text-[#5EC2C2]">
              <path d="M10 0L20 14H14.5L10 7L5.5 14H0L10 0Z" fill="currentColor" fillOpacity="0.9" />
              <path d="M6 14H14V16H6V14Z" fill="currentColor" fillOpacity="0.4" />
            </svg>
            <span className="font-nav text-[#F0EAE0] tracking-[0.25em] text-[11px]">HANNAN BALTI</span>
          </div>

          {/* Center nav */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="font-nav text-[#888888] text-[10px] tracking-widest hover:text-[#F0EAE0] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-5">
            <a
              href="https://instagram.com/hannanbalti"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-30 hover:opacity-80 transition-opacity duration-300"
              aria-label="Instagram"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href="https://wa.me/923349665758"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-30 hover:opacity-80 transition-opacity duration-300"
              aria-label="WhatsApp"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
            <a
              href="https://youtube.com/@hannanbalti"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-30 hover:opacity-80 transition-opacity duration-300"
              aria-label="YouTube"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22.54 6.42a2.78 2.78 0 00-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-nav text-[#888888] text-[10px] tracking-widest text-center">
            TRIPGO.PK
          </p>
          <p className="font-nav text-[#888888]/50 text-[10px] tracking-wider">
            © {new Date().getFullYear()} HANNAN BALTI TOURS. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
