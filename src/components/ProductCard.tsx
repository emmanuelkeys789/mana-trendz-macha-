'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Heart, Plus, Eye, Check } from 'lucide-react';
import { Product } from '@/data/products';
import { useShop } from '@/context/ShopContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || 'Default');
  const [isHovered, setIsHovered] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const { addToCart, toggleWishlist, isInWishlist, openProductModal } = useShop();
  const wishlisted = isInWishlist(product.id);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, product.sizes[0], selectedColor, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1400);
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  return (
    <div
      onClick={() => openProductModal(product)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col bg-[#1c1d18] border border-[#2d2f26] transition-all duration-300 hover:border-[#D2B347] cursor-pointer"
    >
      {/* Product Image Stage (Muted Cream background) */}
      <div className="relative aspect-[4/5] w-full bg-[#F4F1E8] overflow-hidden">
        {/* Main Product Image */}
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className={`object-contain object-center p-3 transition-opacity duration-500 ease-in-out ${
            isHovered && product.hoverImage ? 'opacity-0' : 'opacity-100'
          }`}
        />

        {/* Hover Alternate Image */}
        {product.hoverImage && (
          <Image
            src={product.hoverImage}
            alt={`${product.name} alternate view`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className={`object-contain object-center p-3 transition-opacity duration-500 ease-in-out absolute inset-0 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Offer Tag Badge */}
        {product.offerTag && (
          <div className="absolute top-3 left-3 z-10">
            <span className="px-2.5 py-1 text-[10px] font-mono font-bold tracking-wider uppercase bg-[#171815] text-[#D2B347] border border-[#D2B347]/40 shadow-sm">
              {product.offerTag}
            </span>
          </div>
        )}

        {/* New Drop Badge */}
        {product.isNewDrop && !product.offerTag && (
          <div className="absolute top-3 left-3 z-10">
            <span className="px-2 py-0.5 text-[9px] font-mono uppercase bg-[#D2B347] text-[#171815] font-bold">
              NEW DROP
            </span>
          </div>
        )}

        {/* Wishlist Button */}
        <button
          type="button"
          onClick={handleWishlistToggle}
          aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-[#171815]/70 hover:bg-[#171815] backdrop-blur-sm border border-[#3b3d33] flex items-center justify-center transition-colors group/btn"
        >
          <Heart
            className={`w-4 h-4 transition-transform group-hover/btn:scale-110 ${
              wishlisted ? 'fill-[#D2B347] text-[#D2B347]' : 'text-[#F4F1E8]'
            }`}
          />
        </button>

        {/* Quick Add Overlay on hover (desktop) */}
        <div className="absolute bottom-3 left-3 right-3 z-10 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <button
            type="button"
            onClick={handleQuickAdd}
            className={`flex-1 py-2.5 px-3 text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-1.5 transition-all shadow-md ${
              justAdded
                ? 'bg-[#252620] text-[#D2B347]'
                : 'bg-[#171815] text-[#F4F1E8] hover:bg-[#D2B347] hover:text-[#171815]'
            }`}
          >
            {justAdded ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>ADDED!</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>QUICK ADD</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              openProductModal(product);
            }}
            className="w-10 py-2.5 bg-[#252620] hover:bg-[#D2B347] text-[#F4F1E8] hover:text-[#171815] flex items-center justify-center transition-colors shadow-md"
            title="View Details"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Product Information Body */}
      <div className="p-4 flex flex-col flex-grow justify-between bg-[#1c1d18]">
        <div>
          {/* Category & Vibe tags */}
          <div className="flex items-center justify-between text-[11px] text-[#B7B5AC] font-mono uppercase mb-1">
            <span>{product.category}</span>
            <span className="text-[#D2B347]">{product.vibes[0]}</span>
          </div>

          {/* Product Name */}
          <h3 className="text-sm font-semibold text-[#F4F1E8] group-hover:text-[#D2B347] transition-colors line-clamp-1 mb-2">
            {product.name}
          </h3>
        </div>

        <div>
          {/* Color Swatches */}
          <div className="flex items-center space-x-1.5 mb-3">
            {product.colors.map((color) => (
              <button
                key={color.name}
                type="button"
                title={color.name}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedColor(color.name);
                }}
                className={`w-3.5 h-3.5 rounded-full border transition-all ${
                  selectedColor === color.name
                    ? 'ring-1 ring-[#D2B347] scale-110 border-[#171815]'
                    : 'border-white/20 opacity-70 hover:opacity-100'
                }`}
                style={{ backgroundColor: color.hex }}
              />
            ))}
            <span className="text-[10px] text-[#B7B5AC] font-mono ml-1">
              {product.sizes.length} sizes
            </span>
          </div>

          {/* Price & Rating */}
          <div className="flex items-baseline justify-between pt-2 border-t border-[#2d2f26]">
            <div className="flex items-baseline space-x-2">
              <span className="text-base font-bold text-[#F4F1E8] tracking-tight">
                ₹{product.price}
              </span>
              <span className="text-xs text-[#B7B5AC] line-through">
                ₹{product.originalPrice}
              </span>
            </div>

            <span className="text-[10px] text-[#E5D48A] font-mono">
              ★ {product.rating}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
