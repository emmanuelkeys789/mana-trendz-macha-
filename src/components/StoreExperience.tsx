'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Clock, Phone, Sparkles, Shirt, ShieldCheck, Check } from 'lucide-react';

export default function StoreExperience() {
  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Mana+Trendz+Macha+Kukatpally+Hyderabad';

  return (
    <section id="store" className="bg-[#171815] text-[#F4F1E8] border-t border-[#252620] relative">
      {/* 1. Cinematic Full-Width Exterior Banner */}
      <div className="relative min-h-[580px] lg:min-h-[640px] flex items-center justify-center overflow-hidden">
        {/* Exterior Photo as Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/store-exterior.jpg"
            alt="MANA TRENDZ MACHA Store Exterior in Kukatpally"
            fill
            className="object-cover object-center lg:object-[50%_40%]"
            sizes="100vw"
          />

          {/* Tasteful dark vignette preserving the yellow shop sign's natural appearance */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#171815] via-[#171815]/65 to-[#171815]/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#171815]/95 via-[#171815]/60 to-transparent lg:w-3/5" />
        </div>

        {/* Content on Exterior Banner */}
        <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#252620]/90 backdrop-blur-md border border-[#3b3d33] rounded-full text-[11px] font-mono tracking-widest text-[#D2B347] uppercase mb-4">
              <MapPin className="w-3.5 h-3.5 text-[#D2B347]" />
              <span>KUKATPALLY • HYDERABAD</span>
            </div>

            <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-[#F4F1E8] leading-[0.92] mb-6">
              YOUR NEXT FIT <br />
              <span className="text-[#D2B347]">IS HERE.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#F4F1E8]/90 font-normal mb-8 leading-relaxed">
              Visit <strong className="text-[#D2B347]">MANA TRENDZ MACHA</strong> in Kukatpally and explore the collection in person. Feel the fabrics, try on your fits, and take advantage of our unbeatable in-store combo offers.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 bg-[#D2B347] hover:bg-[#E5D48A] text-[#171815] font-display text-sm uppercase tracking-[0.18em] font-bold transition-all duration-300 flex items-center space-x-2 shadow-xl hover:shadow-[#D2B347]/20 group"
              >
                <Navigation className="w-4 h-4 transition-transform group-hover:rotate-45" />
                <span>GET DIRECTIONS</span>
              </a>

              <a
                href="tel:+919876543210"
                className="px-6 py-4 bg-[#252620]/90 hover:bg-[#3b3d33] text-[#F4F1E8] font-display text-sm uppercase tracking-[0.18em] border border-[#3b3d33] transition-colors flex items-center space-x-2"
              >
                <Phone className="w-4 h-4 text-[#D2B347]" />
                <span>CONTACT STORE</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Store Interior & In-Person Shopping Experience Section */}
      <div className="py-24 bg-[#141512] border-t border-[#252620]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Interior Store Photo Stage (7 cols) */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-[#1c1d18] border border-[#2d2f26] shadow-2xl group">
                <Image
                  src="/images/store-interior.jpg"
                  alt="MANA TRENDZ MACHA Store Interior Shopping Experience"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />

                {/* Interior Badging */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-[#171815]/90 backdrop-blur-md text-[#D2B347] font-mono text-xs uppercase tracking-widest border border-[#3b3d33]">
                    REAL STORE INTERIOR • FLOOR 1 & 2
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 z-10 bg-[#171815]/90 backdrop-blur-md p-3.5 border border-[#2d2f26] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#F4F1E8]">OVER 1,000+ STYLES ON DISPLAY</span>
                  <span className="text-[#D2B347]">AIR CONDITIONED COMFORT</span>
                </div>
              </div>
            </div>

            {/* In-Store Benefits & Logistics (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="flex items-center space-x-2.5 mb-2">
                  <span className="w-5 h-[2px] bg-[#D2B347]" />
                  <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#D2B347]">
                    THE WALK-IN ADVANTAGE
                  </span>
                </div>
                <h3 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-[#F4F1E8] mb-4">
                  MORE THAN A STORE. <br />
                  <span className="text-[#D2B347]">A FIT DESTINATION.</span>
                </h3>
                <p className="text-sm text-[#B7B5AC] leading-relaxed">
                  Step inside our Kukatpally showroom to experience modern curated racks organized by silhouette and vibe. Try on full outfits in our fitting lounges.
                </p>
              </div>

              {/* Store Experience Highlights */}
              <div className="space-y-3 pt-2">
                <div className="p-3.5 bg-[#1c1d18] border border-[#2d2f26] flex items-start space-x-3">
                  <Shirt className="w-5 h-5 text-[#D2B347] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-[#F4F1E8] uppercase tracking-wider block">
                      Instant Size & Fit Trial
                    </span>
                    <span className="text-xs text-[#B7B5AC]">
                      Dedicated dressing rooms to verify baggy, relaxed, or slim fits before purchasing.
                    </span>
                  </div>
                </div>

                <div className="p-3.5 bg-[#1c1d18] border border-[#2d2f26] flex items-start space-x-3">
                  <Sparkles className="w-5 h-5 text-[#D2B347] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-[#F4F1E8] uppercase tracking-wider block">
                      Live Combo Building
                    </span>
                    <span className="text-xs text-[#B7B5AC]">
                      Grab 3 shirts for ₹1000 or 3 pants for ₹1200 across mixed racks.
                    </span>
                  </div>
                </div>

                <div className="p-3.5 bg-[#1c1d18] border border-[#2d2f26] flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-[#D2B347] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-[#F4F1E8] uppercase tracking-wider block">
                      Store Hours & Availability
                    </span>
                    <span className="text-xs text-[#B7B5AC]">
                      Monday – Sunday: 10:30 AM to 10:00 PM (Open 7 Days a Week).
                    </span>
                  </div>
                </div>
              </div>

              {/* Directions CTA */}
              <div className="pt-2">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.2em] text-[#D2B347] hover:text-[#E5D48A] border-b border-[#D2B347] pb-1 transition-colors"
                >
                  <span>OPEN IN GOOGLE MAPS</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
