'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Check, Sparkles, ShoppingBag, Shuffle, RefreshCw } from 'lucide-react';
import { PRODUCTS, ACCESSORIES, Product } from '@/data/products';
import { useShop } from '@/context/ShopContext';

export default function BuildYourLook() {
  const { addToCart, openCart } = useShop();

  const tops = PRODUCTS.filter((p) => p.category === 'Shirts' || p.category === 'T-Shirts');
  const bottoms = PRODUCTS.filter((p) => p.category === 'Pants');
  const shoes = PRODUCTS.filter((p) => p.category === 'Shoes');
  const accessories = ACCESSORIES;

  // Active outfit selections
  const [selectedTop, setSelectedTop] = useState<Product>(tops[0]);
  const [selectedBottom, setSelectedBottom] = useState<Product>(bottoms[0]);
  const [selectedShoe, setSelectedShoe] = useState<Product>(shoes[0]);
  const [selectedAccessory, setSelectedAccessory] = useState(accessories[0]);

  const [activeTab, setActiveTab] = useState<'TOP' | 'BOTTOM' | 'SHOES' | 'ACCESSORIES'>('TOP');
  const [isAddingAll, setIsAddingAll] = useState(false);

  // Price calculation
  const subtotal =
    selectedTop.price +
    selectedBottom.price +
    selectedShoe.price +
    selectedAccessory.price;

  // Combo savings
  const bundleDiscount = 350;
  const bundleTotal = Math.max(0, subtotal - bundleDiscount);

  const handleShuffle = () => {
    setSelectedTop(tops[Math.floor(Math.random() * tops.length)]);
    setSelectedBottom(bottoms[Math.floor(Math.random() * bottoms.length)]);
    setSelectedShoe(shoes[Math.floor(Math.random() * shoes.length)]);
    setSelectedAccessory(accessories[Math.floor(Math.random() * accessories.length)]);
  };

  const handleAddBundleToCart = () => {
    setIsAddingAll(true);
    addToCart(selectedTop, selectedTop.sizes[0], selectedTop.colors[0]?.name, 1);
    addToCart(selectedBottom, selectedBottom.sizes[0], selectedBottom.colors[0]?.name, 1);
    addToCart(selectedShoe, selectedShoe.sizes[0], selectedShoe.colors[0]?.name, 1);
    setTimeout(() => {
      setIsAddingAll(false);
      openCart();
    }, 600);
  };

  return (
    <section className="py-24 bg-[#171815] border-t border-[#252620] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center space-x-2.5 mb-2.5">
              <span className="w-6 h-[2px] bg-[#D2B347]" />
              <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#D2B347]">
                INTERACTIVE FIT STYLIST
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-[#F4F1E8]">
              BUILD YOUR <span className="text-[#D2B347]">LOOK</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleShuffle}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-[#252620] hover:bg-[#D2B347] hover:text-[#171815] text-xs font-mono uppercase text-[#F4F1E8] transition-colors rounded border border-[#3b3d33]"
            >
              <Shuffle className="w-3.5 h-3.5" />
              <span>RANDOMIZE LOOK</span>
            </button>
          </div>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Product Selection Controls (7 cols) */}
          <div className="lg:col-span-7 bg-[#1c1d18] border border-[#2d2f26] p-6">
            {/* Category Slot Tabs */}
            <div className="grid grid-cols-4 gap-2 border-b border-[#2d2f26] pb-4 mb-6">
              {(['TOP', 'BOTTOM', 'SHOES', 'ACCESSORIES'] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`py-2.5 text-xs font-mono uppercase tracking-wider text-center transition-all ${
                    activeTab === tab
                      ? 'bg-[#D2B347] text-[#171815] font-bold shadow-sm'
                      : 'bg-[#252620] text-[#B7B5AC] hover:text-[#F4F1E8]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Product Choices Grid based on Active Tab */}
            <div className="min-h-[420px]">
              {activeTab === 'TOP' && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {tops.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => setSelectedTop(item)}
                      className={`relative p-2.5 bg-[#171815] border cursor-pointer transition-all ${
                        selectedTop.id === item.id
                          ? 'border-[#D2B347] ring-1 ring-[#D2B347]'
                          : 'border-[#2d2f26] hover:border-[#B7B5AC]'
                      }`}
                    >
                      <div className="relative aspect-square w-full bg-[#F4F1E8] mb-2 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                      <span className="text-[11px] font-semibold text-[#F4F1E8] line-clamp-1 block">
                        {item.name}
                      </span>
                      <span className="text-xs font-mono text-[#D2B347] font-bold">
                        ₹{item.price}
                      </span>
                      {selectedTop.id === item.id && (
                        <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#D2B347] text-[#171815] flex items-center justify-center">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'BOTTOM' && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {bottoms.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => setSelectedBottom(item)}
                      className={`relative p-2.5 bg-[#171815] border cursor-pointer transition-all ${
                        selectedBottom.id === item.id
                          ? 'border-[#D2B347] ring-1 ring-[#D2B347]'
                          : 'border-[#2d2f26] hover:border-[#B7B5AC]'
                      }`}
                    >
                      <div className="relative aspect-square w-full bg-[#F4F1E8] mb-2 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                      <span className="text-[11px] font-semibold text-[#F4F1E8] line-clamp-1 block">
                        {item.name}
                      </span>
                      <span className="text-xs font-mono text-[#D2B347] font-bold">
                        ₹{item.price}
                      </span>
                      {selectedBottom.id === item.id && (
                        <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#D2B347] text-[#171815] flex items-center justify-center">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'SHOES' && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {shoes.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => setSelectedShoe(item)}
                      className={`relative p-2.5 bg-[#171815] border cursor-pointer transition-all ${
                        selectedShoe.id === item.id
                          ? 'border-[#D2B347] ring-1 ring-[#D2B347]'
                          : 'border-[#2d2f26] hover:border-[#B7B5AC]'
                      }`}
                    >
                      <div className="relative aspect-square w-full bg-[#F4F1E8] mb-2 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                      <span className="text-[11px] font-semibold text-[#F4F1E8] line-clamp-1 block">
                        {item.name}
                      </span>
                      <span className="text-xs font-mono text-[#D2B347] font-bold">
                        ₹{item.price}
                      </span>
                      {selectedShoe.id === item.id && (
                        <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#D2B347] text-[#171815] flex items-center justify-center">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'ACCESSORIES' && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {accessories.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => setSelectedAccessory(item)}
                      className={`relative p-2.5 bg-[#171815] border cursor-pointer transition-all ${
                        selectedAccessory.id === item.id
                          ? 'border-[#D2B347] ring-1 ring-[#D2B347]'
                          : 'border-[#2d2f26] hover:border-[#B7B5AC]'
                      }`}
                    >
                      <div className="relative aspect-square w-full bg-[#F4F1E8] mb-2 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                      <span className="text-[11px] font-semibold text-[#F4F1E8] line-clamp-1 block">
                        {item.name}
                      </span>
                      <span className="text-xs font-mono text-[#D2B347] font-bold">
                        ₹{item.price}
                      </span>
                      {selectedAccessory.id === item.id && (
                        <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#D2B347] text-[#171815] flex items-center justify-center">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Assembled Look & Dynamic Price Calculator (5 cols) */}
          <div className="lg:col-span-5 bg-[#1c1d18] border border-[#2d2f26] p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#2d2f26] mb-5">
                <span className="text-xs font-mono uppercase tracking-widest text-[#B7B5AC]">
                  YOUR CURATED FIT
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 bg-[#252620] text-[#D2B347] rounded">
                  4-PIECE OUTFIT
                </span>
              </div>

              {/* Outfit Pieces Visual Stack */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {/* Top */}
                <div className="p-2.5 bg-[#171815] border border-[#2d2f26]">
                  <span className="text-[9px] font-mono uppercase text-[#D2B347] block mb-1">
                    TOP
                  </span>
                  <div className="relative h-24 bg-[#F4F1E8] mb-1.5 overflow-hidden">
                    <Image
                      src={selectedTop.image}
                      alt={selectedTop.name}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <span className="text-[11px] text-[#F4F1E8] font-medium line-clamp-1">
                    {selectedTop.name}
                  </span>
                  <span className="text-xs font-mono text-[#B7B5AC]">₹{selectedTop.price}</span>
                </div>

                {/* Bottom */}
                <div className="p-2.5 bg-[#171815] border border-[#2d2f26]">
                  <span className="text-[9px] font-mono uppercase text-[#D2B347] block mb-1">
                    BOTTOM
                  </span>
                  <div className="relative h-24 bg-[#F4F1E8] mb-1.5 overflow-hidden">
                    <Image
                      src={selectedBottom.image}
                      alt={selectedBottom.name}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <span className="text-[11px] text-[#F4F1E8] font-medium line-clamp-1">
                    {selectedBottom.name}
                  </span>
                  <span className="text-xs font-mono text-[#B7B5AC]">₹{selectedBottom.price}</span>
                </div>

                {/* Shoes */}
                <div className="p-2.5 bg-[#171815] border border-[#2d2f26]">
                  <span className="text-[9px] font-mono uppercase text-[#D2B347] block mb-1">
                    FOOTWEAR
                  </span>
                  <div className="relative h-24 bg-[#F4F1E8] mb-1.5 overflow-hidden">
                    <Image
                      src={selectedShoe.image}
                      alt={selectedShoe.name}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <span className="text-[11px] text-[#F4F1E8] font-medium line-clamp-1">
                    {selectedShoe.name}
                  </span>
                  <span className="text-xs font-mono text-[#B7B5AC]">₹{selectedShoe.price}</span>
                </div>

                {/* Accessory */}
                <div className="p-2.5 bg-[#171815] border border-[#2d2f26]">
                  <span className="text-[9px] font-mono uppercase text-[#D2B347] block mb-1">
                    ACCESSORY
                  </span>
                  <div className="relative h-24 bg-[#F4F1E8] mb-1.5 overflow-hidden">
                    <Image
                      src={selectedAccessory.image}
                      alt={selectedAccessory.name}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <span className="text-[11px] text-[#F4F1E8] font-medium line-clamp-1">
                    {selectedAccessory.name}
                  </span>
                  <span className="text-xs font-mono text-[#B7B5AC]">₹{selectedAccessory.price}</span>
                </div>
              </div>
            </div>

            {/* Calculations & CTA */}
            <div className="pt-4 border-t border-[#2d2f26]">
              <div className="space-y-1.5 text-xs font-mono mb-4">
                <div className="flex justify-between text-[#B7B5AC]">
                  <span>Item Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-[#D2B347]">
                  <span>Bundle Combo Savings</span>
                  <span>-₹{bundleDiscount}</span>
                </div>
                <div className="flex justify-between text-base font-bold text-[#F4F1E8] pt-2 border-t border-[#2d2f26]">
                  <span className="font-display tracking-wider">BUNDLE PRICE</span>
                  <span className="text-[#D2B347] font-display text-xl">₹{bundleTotal}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleAddBundleToCart}
                disabled={isAddingAll}
                className="w-full py-4 bg-[#D2B347] hover:bg-[#E5D48A] text-[#171815] font-display uppercase tracking-[0.18em] font-bold text-sm transition-all shadow-xl flex items-center justify-center space-x-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>{isAddingAll ? 'ADDING TO CART...' : 'SHOP THIS LOOK'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
