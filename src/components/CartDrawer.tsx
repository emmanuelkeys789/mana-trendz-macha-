'use client';

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Tag, ShieldCheck } from 'lucide-react';
import { useShop } from '@/context/ShopContext';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    cartTotal,
    cartSavings,
    cartCount,
    openCheckout
  } = useShop();

  if (!isCartOpen) return null;

  // Combo calculation helpers
  const shirtCount = cart.filter(i => i.product.category === 'Shirts').reduce((a, b) => a + b.quantity, 0);
  const pantsCount = cart.filter(i => i.product.category === 'Pants').reduce((a, b) => a + b.quantity, 0);
  const shoesCount = cart.filter(i => i.product.category === 'Shoes').reduce((a, b) => a + b.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeCart}
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
              <ShoppingBag className="w-5 h-5 text-[#D2B347]" />
              <h3 className="font-display text-xl uppercase tracking-wider text-[#F4F1E8]">
                YOUR CART ({cartCount})
              </h3>
            </div>
            <button
              type="button"
              onClick={closeCart}
              aria-label="Close cart"
              className="p-1.5 text-[#B7B5AC] hover:text-[#F4F1E8] hover:bg-[#252620] rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Combo Offer Progress Bar */}
          <div className="bg-[#1c1d18] px-6 py-3 border-b border-[#2d2f26] text-xs font-mono">
            {shirtCount > 0 && shirtCount < 3 && (
              <div className="flex items-center space-x-2 text-[#E5D48A]">
                <Tag className="w-3.5 h-3.5 text-[#D2B347]" />
                <span>Add {3 - shirtCount} more shirt{3 - shirtCount > 1 ? 's' : ''} to claim 3 for ₹1000!</span>
              </div>
            )}
            {pantsCount > 0 && pantsCount < 3 && (
              <div className="flex items-center space-x-2 text-[#E5D48A]">
                <Tag className="w-3.5 h-3.5 text-[#D2B347]" />
                <span>Add {3 - pantsCount} more pant{3 - pantsCount > 1 ? 's' : ''} to claim 3 for ₹1200!</span>
              </div>
            )}
            {shoesCount > 0 && shoesCount < 3 && (
              <div className="flex items-center space-x-2 text-[#E5D48A]">
                <Tag className="w-3.5 h-3.5 text-[#D2B347]" />
                <span>Add {3 - shoesCount} more pair{3 - shoesCount > 1 ? 's' : ''} to claim 3 pairs for ₹1000!</span>
              </div>
            )}
            {shirtCount === 0 && pantsCount === 0 && shoesCount === 0 && (
              <span className="text-[#B7B5AC]">
                Eligible for in-store combos: Shirts 3 for ₹1000 • Pants 3 for ₹1200
              </span>
            )}
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16">
                <ShoppingBag className="w-12 h-12 text-[#2d2f26] mx-auto mb-3" />
                <p className="font-display text-xl uppercase tracking-wider text-[#F4F1E8] mb-1">
                  Your cart is empty
                </p>
                <p className="text-xs text-[#B7B5AC] mb-6">
                  Explore new drops and build your signature rotation.
                </p>
                <button
                  type="button"
                  onClick={closeCart}
                  className="px-6 py-2.5 bg-[#D2B347] text-[#171815] font-display text-xs uppercase tracking-widest font-bold hover:bg-[#E5D48A] transition-colors"
                >
                  START BROWSING
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`}
                  className="p-3.5 bg-[#1c1d18] border border-[#2d2f26] flex gap-3.5 items-start"
                >
                  {/* Thumbnail */}
                  <div className="relative w-16 h-20 bg-[#F4F1E8] flex-shrink-0 overflow-hidden border border-[#2d2f26]">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-contain p-1"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-xs font-semibold text-[#F4F1E8] truncate">
                        {item.product.name}
                      </h4>
                      <button
                        type="button"
                        onClick={() =>
                          removeFromCart(item.product.id, item.selectedSize, item.selectedColor)
                        }
                        className="text-[#7e8075] hover:text-red-400 p-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="text-[11px] font-mono text-[#B7B5AC] space-x-2 my-1">
                      <span>Size: {item.selectedSize}</span>
                      <span>•</span>
                      <span>Color: {item.selectedColor}</span>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#252620]">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-[#3b3d33] bg-[#171815]">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.product.id, item.selectedSize, item.selectedColor, -1)
                          }
                          className="px-2 py-0.5 text-xs hover:bg-[#252620] text-[#B7B5AC] hover:text-[#F4F1E8]"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 py-0.5 text-xs font-mono font-bold">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.product.id, item.selectedSize, item.selectedColor, 1)
                          }
                          className="px-2 py-0.5 text-xs hover:bg-[#252620] text-[#B7B5AC] hover:text-[#F4F1E8]"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Price */}
                      <span className="text-sm font-bold text-[#D2B347] font-mono">
                        ₹{item.product.price * item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Action */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-[#252620] bg-[#171815] space-y-4">
              <div className="space-y-1.5 text-xs font-mono">
                <div className="flex justify-between text-[#B7B5AC]">
                  <span>Subtotal</span>
                  <span>₹{cartTotal + cartSavings}</span>
                </div>
                {cartSavings > 0 && (
                  <div className="flex justify-between text-[#D2B347]">
                    <span>Combo Savings Applied</span>
                    <span>-₹{cartSavings}</span>
                  </div>
                )}
                <div className="flex justify-between text-base font-bold text-[#F4F1E8] pt-2 border-t border-[#252620]">
                  <span className="font-display tracking-wider">TOTAL ESTIMATE</span>
                  <span className="text-[#D2B347] font-display text-xl">₹{cartTotal}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={openCheckout}
                className="w-full py-4 bg-[#D2B347] hover:bg-[#E5D48A] text-[#171815] font-display uppercase tracking-[0.18em] font-bold text-sm transition-all shadow-xl flex items-center justify-center space-x-2"
              >
                <span>PROCEED TO DEMO CHECKOUT</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center space-x-2 text-[10px] font-mono text-[#7e8075]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D2B347]" />
                <span>DEMO ORDER • PAY IN-STORE OR CASH ON PICKUP</span>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
