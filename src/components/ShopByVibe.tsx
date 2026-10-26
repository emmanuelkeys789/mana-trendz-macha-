'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { VIBES, VibeItem } from '@/data/vibes';
import { useShop } from '@/context/ShopContext';

export default function ShopByVibe() {
  const { setVibe } = useShop();

  const handleSelectVibe = (slug: VibeItem['slug']) => {
    setVibe(slug);
    const shopEl = document.getElementById('shop');
    if (shopEl) {
      shopEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="vibes" className="py-24 bg-[#171815] border-t border-[#252620] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center space-x-2.5 mb-3">
              <span className="w-6 h-[2px] bg-[#D2B347]" />
              <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#D2B347]">
                CURATED AESTHETICS
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-[#F4F1E8]">
              SHOP BY <span className="text-[#D2B347]">VIBE</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#B7B5AC] max-w-md leading-relaxed">
            From relaxed street fits to nocturnal weekend drops, discover looks curated for every mood and occasion in your weekly rotation.
          </p>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-[340px] sm:auto-rows-[380px]">
          {VIBES.map((vibe, idx) => {
            // Apply varied grid spans for editorial asymmetry
            const spanClass =
              idx === 0
                ? 'md:col-span-2 md:row-span-2' // Street: Hero tile
                : idx === 1
                ? 'md:col-span-1 md:row-span-1' // Minimal
                : idx === 2
                ? 'md:col-span-1 md:row-span-2' // Date Night: Tall vertical
                : idx === 3
                ? 'md:col-span-2 md:row-span-1' // Oversized: Wide horizontal
                : idx === 4
                ? 'md:col-span-1 md:row-span-1' // College
                : idx === 5
                ? 'md:col-span-1 md:row-span-1' // Weekend
                : 'md:col-span-2 md:row-span-1'; // Festive

            return (
              <motion.div
                key={vibe.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                onClick={() => handleSelectVibe(vibe.slug)}
                className={`group relative overflow-hidden bg-[#252620] cursor-pointer border border-[#3b3d33]/60 transition-all duration-500 hover:border-[#D2B347] ${spanClass}`}
              >
                {/* Background Image with gentle zoom on hover */}
                <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
                  <Image
                    src={vibe.image}
                    alt={`${vibe.name} Men's Fashion`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Subtle Black Overlays that shift subtly on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#171815] via-[#171815]/50 to-transparent opacity-85 group-hover:opacity-75 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#171815]/60 via-transparent to-[#171815]/80" />

                {/* Top Corner Details */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#B7B5AC] bg-[#171815]/70 px-2 py-1 rounded backdrop-blur-sm border border-[#3b3d33]">
                    {vibe.tagline}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#171815]/80 border border-[#3b3d33] flex items-center justify-center text-[#F4F1E8] group-hover:bg-[#D2B347] group-hover:text-[#171815] group-hover:border-[#D2B347] transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Bottom Content with animated typography */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 flex flex-col justify-end">
                  <div className="flex items-center space-x-2 mb-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                    <span className="w-3 h-[2px] bg-[#D2B347]" />
                    <span className="text-[11px] font-mono tracking-widest text-[#D2B347] uppercase">
                      {vibe.itemCount} PIECES
                    </span>
                  </div>

                  <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-wider text-[#F4F1E8] group-hover:text-[#E5D48A] transition-colors duration-300 transform group-hover:translate-x-1">
                    {vibe.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#B7B5AC] line-clamp-2 mt-1.5 leading-relaxed group-hover:text-[#F4F1E8]/90 transition-colors">
                    {vibe.description}
                  </p>

                  <div className="mt-3 flex items-center text-xs font-semibold tracking-[0.15em] text-[#D2B347] uppercase opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span>EXPLORE THIS VIBE</span>
                    <span className="ml-1.5">→</span>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#D2B347] transition-colors duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
