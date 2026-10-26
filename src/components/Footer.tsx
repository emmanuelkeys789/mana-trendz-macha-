'use client';

import React from 'react';
import Image from 'next/image';
import { MapPin, Phone, Clock, ArrowUp, Sparkles } from 'lucide-react';
import { useShop } from '@/context/ShopContext';

export default function Footer() {
  const { setCategory, setVibe, resetFilters } = useShop();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#11120f] text-[#F4F1E8] border-t border-[#252620] relative">
      {/* Top Banner Tagline */}
      <div className="border-b border-[#252620] py-12 bg-[#171815]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D2B347] block mb-2">
              MANA TRENDZ MACHA • KUKATPALLY
            </span>
            <h2 className="font-display text-4xl sm:text-5xl uppercase tracking-tight text-[#F4F1E8]">
              FIND YOUR VIBE. <span className="text-[#D2B347]">WEAR IT YOUR WAY.</span>
            </h2>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="self-start md:self-auto px-5 py-3 bg-[#252620] hover:bg-[#D2B347] hover:text-[#171815] text-xs font-mono uppercase tracking-widest text-[#F4F1E8] transition-colors border border-[#3b3d33] flex items-center space-x-2"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand & Logo (2 cols) */}
          <div className="lg:col-span-2 space-y-5">
            <div className="relative h-14 w-48 overflow-hidden rounded bg-transparent">
              <Image
                src="/images/mtm-logo.jpg"
                alt="MANA TRENDZ MACHA Logo"
                fill
                className="object-contain"
                sizes="192px"
              />
            </div>

            <p className="text-xs text-[#B7B5AC] leading-relaxed max-w-sm">
              The premier destination for youthful, modern men&apos;s fashion in Kukatpally, Hyderabad. Curating contemporary streetwear, flannels, denim, and footwear at unbeatable combo rates.
            </p>

            <div className="space-y-2 pt-2 text-xs text-[#B7B5AC] font-mono">
              <div className="flex items-center space-x-2.5">
                <MapPin className="w-4 h-4 text-[#D2B347] flex-shrink-0" />
                <span>Kukatpally, Hyderabad, Telangana — 500072</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-[#D2B347] flex-shrink-0" />
                <span>Open Everyday: 10:30 AM – 10:00 PM</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#D2B347] flex-shrink-0" />
                <span>In-Store Support: +91 98765 43210</span>
              </div>
            </div>
          </div>

          {/* Col 2: In-Store Combos */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#D2B347] mb-4">
              SIGNATURE COMBOS
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-[#B7B5AC]">
              <li className="hover:text-[#F4F1E8] transition-colors">3 Shirts — ₹1000</li>
              <li className="hover:text-[#F4F1E8] transition-colors">2 Premium Shirts — ₹1000</li>
              <li className="hover:text-[#F4F1E8] transition-colors">4 T-Shirts — ₹1000</li>
              <li className="hover:text-[#F4F1E8] transition-colors">3 Pants — ₹1200</li>
              <li className="hover:text-[#F4F1E8] transition-colors">3 Pairs Shoes — ₹1000</li>
            </ul>
          </div>

          {/* Col 3: Shop Categories */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#D2B347] mb-4">
              COLLECTIONS
            </h4>
            <ul className="space-y-2.5 text-xs text-[#B7B5AC]">
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setCategory('Shirts');
                    document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-[#D2B347] transition-colors"
                >
                  Flannel & Linen Shirts
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setCategory('T-Shirts');
                    document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-[#D2B347] transition-colors"
                >
                  Oversized Street Tees
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setCategory('Pants');
                    document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-[#D2B347] transition-colors"
                >
                  Baggy Denim & Cargos
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setCategory('Shoes');
                    document.getElementById('shoes')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-[#D2B347] transition-colors"
                >
                  Sneakers & Loafers
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Shop Vibes */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#D2B347] mb-4">
              CURATED VIBES
            </h4>
            <ul className="space-y-2.5 text-xs text-[#B7B5AC]">
              {['Street', 'Minimal', 'Date Night', 'College', 'Weekend', 'Festive', 'Oversized'].map((v) => (
                <li key={v}>
                  <button
                    type="button"
                    onClick={() => {
                      setVibe(v);
                      document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-[#D2B347] transition-colors"
                  >
                    {v} Fit
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Demo Notice & Copyright */}
        <div className="mt-14 pt-8 border-t border-[#252620] flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-[#7e8075]">
          <p>© 2026 MANA TRENDZ MACHA. Kukatpally, Hyderabad. All rights reserved.</p>
          <div className="flex items-center space-x-2 text-[#D2B347]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Frontend Concept &amp; Brand Ecommerce Experience</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
