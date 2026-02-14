import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryItems } from "../data/images";

const GallerySection = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 space-y-3">
        <AnimatePresence mode="popLayout">
          {galleryItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="group relative break-inside-avoid overflow-hidden rounded-[2.5rem] cursor-pointer bg-neutral-100 shadow-sm hover:shadow-xl transition-all duration-500 border border-neutral-200 mb-3"
            >
              {/* Glassmorphism Image Wrapper - Softened */}
              <div className="relative p-3 overflow-hidden rounded-[2.5rem]">
                <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none rounded-[2.5rem]" />

                {/* Main Image - Natural Aspect Ratio with Floating Animation */}
                <motion.img
                  src={item.src}
                  alt={item.alt || "Bakery Creation"}
                  animate={{
                    y: [0, -12, 0],
                  }}
                  transition={{
                    duration: 4 + (item.id % 4),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: (item.id % 3) * 0.7,
                  }}
                  className="w-full h-auto object-cover rounded-[2rem] transition-transform duration-700 group-hover:scale-110 drop-shadow-lg relative z-10"
                />
              </div>

              {/* Advanced Glass Shine effect */}
              <div className="absolute inset-0 z-30 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none bg-gradient-to-tr from-white/0 via-white/40 to-white/0 -translate-x-full group-hover:translate-x-full transform duration-1500 skew-x-12" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GallerySection;
