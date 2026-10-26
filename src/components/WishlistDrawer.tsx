'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { X, Heart, Trash2, ShoppingBag } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { useShop } from '@/context/ShopContext';

export default function WishlistDrawer() {
  const { wishlist, isWishlistOpen, closeWishlist, toggleWishlist, addToCart, openProductModal } = useShop();

  if (!isWishlistOpen) return null;

  const savedProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeWishlist}
        className="absolute inset-0 bg-[#171815]/80 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 28, stiffness: 260 }}
          className="w-screen max-w-md bg-[#171815] border-l border-[#252620] shadow-2xl flex flex-col justify-between text-[#F4F1E8]"
        >
          {/* Header */}
          <div className="p-6 border-b border-[#252620] flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <Heart className="w-5 h-5 text-[#D2B347]" />
              <h3 className="font-display text-xl uppercase tracking-wider text-[#F4F1E8]">
                SAVED FITS ({wishlist.length})
              </h3>
            </div>
            <button
              type="button"
              onClick={closeWishlist}
              aria-label="Close wishlist"
              className="p-1.5 text-[#B7B5AC] hover:text-[#F4F1E8] hover:bg-[#252620] rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {savedProducts.length === 0 ? (
              <div className="text-center py-20">
                <Heart className="w-12 h-12 text-[#2d2f26] mx-auto mb-3" />
                <p className="font-display text-xl uppercase tracking-wider text-[#F4F1E8] mb-1">
                  Your wishlist is empty
                </p>
                <p className="text-xs text-[#B7B5AC] mb-6">
                  Save pieces you love to build outfits later.
                </p>
                <button
                  type="button"
                  onClick={closeWishlist}
                  className="px-6 py-2.5 bg-[#D2B347] text-[#171815] font-display text-xs uppercase tracking-widest font-bold hover:bg-[#E5D48A] transition-colors"
                >
                  DISCOVER CATALOG
                </button>
              </div>
            ) : (
              savedProducts.map((product) => (
                <div
                  key={product.id}
                  className="p-3.5 bg-[#1c1d18] border border-[#2d2f26] flex gap-3.5 items-center"
                >
                  <div
                    onClick={() => {
                      closeWishlist();
                      openProductModal(product);
                    }}
                    className="relative w-16 h-20 bg-[#F4F1E8] flex-shrink-0 overflow-hidden cursor-pointer border border-[#2d2f26]"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-1"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4
                      onClick={() => {
                        closeWishlist();
                        openProductModal(product);
                      }}
                      className="text-xs font-semibold text-[#F4F1E8] hover:text-[#D2B347] truncate cursor-pointer"
                    >
                      {product.name}
                    </h4>

                    <div className="flex items-baseline space-x-2 my-1">
                      <span className="text-sm font-bold text-[#D2B347] font-mono">
                        ₹{product.price}
                      </span>
                      <span className="text-xs text-[#B7B5AC] line-through">
                        ₹{product.originalPrice}
                      </span>
                    </div>

                    <div className="flex gap-2 mt-2">
                      <button
                        type="button"
                        onClick={() => addToCart(product)}
                        className="flex-1 py-1.5 px-2 bg-[#D2B347] text-[#171815] text-[11px] font-display uppercase tracking-wider font-bold hover:bg-[#E5D48A] transition-colors flex items-center justify-center gap-1"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        <span>MOVE TO CART</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => toggleWishlist(product.id)}
                        className="p-1.5 bg-[#252620] hover:bg-red-950 text-[#B7B5AC] hover:text-red-400 transition-colors"
                        title="Remove"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
