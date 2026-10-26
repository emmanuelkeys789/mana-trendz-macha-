'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Search, Heart, ShoppingBag, Menu, X, MapPin, Sparkles } from 'lucide-react';
import { useShop } from '@/context/ShopContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const {
    openCart,
    openWishlist,
    openSearch,
    cartCount,
    wishlist,
    setCategory,
    setVibe,
    resetFilters
  } = useShop();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['shop', 'vibes', 'new-drops', 'shoes', 'store'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'SHOP', href: '#shop', action: () => resetFilters() },
    { name: 'VIBES', href: '#vibes' },
    { name: 'NEW DROPS', href: '#new-drops', action: () => resetFilters() },
    { name: 'SHOES', href: '#shoes', action: () => setCategory('Shoes') },
    { name: 'OUR STORE', href: '#store' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, action?: () => void) => {
    e.preventDefault();
    if (action) action();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#171815]/95 backdrop-blur-md border-b border-[#252620] py-3 shadow-2xl'
            : 'bg-gradient-to-b from-[#171815]/90 via-[#171815]/40 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Official Logo */}
            <div className="flex items-center">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group flex items-center space-x-3 transition-transform hover:scale-[1.02]"
              >
                <div className="relative h-11 w-36 sm:h-12 sm:w-44 overflow-hidden rounded bg-transparent">
                  <Image
                    src="/images/mtm-logo.jpg"
                    alt="MANA TRENDZ MACHA Logo"
                    fill
                    priority
                    className="object-contain"
                    sizes="(max-width: 768px) 144px, 176px"
                  />
                </div>
              </a>
            </div>

            {/* Center: Navigation Links */}
            <nav className="hidden md:flex items-center space-x-7 lg:space-x-9">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href, link.action)}
                    className={`relative py-1 text-xs tracking-[0.2em] font-medium transition-colors duration-200 uppercase ${
                      isActive
                        ? 'text-[#D2B347]'
                        : 'text-[#F4F1E8]/85 hover:text-[#D2B347]'
                    }`}
                  >
                    <span>{link.name}</span>
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-[#D2B347] transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 hover:w-full'
                      }`}
                    />
                  </a>
                );
              })}
            </nav>

            {/* Right: Actions */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Search Button */}
              <button
                type="button"
                onClick={openSearch}
                aria-label="Search Collection"
                className="p-2 sm:p-2.5 rounded-full text-[#F4F1E8]/80 hover:text-[#D2B347] hover:bg-[#252620] transition-colors relative group"
              >
                <Search className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span className="hidden lg:inline-block ml-1.5 text-[10px] text-[#B7B5AC] font-mono border border-[#3b3d33] px-1.5 py-0.5 rounded">
                  ⌘K
                </span>
              </button>

              {/* Wishlist Button */}
              <button
                type="button"
                onClick={openWishlist}
                aria-label="Wishlist"
                className="p-2 sm:p-2.5 rounded-full text-[#F4F1E8]/80 hover:text-[#D2B347] hover:bg-[#252620] transition-colors relative group"
              >
                <Heart className="w-5 h-5 transition-transform group-hover:scale-110" />
                {wishlist.length > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#D2B347] text-[#171815] text-[10px] font-bold flex items-center justify-center animate-pulse">
                    {wishlist.length}
                  </span>
                )}
              </button>

              {/* Cart Button */}
              <button
                type="button"
                onClick={openCart}
                aria-label="Shopping Cart"
                className="p-2 sm:p-2.5 rounded-full text-[#F4F1E8] hover:text-[#171815] hover:bg-[#D2B347] transition-all relative group flex items-center gap-1.5"
              >
                <ShoppingBag className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span className="text-xs font-semibold px-1.5 py-0.5 rounded-full bg-[#D2B347] text-[#171815] group-hover:bg-[#171815] group-hover:text-[#D2B347] transition-colors">
                  {cartCount}
                </span>
              </button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Mobile Menu"
                className="md:hidden p-2 text-[#F4F1E8] hover:text-[#D2B347] focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-[#171815]/98 backdrop-blur-xl flex flex-col pt-24 px-6 pb-8 border-b border-[#252620]">
          <div className="flex flex-col space-y-6 flex-1">
            <div className="pb-4 border-b border-[#252620]">
              <span className="text-[11px] uppercase tracking-widest text-[#B7B5AC]">Navigation</span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.action)}
                className="text-2xl font-display uppercase tracking-wider text-[#F4F1E8] hover:text-[#D2B347] transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-[#D2B347] font-mono tracking-widest">→</span>
              </a>
            ))}

            <div className="pt-6 border-t border-[#252620] space-y-3">
              <div className="flex items-center text-xs text-[#B7B5AC] space-x-2">
                <MapPin className="w-4 h-4 text-[#D2B347]" />
                <span>Kukatpally, Hyderabad — Near Main Road</span>
              </div>
              <div className="flex items-center text-xs text-[#B7B5AC] space-x-2">
                <Sparkles className="w-4 h-4 text-[#D2B347]" />
                <span>Open Everyday: 10:30 AM – 10:00 PM</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#252620] flex gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openSearch();
              }}
              className="flex-1 py-3 px-4 rounded bg-[#252620] text-[#F4F1E8] text-xs font-semibold tracking-wider uppercase text-center hover:bg-[#D2B347] hover:text-[#171815] transition-colors"
            >
              Search Drops
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openCart();
              }}
              className="flex-1 py-3 px-4 rounded bg-[#D2B347] text-[#171815] text-xs font-semibold tracking-wider uppercase text-center hover:bg-[#E5D48A] transition-colors"
            >
              View Cart ({cartCount})
            </button>
          </div>
        </div>
      )}
    </>
  );
}
