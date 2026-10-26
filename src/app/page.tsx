import React from 'react';
import Navbar from '@/components/Navbar';
import OfferStrip from '@/components/OfferStrip';
import Hero from '@/components/Hero';
import ShopByVibe from '@/components/ShopByVibe';
import ProductGrid from '@/components/ProductGrid';
import SignatureOffers from '@/components/SignatureOffers';
import ShopTheLook from '@/components/ShopTheLook';
import BuildYourLook from '@/components/BuildYourLook';
import FootwearSection from '@/components/FootwearSection';
import StoreExperience from '@/components/StoreExperience';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import WishlistDrawer from '@/components/WishlistDrawer';
import ProductDetailModal from '@/components/ProductDetailModal';
import SearchModal from '@/components/SearchModal';
import CheckoutModal from '@/components/CheckoutModal';
import CustomCursor from '@/components/CustomCursor';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#171815] text-[#F4F1E8] relative selection:bg-[#D2B347] selection:text-[#171815]">
      {/* Interactive Cursor for Desktop */}
      <CustomCursor />

      {/* Main Sticky Navbar */}
      <Navbar />

      {/* Top Promotional Offer Ticker Strip */}
      <div className="pt-20">
        <OfferStrip />
      </div>

      {/* Cinematic Hero */}
      <Hero />

      {/* Editorial Shop By Vibe */}
      <ShopByVibe />

      {/* Signature Offers Combo Section: MORE STYLE. LESS SPEND. */}
      <SignatureOffers />

      {/* Ready To Wear Catalog / New Drops Grid */}
      <ProductGrid />

      {/* Interactive Campaign Showcase: THE LOOK. THE ATTITUDE. */}
      <ShopTheLook />

      {/* Interactive Outfit Builder: BUILD YOUR LOOK */}
      <BuildYourLook />

      {/* Dedicated Footwear Line: NEXT LEVEL COLLECTION */}
      <FootwearSection />

      {/* Physical Store Experience: YOUR NEXT FIT IS HERE */}
      <StoreExperience />

      {/* Brand Footer */}
      <Footer />

      {/* Global Modals & Drawers */}
      <CartDrawer />
      <WishlistDrawer />
      <ProductDetailModal />
      <SearchModal />
      <CheckoutModal />
    </main>
  );
}
