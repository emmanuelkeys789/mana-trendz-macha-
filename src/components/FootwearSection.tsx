'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShoppingBag, Eye, Heart, Sparkles, Check } from 'lucide-react';
import { PRODUCTS, Product } from '@/data/products';
import { useShop } from '@/context/ShopContext';

export default function FootwearSection() {
  const { addToCart, openProductModal, toggleWishlist, isInWishlist, setCategory } = useShop();
  const shoes = PRODUCTS.filter((p) => p.category === 'Shoes');

  const [activeSize, setActiveSize] = useState<{ [productId: string]: string }>({
    'white-sneakers': 'UK 8',
    'black-loafers': 'UK 8',
    'casual-sandals': 'UK 8',
    'panda-sneakers': 'UK 8',
  });

  const [addedMap, setAddedMap] = useState<{ [productId: string]: boolean }>({});

  const handleQuickAdd = (product: Product) => {
    const size = activeSize[product.id] || 'UK 8';
    addToCart(product, size, product.colors[0]?.name, 1);
    setAddedMap((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedMap((prev) => ({ ...prev, [product.id]: false }));
    }, 1500);
  };

  return (
    <section id="shoes" className="py-24 bg-[#11120e] text-[#F4F1E8] border-t border-[#252620] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center space-x-2.5 mb-2.5">
              <span className="w-6 h-[2px] bg-[#D2B347]" />
              <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#D2B347]">
                FOOTWEAR DROP • KUKATPALLY
              </span>
            </div>
            <h2 className="font-display text-5xl sm:text-7xl uppercase tracking-tight text-[#F4F1E8] leading-none">
              NEXT LEVEL <span className="text-[#D2B347]">COLLECTION</span>
            </h2>
          </div>

          {/* Prominent Offer Badge Callout */}
          <div className="p-4 sm:p-5 bg-[#1c1d18] border border-[#D2B347]/50 max-w-md flex items-center gap-4">
            <div className="w-12 h-12 bg-[#D2B347] text-[#171815] font-display font-black text-xl flex items-center justify-center flex-shrink-0">
              3X
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#D2B347] block">
                SPECIAL FOOTWEAR PROMO
              </span>
              <span className="font-display text-2xl uppercase tracking-wider text-[#F4F1E8]">
                3 PAIRS — ₹1000
              </span>
              <p className="text-[11px] text-[#B7B5AC]">
                Mix & match any sneakers, bit loafers, and dual-strap sandals.
              </p>
            </div>
          </div>
        </div>

        {/* Footwear Products Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {shoes.map((shoe) => {
            const wishlisted = isInWishlist(shoe.id);
            const isAdded = addedMap[shoe.id];

            return (
              <motion.div
                key={shoe.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5 }}
                className="group relative bg-[#171815] border border-[#2d2f26] hover:border-[#D2B347] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual Image Stage */}
                <div className="relative aspect-[4/3] w-full bg-[#F4F1E8] overflow-hidden">
                  <Image
                    src={shoe.image}
                    alt={shoe.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />

                  {/* Offer Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-0.5 text-[9px] font-mono font-bold bg-[#171815] text-[#D2B347] border border-[#D2B347]/40 uppercase">
                      3 PAIRS FOR ₹1000
                    </span>
                  </div>

                  {/* Wishlist Button */}
                  <button
                    type="button"
                    onClick={() => toggleWishlist(shoe.id)}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#171815]/70 hover:bg-[#171815] flex items-center justify-center transition-colors"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        wishlisted ? 'fill-[#D2B347] text-[#D2B347]' : 'text-[#F4F1E8]'
                      }`}
                    />
                  </button>
                </div>

                {/* Details */}
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#B7B5AC] uppercase mb-1">
                      <span>{shoe.fit}</span>
                      <span className="text-[#E5D48A]">★ {shoe.rating}</span>
                    </div>

                    <h3 className="font-semibold text-sm text-[#F4F1E8] group-hover:text-[#D2B347] transition-colors mb-2">
                      {shoe.name}
                    </h3>

                    <div className="flex items-baseline space-x-2 mb-4">
                      <span className="text-base font-bold text-[#F4F1E8]">₹{shoe.price}</span>
                      <span className="text-xs text-[#B7B5AC] line-through">₹{shoe.originalPrice}</span>
                      <span className="text-[10px] font-mono text-[#D2B347] ml-auto">
                        ₹333 in combo
                      </span>
                    </div>

                    {/* Size Selector Buttons */}
                    <div className="mb-4">
                      <span className="text-[10px] font-mono uppercase text-[#B7B5AC] block mb-1.5">
                        SELECT SIZE:
                      </span>
                      <div className="flex gap-1.5">
                        {shoe.sizes.map((s) => (
                          <button
                            key={s}
                            type="button"
                            onClick={() =>
                              setActiveSize((prev) => ({ ...prev, [shoe.id]: s }))
                            }
                            className={`px-2 py-1 text-[11px] font-mono transition-colors border ${
                              (activeSize[shoe.id] || 'UK 8') === s
                                ? 'bg-[#D2B347] text-[#171815] border-[#D2B347] font-bold'
                                : 'bg-[#252620] text-[#F4F1E8] border-[#3b3d33] hover:border-[#B7B5AC]'
                            }`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-2 border-t border-[#2d2f26]">
                    <button
                      type="button"
                      onClick={() => handleQuickAdd(shoe)}
                      className={`flex-1 py-2.5 px-3 text-xs font-display uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-1.5 ${
                        isAdded
                          ? 'bg-[#252620] text-[#D2B347]'
                          : 'bg-[#D2B347] hover:bg-[#E5D48A] text-[#171815]'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>ADDED</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>ADD PAIR</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => openProductModal(shoe)}
                      className="px-3 py-2.5 bg-[#252620] hover:bg-[#3b3d33] text-[#F4F1E8] transition-colors"
                      title="View Details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
