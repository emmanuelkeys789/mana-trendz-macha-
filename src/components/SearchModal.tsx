'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Search, X, Sparkles, ArrowRight } from 'lucide-react';
import { PRODUCTS, Product } from '@/data/products';
import { useShop } from '@/context/ShopContext';

export default function SearchModal() {
  const { isSearchOpen, closeSearch, openProductModal, setCategory, setVibe } = useShop();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when opened
  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  // Keyboard shortcut listener (Cmd+K or Ctrl+K, Escape)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // handled in navbar
      }
      if (e.key === 'Escape' && isSearchOpen) {
        closeSearch();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, closeSearch]);

  if (!isSearchOpen) return null;

  const results = query.trim()
    ? PRODUCTS.filter((p) => {
        const q = query.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.vibes.some((v) => v.toLowerCase().includes(q)) ||
          p.description.toLowerCase().includes(q)
        );
      })
    : [];

  const handleSelectProduct = (product: Product) => {
    closeSearch();
    openProductModal(product);
  };

  const handleQuickTag = (type: 'cat' | 'vibe', val: string) => {
    closeSearch();
    if (type === 'cat') setCategory(val);
    if (type === 'vibe') setVibe(val);
    document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-start justify-center pt-20 p-4 sm:p-6">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeSearch}
        className="fixed inset-0 bg-[#171815]/90 backdrop-blur-md transition-opacity"
      />

      {/* Search Container */}
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.98 }}
        className="relative w-full max-w-2xl bg-[#1c1d18] border border-[#2d2f26] shadow-2xl z-10 overflow-hidden text-[#F4F1E8]"
      >
        {/* Search Bar Input */}
        <div className="p-4 sm:p-5 border-b border-[#2d2f26] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#D2B347]" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search shirts, oversized tees, baggy jeans, sneakers..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm sm:text-base font-sans placeholder-[#7e8075] focus:outline-none text-[#F4F1E8]"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="text-[#B7B5AC] hover:text-[#F4F1E8] p-1"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <span className="text-[10px] font-mono text-[#B7B5AC] border border-[#3b3d33] px-1.5 py-0.5 rounded">
              ESC
            </span>
          )}
        </div>

        {/* Quick Tag Pills */}
        <div className="px-5 py-3 bg-[#171815] border-b border-[#2d2f26] flex items-center gap-2 overflow-x-auto no-scrollbar text-xs font-mono">
          <span className="text-[#7e8075] uppercase text-[10px] mr-1">POPULAR:</span>
          {['Shirts', 'Pants', 'Shoes', 'Street', 'Oversized', 'Minimal'].map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => handleQuickTag(tag === 'Shirts' || tag === 'Pants' || tag === 'Shoes' ? 'cat' : 'vibe', tag)}
              className="px-2.5 py-1 bg-[#252620] hover:bg-[#D2B347] hover:text-[#171815] text-[#F4F1E8] transition-colors rounded text-[11px]"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results Area */}
        <div className="max-h-96 overflow-y-auto p-4 sm:p-5">
          {query.trim() ? (
            results.length > 0 ? (
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-[#B7B5AC] uppercase block mb-2">
                  FOUND {results.length} MATCHING PIECES
                </span>
                {results.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => handleSelectProduct(product)}
                    className="p-3 bg-[#171815] hover:bg-[#252620] border border-[#2d2f26] hover:border-[#D2B347] cursor-pointer flex items-center justify-between transition-colors gap-3 group"
                  >
                    <div className="flex items-center space-x-3 min-w-0">
                      <div className="relative w-12 h-14 bg-[#F4F1E8] flex-shrink-0 overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xs font-semibold text-[#F4F1E8] group-hover:text-[#D2B347] truncate">
                          {product.name}
                        </h4>
                        <div className="flex items-center space-x-2 text-[11px] font-mono text-[#B7B5AC]">
                          <span>{product.category}</span>
                          <span>•</span>
                          <span className="text-[#D2B347] font-bold">₹{product.price}</span>
                          {product.offerTag && (
                            <span className="text-[10px] px-1 bg-[#252620] text-[#D2B347] border border-[#3b3d33]">
                              {product.offerTag}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <ArrowRight className="w-4 h-4 text-[#7e8075] group-hover:text-[#D2B347] transition-colors flex-shrink-0" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <p className="text-sm text-[#F4F1E8] font-semibold mb-1">No products found for &quot;{query}&quot;</p>
                <p className="text-xs text-[#B7B5AC]">Try searching for &quot;checked&quot;, &quot;baggy&quot;, &quot;linen&quot;, or &quot;shoes&quot;.</p>
              </div>
            )
          ) : (
            <div className="text-center py-8 text-xs text-[#7e8075] font-mono">
              Type to instantly search through all store inventory and combo offers.
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
