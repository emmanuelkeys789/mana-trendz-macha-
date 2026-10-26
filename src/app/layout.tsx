import type { Metadata } from 'next';
import { Oswald, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { ShopProvider } from '@/context/ShopContext';

const oswald = Oswald({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://manatrendzmacha.com'),
  title: 'MANA TRENDZ MACHA | Premium Men’s Fashion • Kukatpally, Hyderabad',
  description: 'FIND YOUR VIBE. WEAR IT YOUR WAY. Premium menswear in Kukatpally, Hyderabad. Shirts 3 for ₹1000, Pants 3 for ₹1200, Shoes 3 for ₹1000.',
  keywords: [
    'Mana Trendz Macha',
    'Mens fashion Hyderabad',
    'Kukatpally clothes store',
    'Streetwear India',
    'Shirts 3 for 1000',
    'Sneakers Hyderabad',
    'Men clothing combo deals'
  ],
  authors: [{ name: 'MANA TRENDZ MACHA' }],
  openGraph: {
    title: 'MANA TRENDZ MACHA | Premium Men’s Fashion',
    description: 'Find your vibe. Wear it your way. Explore our signature collections and in-store combos in Kukatpally, Hyderabad.',
    type: 'website',
    images: ['/images/fashion-campaign.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${oswald.variable} ${plusJakartaSans.variable} dark scroll-smooth`}>
      <body className="bg-[#171815] text-[#F4F1E8] font-sans antialiased selection:bg-[#D2B347] selection:text-[#171815]">
        <ShopProvider>
          {children}
        </ShopProvider>
      </body>
    </html>
  );
}
