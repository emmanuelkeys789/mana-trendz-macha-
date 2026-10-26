'use client';

import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, SlidersHorizontal, RotateCcw, Sparkles } from 'lucide-react';
import { PRODUCTS, Product } from '@/data/products';
import ProductCard from './ProductCard';
import { useShop } from '@/context/ShopContext';

export default function ProductGrid() {
  const {
    filters,
    setCategory,
    setVibe,
    setOfferTag,
    setSortBy,
    resetFilters
  } = useShop();

  const categories = ['All', 'Shirts', 'T-Shirts', 'Pants', 'Shoes'];
  const vibes = ['All', 'Street', 'Minimal', 'Date Night', 'College', 'Weekend', 'Festive', 'Oversized'];

  // Filtered & Sorted products
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Category filter
    if (filters.category && filters.category !== 'All') {
      result = result.filter(p => p.category.toLowerCase() === filters.category.toLowerCase());
    }

    // Vibe filter
    if (filters.vibe && filters.vibe !== 'All') {
      result = result.filter(p => p.vibes.some(v => v.toLowerCase() === filters.vibe.toLowerCase()));
    }

    // Offer tag filter
    if (filters.offerTag) {
      result = result.filter(p => p.offerTag === filters.offerTag);
    }

    // Search query filter
    if (filters.searchQuery) {
      const q = filters.searchQuery.toLowerCase();
      result = result.filter(
        p =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.vibes.some(v => v.toLowerCase().includes(q)) ||
          p.description.toLowerCase().includes(q)
      );
    }

    // Sort
    if (filters.sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else {
      // featured
      result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }, [filters]);

  const isFiltered =
    filters.category !== 'All' ||
    filters.vibe !== 'All' ||
    filters.offerTag !== '' ||
    filters.searchQuery !== '';

  return (
    <section id="shop" className="py-24 bg-[#171815] text-[#F4F1E8] border-t border-[#252620]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div id="new-drops" className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center space-x-2.5 mb-2.5">
              <span className="w-6 h-[2px] bg-[#D2B347]" />
              <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#D2B347]">
                READY TO WEAR • SEASON 26
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-[#F4F1E8]">
              NEW <span className="text-[#D2B347]">DROPS</span> & CATALOG
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase text-[#B7B5AC]">
              SHOWING {filteredProducts.length} DESIGNS
            </span>
            {isFiltered && (
              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-mono text-[#D2B347] bg-[#252620] hover:bg-[#D2B347] hover:text-[#171815] transition-colors rounded"
              >
                <RotateCcw className="w-3 h-3" />
                <span>RESET FILTERS</span>
              </button>
            )}
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-[#1c1d18] border border-[#2d2f26] p-4 sm:p-5 mb-10 space-y-4">
          {/* Categories Tab Bar */}
          <div className="flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-[#2d2f26]">
            <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar py-1">
              <span className="text-xs font-mono uppercase text-[#B7B5AC] mr-2 hidden sm:inline">
                CATEGORY:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap ${
                    filters.category === cat
                      ? 'bg-[#D2B347] text-[#171815] font-bold shadow-sm'
                      : 'bg-[#252620] text-[#F4F1E8]/80 hover:text-[#D2B347] hover:bg-[#2e3028]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center space-x-2">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#B7B5AC]" />
              <select
                aria-label="Sort products"
                value={filters.sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#252620] text-xs font-mono text-[#F4F1E8] px-3 py-1.5 border border-[#3b3d33] focus:outline-none focus:border-[#D2B347] uppercase cursor-pointer"
              >
                <option value="featured">SORT: FEATURED</option>
                <option value="price-asc">PRICE: LOW TO HIGH</option>
                <option value="price-desc">PRICE: HIGH TO LOW</option>
              </select>
            </div>
          </div>

          {/* Vibes Sub-filter Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar pt-1">
            <span className="text-[11px] font-mono uppercase text-[#B7B5AC] mr-2 hidden md:inline">
              VIBE FILTER:
            </span>
            {vibes.map((vibe) => (
              <button
                key={vibe}
                type="button"
                onClick={() => setVibe(vibe)}
                className={`px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider transition-all whitespace-nowrap rounded ${
                  filters.vibe === vibe
                    ? 'border border-[#D2B347] text-[#D2B347] bg-[#D2B347]/10'
                    : 'text-[#B7B5AC] hover:text-[#F4F1E8] border border-transparent'
                }`}
              >
                {vibe}
              </button>
            ))}
          </div>

          {/* Active Offer Filter Notice */}
          {filters.offerTag && (
            <div className="pt-2 flex items-center justify-between text-xs font-mono bg-[#D2B347]/10 border border-[#D2B347]/30 px-3 py-2 text-[#D2B347]">
              <span>Active Combo Filter: <strong>{filters.offerTag}</strong></span>
              <button
                type="button"
                onClick={() => setOfferTag('')}
                className="hover:underline text-[11px] uppercase"
              >
                Clear Combo Filter ✕
              </button>
            </div>
          )}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            <AnimatePresence>
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center py-20 bg-[#1c1d18] border border-[#2d2f26] p-8">
            <Sparkles className="w-8 h-8 text-[#D2B347] mx-auto mb-3" />
            <h3 className="font-display text-2xl uppercase text-[#F4F1E8] mb-2">No matching fits found</h3>
            <p className="text-sm text-[#B7B5AC] max-w-md mx-auto mb-6">
              Try adjusting your category or vibe filter to discover the full range of menswear available in our Kukatpally store.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="px-6 py-2.5 bg-[#D2B347] text-[#171815] font-display uppercase tracking-widest text-xs font-bold hover:bg-[#E5D48A] transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
