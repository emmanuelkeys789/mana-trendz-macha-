'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown, MapPin, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToShop = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('shop');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToStore = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('store');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#171815] pt-20 pb-12">
      {/* Background Campaign Visual with parallax/zoom animation */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.08, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease: [0.25, 1, 0.5, 1] }}
          className="relative w-full h-full"
        >
          <Image
            src="/images/fashion-campaign.jpg"
            alt="MANA TRENDZ MACHA Campaign Collection"
            fill
            priority
            className="object-cover object-center lg:object-[50%_35%]"
            sizes="100vw"
          />
        </motion.div>

        {/* Sophisticated Dark Gradient Vignette overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#171815] via-[#171815]/65 to-[#171815]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#171815]/90 via-[#171815]/40 to-transparent lg:w-3/4" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#171815]/30 to-[#171815]/80" />
      </div>

      {/* Hero Editorial Content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between min-h-[75vh]">
        {/* Top Badging */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-3 pt-4"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#252620]/80 backdrop-blur-md border border-[#3b3d33] text-[11px] font-mono tracking-widest text-[#E5D48A]">
            <span className="w-2 h-2 rounded-full bg-[#D2B347] animate-pulse" />
            <span>KUKATPALLY FLAGSHIP STORE</span>
          </div>
          <span className="hidden sm:inline-block text-[11px] tracking-widest text-[#B7B5AC] font-mono uppercase">
            HYDERABAD
          </span>
        </motion.div>

        {/* Center Editorial Headlines */}
        <div className="max-w-2xl py-12">
          {/* Brand label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center space-x-3 mb-4"
          >
            <span className="h-[2px] w-8 bg-[#D2B347]" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-[#D2B347]">
              MANA TRENDZ MACHA
            </span>
          </motion.div>

          {/* Headline: FIND YOUR VIBE. */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="font-display text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.92] text-[#F4F1E8] mb-6 uppercase"
          >
            FIND YOUR <span className="text-[#D2B347]">VIBE.</span>
          </motion.h1>

          {/* Supporting line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="text-base sm:text-lg lg:text-xl text-[#F4F1E8]/85 font-normal max-w-lg mb-8 leading-relaxed"
          >
            Men&apos;s fashion. Made for your everyday. Engineered for effortless street presence and relaxed luxury.
          </motion.p>

          {/* Call to action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap items-center gap-5 sm:gap-6"
          >
            {/* Primary Muted Yellow CTA */}
            <a
              href="#shop"
              onClick={scrollToShop}
              className="px-8 py-4 bg-[#D2B347] hover:bg-[#E5D48A] text-[#171815] font-display text-base tracking-[0.18em] uppercase font-bold transition-all duration-300 transform hover:-translate-y-0.5 shadow-xl hover:shadow-[#D2B347]/20 flex items-center gap-2 group"
            >
              <span>SHOP COLLECTION</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>

            {/* Secondary Link: EXPLORE THE STORE */}
            <a
              href="#store"
              onClick={scrollToStore}
              className="text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold text-[#F4F1E8] hover:text-[#D2B347] py-2 transition-colors flex items-center gap-2 group border-b border-transparent hover:border-[#D2B347]"
            >
              <span>EXPLORE THE STORE</span>
              <span className="transition-transform group-hover:translate-y-0.5">↓</span>
            </a>
          </motion.div>
        </div>

        {/* Bottom Bar: Key Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="pt-6 border-t border-[#252620]/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs"
        >
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-mono text-[#B7B5AC] tracking-wider">COMBO DEALS</span>
            <span className="font-semibold text-[#F4F1E8]">3 Shirts from ₹1000</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-mono text-[#B7B5AC] tracking-wider">BOTTOMS OFFER</span>
            <span className="font-semibold text-[#F4F1E8]">3 Pants for ₹1200</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-mono text-[#B7B5AC] tracking-wider">FOOTWEAR LINE</span>
            <span className="font-semibold text-[#F4F1E8]">3 Pairs for ₹1000</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-mono text-[#B7B5AC] tracking-wider">LOCATION</span>
            <span className="font-semibold text-[#F4F1E8]">Kukatpally, Hyderabad</span>
          </div>
        </motion.div>
      </div>

      {/* Floating subtle scroll indicator */}
      <a
        href="#vibes"
        aria-label="Scroll down"
        className="hidden md:flex absolute bottom-6 right-8 z-10 flex-col items-center gap-1.5 text-[10px] uppercase font-mono tracking-widest text-[#B7B5AC] hover:text-[#D2B347] transition-colors"
      >
        <span>SCROLL</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#D2B347]" />
      </a>
    </section>
  );
}
