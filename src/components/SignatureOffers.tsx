'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import { SIGNATURE_OFFERS, SignatureOffer } from '@/data/offers';
import { useShop } from '@/context/ShopContext';

export default function SignatureOffers() {
  const { setCategory, setOfferTag } = useShop();

  const handleApplyOffer = (offer: SignatureOffer) => {
    if (offer.targetFilter.category) setCategory(offer.targetFilter.category);
    if (offer.targetFilter.offerTag) setOfferTag(offer.targetFilter.offerTag);

    const shopEl = document.getElementById('shop');
    if (shopEl) {
      shopEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-[#11120f] border-t border-[#252620] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Campaign Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#252620] border border-[#3b3d33] rounded-full text-[11px] font-mono tracking-widest text-[#D2B347] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>KUKATPALLY STORE SIGNATURE COMBOS</span>
          </div>

          <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-[#F4F1E8] leading-[0.95] mb-4">
            MORE STYLE. <span className="text-[#D2B347]">LESS SPEND.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#B7B5AC] max-w-xl mx-auto leading-relaxed">
            Engineered fashion deals crafted for real street culture. High-grade fabrics, contemporary cuts, and unmatched combo value.
          </p>
        </div>

        {/* 5 Distinctive Offer Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SIGNATURE_OFFERS.map((offer, idx) => {
            const isDark = offer.bgType === 'dark';

            return (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative p-8 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 shadow-2xl ${
                  isDark
                    ? 'bg-[#1c1d18] text-[#F4F1E8] border border-[#2d2f26] hover:border-[#D2B347]'
                    : 'bg-[#F4F1E8] text-[#171815] border border-[#e2dec9] hover:border-[#D2B347]'
                } ${idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                {/* Top Badge & Category */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`text-[10px] uppercase font-mono tracking-widest px-2.5 py-1 font-bold ${
                        isDark
                          ? 'bg-[#252620] text-[#D2B347] border border-[#3b3d33]'
                          : 'bg-[#171815] text-[#D2B347]'
                      }`}
                    >
                      {offer.badge}
                    </span>
                    <span
                      className={`text-[11px] font-mono tracking-wider ${
                        isDark ? 'text-[#B7B5AC]' : 'text-[#747269]'
                      }`}
                    >
                      {offer.unitPrice}
                    </span>
                  </div>

                  {/* Headline & Quantity */}
                  <div className="mb-4">
                    <div
                      className={`text-xs font-mono tracking-[0.2em] uppercase mb-1 ${
                        isDark ? 'text-[#D2B347]' : 'text-[#8a7224] font-semibold'
                      }`}
                    >
                      {offer.category}
                    </div>

                    <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-tight leading-none mb-3">
                      {offer.headline}
                    </h3>
                  </div>

                  {/* Big Numerals Price Block */}
                  <div className="py-4 border-y border-dashed my-4 flex items-baseline justify-between">
                    <div>
                      <span
                        className={`text-xs font-mono tracking-widest uppercase block mb-1 ${
                          isDark ? 'text-[#B7B5AC]' : 'text-[#747269]'
                        }`}
                      >
                        COMBO DEAL
                      </span>
                      <div className="flex items-baseline space-x-2">
                        <span className="font-display text-2xl font-bold uppercase tracking-wider">
                          {offer.quantity}
                        </span>
                        <span className="font-display text-4xl sm:text-5xl font-black text-[#D2B347] tracking-tight">
                          {offer.price}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    className={`text-xs sm:text-sm leading-relaxed mb-8 ${
                      isDark ? 'text-[#B7B5AC]' : 'text-[#504e46]'
                    }`}
                  >
                    {offer.description}
                  </p>
                </div>

                {/* Action Button */}
                <button
                  type="button"
                  onClick={() => handleApplyOffer(offer)}
                  className={`w-full py-3.5 px-4 font-display text-sm tracking-[0.15em] uppercase font-bold transition-all duration-300 flex items-center justify-center space-x-2 group-hover:shadow-lg ${
                    isDark
                      ? 'bg-[#252620] hover:bg-[#D2B347] text-[#F4F1E8] hover:text-[#171815]'
                      : 'bg-[#171815] hover:bg-[#D2B347] text-[#F4F1E8] hover:text-[#171815]'
                  }`}
                >
                  <span>EXPLORE {offer.headline} OFFER</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* In-store note */}
        <div className="mt-12 text-center text-xs font-mono text-[#B7B5AC] border border-[#252620] p-4 bg-[#171815]">
          <span className="text-[#D2B347] font-bold">NOTE: </span>
          All combo offers are fully valid for in-store walk-in shopping at our Kukatpally branch. Mix and match across any eligible racks.
        </div>
      </div>
    </section>
  );
}
