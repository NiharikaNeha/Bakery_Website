import React, { useState } from "react";
import GallerySection from "../components/GallerySection";
import ScrollToTop from "../components/ScrollToTop";
import { motion } from "framer-motion";

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <header className="pt-32 pb-12 text-center px-4">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#B86B3E] font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 block"
        >
          Visual Journey
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-serif text-[#1A2E1A] mb-8 font-bold"
        >
          Our Gallery
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-neutral-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-medium"
        >
          Explore a curated collection of our finest moments, signature
          creations, and the premium experiences we've crafted for our clients.
        </motion.p>
      </header>

      <main className="pb-24">
        <GallerySection />
      </main>

      <ScrollToTop />
    </div>
  );
};

export default GalleryPage;
