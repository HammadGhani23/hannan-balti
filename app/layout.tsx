import type { Metadata } from 'next';
import { Inter, Bebas_Neue, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import CustomCursor from '@/components/CustomCursor';
import WhatsAppBubble from '@/components/WhatsAppBubble';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Hannan Balti — Tour Guide & Adventure Operator | Northern Pakistan',
  description:
    'Skardu-born guide Hannan Balti leads international travelers through Pakistan\'s most dramatic landscapes — Hunza, Skardu, Fairy Meadows, and Chitral. Custom itineraries, 5 languages, 10+ years experience.',
  keywords: [
    'Pakistan tour guide',
    'Northern Pakistan',
    'Hunza Valley',
    'Skardu tours',
    'Fairy Meadows',
    'Karakoram',
    'Hannan Balti',
    'Gilgit-Baltistan',
  ],
  openGraph: {
    title: 'Hannan Balti — Northern Pakistan Adventure Tours',
    description: 'From Attabad Lake to Fairy Meadows — your journey, your pace.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable} ${cormorant.variable}`}>
      <body className="bg-[#0A0F0F] text-[#FAFAFA] overflow-x-hidden">
        <SmoothScrollProvider>
          <CustomCursor />
          {children}
          <WhatsAppBubble />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
