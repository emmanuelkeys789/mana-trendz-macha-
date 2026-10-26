'use client';

import React from 'react';
import { Tag } from 'lucide-react';
import { useShop } from '@/context/ShopContext';

export default function OfferStrip() {
  const { setOfferTag, setCategory } = useShop();

  const offers = [
    { text: '3 SHIRTS — ₹1000', tag: '3 FOR ₹1000', category: 'Shirts' },
    { text: '2 PREMIUM SHIRTS — ₹1000', tag: '2 FOR ₹1000', category: 'Shirts' },
    { text: '4 T-SHIRTS — ₹1000', tag: '4 FOR ₹1000', category: 'T-Shirts' },
    { text: '3 PANTS — ₹1200', tag: '3 FOR ₹1200', category: 'Pants' },
    { text: '3 PAIRS OF SHOES — ₹1000', tag: '3 PAIRS FOR ₹1000', category: 'Shoes' },
  ];

  const handleOfferClick = (offer: typeof offers[0]) => {
    setCategory(offer.category);
    setOfferTag(offer.tag);
    const target = document.querySelector('#shop');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative z-30 bg-[#252620] border-y border-[#3b3d33] py-2 overflow-hidden select-none">
      <div className="flex items-center">
        {/* Repeating marquee list */}
        <div className="animate-marquee flex items-center space-x-8 whitespace-nowrap text-xs font-semibold tracking-widest text-[#F4F1E8]">
          {[...offers, ...offers, ...offers].map((offer, idx) => (
            <button
              key={idx}
              onClick={() => handleOfferClick(offer)}
              className="inline-flex items-center space-x-2.5 hover:text-[#D2B347] transition-colors focus:outline-none group cursor-pointer"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#D2B347] group-hover:scale-125 transition-transform" />
              <span className="font-display text-sm tracking-wider uppercase text-[#F4F1E8] group-hover:text-[#D2B347]">
                {offer.text}
              </span>
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-[#171815] text-[#D2B347] border border-[#3b3d33]">
                KUKATPALLY EXCLUSIVE
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
