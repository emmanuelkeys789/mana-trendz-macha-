'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ShieldAlert, Sparkles, MapPin, Phone, ShoppingBag, ArrowRight } from 'lucide-react';
import { useShop } from '@/context/ShopContext';

export default function CheckoutModal() {
  const { isCheckoutOpen, closeCheckout, cart, cartTotal, cartSavings, clearCart } = useShop();

  const [step, setStep] = useState<'form' | 'success'>('form');
  const [name, setName] = useState('Rahul Varma');
  const [phone, setPhone] = useState('+91 98490 12345');
  const [pickupType, setPickupType] = useState<'store' | 'delivery'>('store');
  const [orderId, setOrderId] = useState('');

  if (!isCheckoutOpen) return null;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const fakeId = 'MTM-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(fakeId);
    setStep('success');
    clearCart();
  };

  const handleFinish = () => {
    setStep('form');
    closeCheckout();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeCheckout}
        className="fixed inset-0 bg-[#171815]/90 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-xl bg-[#1c1d18] border border-[#2d2f26] shadow-2xl z-10 overflow-hidden text-[#F4F1E8]"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={closeCheckout}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 p-2 text-[#B7B5AC] hover:text-[#F4F1E8] hover:bg-[#252620] rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <div className="p-6 sm:p-8 space-y-6">
            {/* Header & Demo Disclaimer */}
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono uppercase text-[#D2B347] mb-1">
                <Sparkles className="w-4 h-4" />
                <span>FRONTEND DEMO CHECKOUT</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[#F4F1E8]">
                RESERVE YOUR <span className="text-[#D2B347]">FIT</span>
              </h3>

              {/* Prominent Demo Notice */}
              <div className="mt-3 p-3 bg-[#252620] border border-[#D2B347]/30 flex items-start space-x-2.5 text-xs text-[#E5D48A]">
                <ShieldAlert className="w-4 h-4 text-[#D2B347] flex-shrink-0 mt-0.5" />
                <span>
                  <strong>DEMO NOTICE:</strong> No live payment is charged. This demonstrates the order reservation flow for MANA TRENDZ MACHA, Kukatpally.
                </span>
              </div>
            </div>

            {/* Order Items Snapshot */}
            <div className="p-4 bg-[#171815] border border-[#2d2f26] text-xs font-mono space-y-2">
              <div className="flex justify-between font-bold text-[#F4F1E8] pb-1 border-b border-[#2d2f26]">
                <span>TOTAL ITEMS: {cart.reduce((a, b) => a + b.quantity, 0)}</span>
                <span className="text-[#D2B347]">ESTIMATED PAY: ₹{cartTotal}</span>
              </div>
              {cartSavings > 0 && (
                <div className="text-[#D2B347] flex justify-between">
                  <span>Combo Offer Discount</span>
                  <span>-₹{cartSavings}</span>
                </div>
              )}
            </div>

            {/* Simulated Checkout Form */}
            <form onSubmit={handleSubmitOrder} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase text-[#B7B5AC] mb-1">
                  CUSTOMER NAME
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#171815] border border-[#3b3d33] px-3.5 py-2.5 text-xs font-sans text-[#F4F1E8] focus:border-[#D2B347] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-[#B7B5AC] mb-1">
                  PHONE / WHATSAPP NUMBER
                </label>
                <input
                  type="text"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#171815] border border-[#3b3d33] px-3.5 py-2.5 text-xs font-mono text-[#F4F1E8] focus:border-[#D2B347] focus:outline-none"
                />
              </div>

              {/* Pickup Mode */}
              <div>
                <label className="block text-xs font-mono uppercase text-[#B7B5AC] mb-1.5">
                  FULFILLMENT PREFERENCE
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPickupType('store')}
                    className={`p-3 text-xs font-mono border text-left transition-all ${
                      pickupType === 'store'
                        ? 'border-[#D2B347] bg-[#252620] text-[#D2B347]'
                        : 'border-[#3b3d33] bg-[#171815] text-[#B7B5AC]'
                    }`}
                  >
                    <span className="font-bold block text-[#F4F1E8]">STORE PICKUP</span>
                    <span className="text-[10px]">Collect at Kukatpally (Free)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPickupType('delivery')}
                    className={`p-3 text-xs font-mono border text-left transition-all ${
                      pickupType === 'delivery'
                        ? 'border-[#D2B347] bg-[#252620] text-[#D2B347]'
                        : 'border-[#3b3d33] bg-[#171815] text-[#B7B5AC]'
                    }`}
                  >
                    <span className="font-bold block text-[#F4F1E8]">LOCAL DELIVERY</span>
                    <span className="text-[10px]">Hyderabad Metro Area</span>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#D2B347] hover:bg-[#E5D48A] text-[#171815] font-display uppercase tracking-[0.18em] font-bold text-sm transition-all shadow-xl flex items-center justify-center space-x-2 mt-4"
              >
                <span>CONFIRM DEMO RESERVATION</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        ) : (
          <div className="p-8 sm:p-10 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#D2B347]/20 border-2 border-[#D2B347] text-[#D2B347] flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#D2B347] block mb-1">
                DEMO RESERVATION CONFIRMED!
              </span>
              <h3 className="font-display text-3xl uppercase tracking-tight text-[#F4F1E8]">
                YOUR FIT IS HELD.
              </h3>
              <p className="text-xs text-[#B7B5AC] font-mono mt-2">
                RESERVATION ID: <strong className="text-[#F4F1E8]">{orderId}</strong>
              </p>
            </div>

            <div className="p-4 bg-[#171815] border border-[#2d2f26] text-xs font-mono text-left space-y-2 text-[#B7B5AC]">
              <p className="flex items-center text-[#F4F1E8]">
                <MapPin className="w-4 h-4 text-[#D2B347] mr-2" />
                Pick up at: <strong>MANA TRENDZ MACHA, Kukatpally, Hyderabad</strong>
              </p>
              <p className="flex items-center text-[#F4F1E8]">
                <Phone className="w-4 h-4 text-[#D2B347] mr-2" />
                Helpline: <strong>+91 98765 43210</strong>
              </p>
              <p className="text-[11px] text-[#7e8075] pt-1 border-t border-[#252620]">
                Show your Reservation ID at the store checkout counter to try on and collect your combo package.
              </p>
            </div>

            <button
              type="button"
              onClick={handleFinish}
              className="w-full py-3.5 bg-[#D2B347] text-[#171815] font-display uppercase tracking-widest font-bold text-xs hover:bg-[#E5D48A] transition-colors"
            >
              CONTINUE BROWSING CATALOG
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
