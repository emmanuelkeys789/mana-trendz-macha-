'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, Eye, ShoppingBag, ArrowRight } from 'lucide-react';
import { PRODUCTS, Product } from '@/data/products';
import { useShop } from '@/context/ShopContext';

interface Hotspot {
  id: string;
  xPercent: number; // 0 - 100
  yPercent: number; // 0 - 100
  title: string;
  productId: string;
  model: 'Left Model (Plaid)' | 'Center Model (Linen)' | 'Right Model (Street)' | 'Shoe Podium';
}

export default function ShopTheLook() {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const { openProductModal, addToCart } = useShop();

  const hotspots: Hotspot[] = [
    {
      id: 'hs-checked-shirt',
      xPercent: 26,
      yPercent: 32,
      title: 'Classic Checked Flannel',
      productId: 'classic-checked-shirt',
      model: 'Left Model (Plaid)'
    },
    {
      id: 'hs-black-jeans',
      xPercent: 25,
      yPercent: 68,
      title: 'Washed Black Baggy Jeans',
      productId: 'black-baggy-jeans',
      model: 'Left Model (Plaid)'
    },
    {
      id: 'hs-beige-shirt',
      xPercent: 48,
      yPercent: 32,
      title: 'Beige Relaxed-Fit Shirt',
      productId: 'beige-relaxed-shirt',
      model: 'Center Model (Linen)'
    },
    {
      id: 'hs-blue-jeans',
      xPercent: 48,
      yPercent: 66,
      title: 'Vintage Blue Straight Jeans',
      productId: 'blue-straight-jeans',
      model: 'Center Model (Linen)'
    },
    {
      id: 'hs-graphic-tee',
      xPercent: 68,
      yPercent: 35,
      title: 'Graphic Oversized Street Tee',
      productId: 'graphic-streetwear-tee',
      model: 'Right Model (Street)'
    },
    {
      id: 'hs-cargo-pants',
      xPercent: 66,
      yPercent: 68,
      title: 'Olive Tactical Cargo Pants',
      productId: 'olive-cargo-pants',
      model: 'Right Model (Street)'
    },
    {
      id: 'hs-podium-shoes',
      xPercent: 88,
      yPercent: 74,
      title: 'Heritage Black Bit Loafers',
      productId: 'black-loafers',
      model: 'Shoe Podium'
    }
  ];

  const getProduct = (productId: string): Product | undefined => {
    return PRODUCTS.find((p) => p.id === productId);
  };

  const activeProduct = activeHotspot ? getProduct(activeHotspot.productId) : null;

  return (
    <section className="py-24 bg-[#141512] border-t border-[#252620] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center space-x-2.5 mb-2.5">
              <span className="w-6 h-[2px] bg-[#D2B347]" />
              <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#D2B347]">
                EDITORIAL SPOTLIGHT
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-[#F4F1E8]">
              THE LOOK. <span className="text-[#D2B347]">THE ATTITUDE.</span>
            </h2>
          </div>
          <p className="text-sm text-[#B7B5AC] max-w-md leading-relaxed">
            Tap the interactive markers on the campaign models to inspect the exact shirts, denims, and footwear showcased in our lookbook.
          </p>
        </div>

        {/* Campaign Visual Canvas with Interactive Hotspots */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#171815] border border-[#2d2f26] shadow-2xl">
          <Image
            src="/images/fashion-campaign.jpg"
            alt="MANA TRENDZ MACHA Editorial Lookbook"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />

          {/* Subtle Contrast Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#171815]/80 via-transparent to-[#171815]/30 pointer-events-none" />

          {/* Hotspot Markers */}
          {hotspots.map((hs) => {
            const isSelected = activeHotspot?.id === hs.id;

            return (
              <div
                key={hs.id}
                style={{ left: `${hs.xPercent}%`, top: `${hs.yPercent}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
              >
                <button
                  type="button"
                  onClick={() => setActiveHotspot(isSelected ? null : hs)}
                  aria-label={`Inspect ${hs.title}`}
                  className="relative group p-2 focus:outline-none"
                >
                  {/* Outer pulse wave */}
                  <span
                    className={`absolute inset-0 rounded-full bg-[#D2B347] transition-opacity duration-300 ${
                      isSelected ? 'animate-ping opacity-60' : 'opacity-30 group-hover:opacity-75'
                    }`}
                  />

                  {/* Core Marker button */}
                  <span
                    className={`relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 transition-transform duration-300 ${
                      isSelected
                        ? 'bg-[#D2B347] text-[#171815] border-[#F4F1E8] scale-110 shadow-lg'
                        : 'bg-[#171815]/90 text-[#D2B347] border-[#D2B347] hover:scale-110 shadow-md'
                    }`}
                  >
                    {isSelected ? (
                      <X className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </span>
                </button>
              </div>
            );
          })}

          {/* Floating Product Drawer/Card on Hotspot Select */}
          <AnimatePresence>
            {activeProduct && activeHotspot && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 max-w-sm w-[calc(100%-2rem)] bg-[#171815]/95 backdrop-blur-xl border border-[#D2B347] p-4 sm:p-5 shadow-2xl"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-[#D2B347]" />
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#D2B347]">
                      {activeHotspot.model}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveHotspot(null)}
                    aria-label="Close product card"
                    className="text-[#B7B5AC] hover:text-[#F4F1E8] p-1"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex gap-4">
                  {/* Thumbnail */}
                  <div className="relative w-20 h-24 bg-[#F4F1E8] flex-shrink-0 overflow-hidden border border-[#2d2f26]">
                    <Image
                      src={activeProduct.image}
                      alt={activeProduct.name}
                      fill
                      className="object-contain p-1"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex flex-col justify-between flex-1">
                    <div>
                      {activeProduct.offerTag && (
                        <span className="inline-block px-1.5 py-0.5 text-[9px] font-mono uppercase bg-[#252620] text-[#D2B347] border border-[#3b3d33] mb-1">
                          {activeProduct.offerTag}
                        </span>
                      )}
                      <h4 className="text-sm font-semibold text-[#F4F1E8] line-clamp-1">
                        {activeProduct.name}
                      </h4>
                      <div className="flex items-baseline space-x-2 mt-1">
                        <span className="text-base font-bold text-[#D2B347]">
                          ₹{activeProduct.price}
                        </span>
                        <span className="text-xs text-[#B7B5AC] line-through">
                          ₹{activeProduct.originalPrice}
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-2 mt-3">
                      <button
                        type="button"
                        onClick={() => addToCart(activeProduct)}
                        className="flex-1 py-1.5 px-2 bg-[#D2B347] text-[#171815] text-[11px] font-display uppercase tracking-wider font-bold hover:bg-[#E5D48A] transition-colors flex items-center justify-center gap-1"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        <span>QUICK ADD</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => openProductModal(activeProduct)}
                        className="py-1.5 px-2.5 bg-[#252620] text-[#F4F1E8] text-[11px] font-display uppercase tracking-wider hover:bg-[#3b3d33] transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Helper caption */}
          <div className="absolute bottom-3 left-4 hidden sm:flex items-center space-x-2 text-[10px] font-mono tracking-widest text-[#B7B5AC] bg-[#171815]/80 px-2.5 py-1 rounded border border-[#2d2f26]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D2B347]" />
            <span>CLICK ON ANY PLUS ICON TO EXPLORE PIECES</span>
          </div>
        </div>

        {/* Quick Model Selector Pills */}
        <div className="mt-6 flex items-center justify-center flex-wrap gap-2 sm:gap-3">
          <span className="text-xs font-mono uppercase text-[#B7B5AC] mr-2">QUICK JUMP:</span>
          {hotspots.map((hs) => (
            <button
              key={hs.id}
              onClick={() => setActiveHotspot(hs)}
              className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors border ${
                activeHotspot?.id === hs.id
                  ? 'bg-[#D2B347] text-[#171815] border-[#D2B347] font-bold'
                  : 'bg-[#1c1d18] text-[#F4F1E8]/80 border-[#2d2f26] hover:border-[#D2B347]'
              }`}
            >
              {hs.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
