'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { X, Heart, ShoppingBag, Check, ShieldCheck, Ruler, Sparkles, MapPin } from 'lucide-react';
import { useShop } from '@/context/ShopContext';

export default function ProductDetailModal() {
  const { selectedProduct, closeProductModal, addToCart, toggleWishlist, isInWishlist } = useShop();

  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [addedSuccess, setAddedSuccess] = useState(false);

  if (!selectedProduct) return null;

  const currentSize = selectedSize || selectedProduct.sizes[0] || 'M';
  const currentColor = selectedColor || selectedProduct.colors[0]?.name || 'Default';
  const wishlisted = isInWishlist(selectedProduct.id);

  const images = [selectedProduct.image];
  if (selectedProduct.hoverImage) images.push(selectedProduct.hoverImage);

  const handleAddToCart = () => {
    addToCart(selectedProduct, currentSize, currentColor, quantity);
    setAddedSuccess(true);
    setTimeout(() => {
      setAddedSuccess(false);
      closeProductModal();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeProductModal}
        className="fixed inset-0 bg-[#171815]/85 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-4xl bg-[#171815] border border-[#2d2f26] shadow-2xl z-10 overflow-hidden text-[#F4F1E8]"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={closeProductModal}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 p-2 bg-[#252620] hover:bg-[#D2B347] hover:text-[#171815] rounded-full transition-colors text-[#F4F1E8]"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 max-h-[90vh] overflow-y-auto">
          {/* Left: Product Images Gallery */}
          <div className="bg-[#1c1d18] p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#2d2f26]">
            {/* Main Stage Image */}
            <div className="relative aspect-[4/5] w-full bg-[#F4F1E8] overflow-hidden mb-4 border border-[#2d2f26]">
              <Image
                src={images[activeImageIndex] || selectedProduct.image}
                alt={selectedProduct.name}
                fill
                priority
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {selectedProduct.offerTag && (
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-[#171815] text-[#D2B347] font-mono text-xs font-bold border border-[#D2B347]/40 uppercase">
                    {selectedProduct.offerTag}
                  </span>
                </div>
              )}
            </div>

            {/* Thumbnail switcher if multiple images */}
            {images.length > 1 && (
              <div className="flex gap-2 justify-center">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-14 h-16 bg-[#F4F1E8] border transition-all ${
                      activeImageIndex === idx
                        ? 'border-[#D2B347] ring-1 ring-[#D2B347]'
                        : 'border-[#2d2f26] opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={img}
                      alt="Thumbnail"
                      fill
                      className="object-contain p-1"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Details & Controls */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              {/* Category & Vibe */}
              <div className="flex items-center space-x-2 text-xs font-mono uppercase text-[#B7B5AC] mb-2">
                <span>{selectedProduct.category}</span>
                <span>•</span>
                <span className="text-[#D2B347]">{selectedProduct.vibes.join(', ')}</span>
              </div>

              {/* Title */}
              <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[#F4F1E8] mb-3">
                {selectedProduct.name}
              </h2>

              {/* Price */}
              <div className="flex items-baseline space-x-3 mb-4">
                <span className="font-display text-3xl font-bold text-[#D2B347]">
                  ₹{selectedProduct.price}
                </span>
                <span className="text-sm font-mono text-[#B7B5AC] line-through">
                  ₹{selectedProduct.originalPrice}
                </span>
                <span className="text-xs font-mono text-[#E5D48A] bg-[#252620] px-2 py-0.5 rounded">
                  ★ {selectedProduct.rating} ({selectedProduct.reviewCount} reviews)
                </span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#B7B5AC] leading-relaxed mb-6">
                {selectedProduct.description}
              </p>

              {/* Color Selection */}
              <div className="mb-5">
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="text-[#B7B5AC]">COLOR: <strong className="text-[#F4F1E8]">{currentColor}</strong></span>
                </div>
                <div className="flex gap-2">
                  {selectedProduct.colors.map((color) => (
                    <button
                      key={color.name}
                      type="button"
                      onClick={() => setSelectedColor(color.name)}
                      className={`px-3 py-1.5 text-xs font-mono flex items-center space-x-2 border transition-all ${
                        currentColor === color.name
                          ? 'border-[#D2B347] bg-[#252620] text-[#D2B347]'
                          : 'border-[#3b3d33] bg-[#171815] text-[#B7B5AC] hover:border-[#F4F1E8]'
                      }`}
                    >
                      <span
                        className="w-3 h-3 rounded-full border border-white/20"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span>{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="text-[#B7B5AC]">SIZE: <strong className="text-[#F4F1E8]">{currentSize}</strong></span>
                  <button
                    type="button"
                    onClick={() => setShowSizeGuide(!showSizeGuide)}
                    className="text-[#D2B347] hover:underline flex items-center gap-1"
                  >
                    <Ruler className="w-3.5 h-3.5" />
                    <span>Size Guide</span>
                  </button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedProduct.sizes.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSelectedSize(s)}
                      className={`min-w-10 px-3 py-2 text-xs font-mono font-bold transition-all border ${
                        currentSize === s
                          ? 'bg-[#D2B347] text-[#171815] border-[#D2B347]'
                          : 'bg-[#252620] text-[#F4F1E8] border-[#3b3d33] hover:border-[#D2B347]'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>

                {showSizeGuide && (
                  <div className="mt-3 p-3 bg-[#252620] border border-[#3b3d33] text-[11px] font-mono text-[#B7B5AC] space-y-1">
                    <p>• S: Chest 38&quot; | Length 28&quot;</p>
                    <p>• M: Chest 40&quot; | Length 29&quot;</p>
                    <p>• L: Chest 42&quot; | Length 30&quot;</p>
                    <p>• XL: Chest 44&quot; | Length 31&quot;</p>
                    <p>• Pants: Waist matches tagged inches (e.g. 32 = 32&quot; waist)</p>
                  </div>
                )}
              </div>

              {/* Product Specifications bullets */}
              <div className="border-t border-[#2d2f26] pt-4 space-y-1.5 text-xs text-[#B7B5AC] font-mono">
                <p><strong>Fabric:</strong> {selectedProduct.fabric}</p>
                <p><strong>Fit:</strong> {selectedProduct.fit}</p>
                <div className="flex items-center text-[#D2B347] pt-1">
                  <MapPin className="w-3.5 h-3.5 mr-1" />
                  <span>Available for instant try-on at Kukatpally Flagship</span>
                </div>
              </div>
            </div>

            {/* Actions: Add to Cart & Wishlist */}
            <div className="pt-4 border-t border-[#2d2f26] space-y-3">
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="flex-1 py-4 bg-[#D2B347] hover:bg-[#E5D48A] text-[#171815] font-display uppercase tracking-[0.18em] font-bold text-sm transition-all shadow-xl flex items-center justify-center space-x-2"
                >
                  {addedSuccess ? (
                    <>
                      <Check className="w-4 h-4 stroke-[3]" />
                      <span>ADDED TO CART</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>ADD TO BAG • ₹{selectedProduct.price}</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => toggleWishlist(selectedProduct.id)}
                  aria-label="Toggle wishlist"
                  className="p-4 bg-[#252620] hover:bg-[#3b3d33] border border-[#3b3d33] text-[#F4F1E8] transition-colors"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      wishlisted ? 'fill-[#D2B347] text-[#D2B347]' : 'text-[#F4F1E8]'
                    }`}
                  />
                </button>
              </div>

              <div className="text-center text-[10px] font-mono text-[#7e8075]">
                Qualifies for store combo discounts upon checkout
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
