import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Star, ShoppingBag, Phone, Share2, Check } from "lucide-react";

// helper to determine veg state
const checkVeg = (name) =>
  !name.toLowerCase().includes("chicken") &&
  !name.toLowerCase().includes("egg");

const ProductModal = ({ product, isOpen, onClose }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!product) return null;

  const isVeg = checkVeg(product.name);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-neutral-900/40 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-50 p-2 bg-white/20 backdrop-blur-xl hover:bg-white/40 rounded-full transition-all text-white md:text-neutral-900 md:bg-neutral-100/80 md:hover:bg-neutral-200"
            >
              <X size={24} />
            </button>

            {/* Image Section */}
            <div className="md:w-1/2 relative h-[300px] md:h-auto">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

              {/* Badges on Image */}
              <div className="absolute top-6 left-6 flex gap-3">
                <span
                  className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg backdrop-blur-md border ${
                    isVeg
                      ? "bg-green-500/90 text-white border-green-400"
                      : "bg-red-500/90 text-white border-red-400"
                  }`}
                >
                  {isVeg ? "Veg" : "Non-Veg"}
                </span>
              </div>
            </div>

            {/* Details Section */}
            <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto bg-surface-muted/50">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">
                      {product.category}
                    </span>
                    <div className="flex items-center gap-1.5 bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">
                      <Star size={16} className="text-accent fill-accent" />
                      <span className="text-accent-dark font-black text-sm">
                        {product.rating}
                      </span>
                    </div>
                  </div>
                  <h2 className="text-4xl font-heading font-black text-text-primary leading-tight">
                    {product.name}
                  </h2>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-3xl font-black text-primary font-heading">
                    ₹{product.price}
                  </span>
                  <div className="h-6 w-px bg-border/50" />
                  <span className="text-text-muted text-sm font-body">
                    Available for immediate order
                  </span>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-text-primary uppercase tracking-wider flex items-center gap-2">
                    <ShoppingBag size={16} className="text-primary" />
                    Description
                  </h4>
                  <p className="text-text-secondary font-body leading-relaxed text-lg">
                    {product.description ||
                      "Indulge in our freshly baked masterpiece. Crafted with premium ingredients and traditional techniques to bring you the best flavors."}
                  </p>
                </div>

                {/* Features bits */}
                <div className="grid grid-cols-2 gap-4 py-4">
                  {[
                    "Freshly Baked",
                    "Premium Quality",
                    "No Preservatives",
                    "Artisanal Touch",
                  ].map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-text-muted text-xs font-semibold"
                    >
                      <div className="w-5 h-5 bg-success/20 rounded-full flex items-center justify-center">
                        <Check size={12} className="text-success" />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="pt-6 flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() =>
                      window.open(
                        `https://wa.me/918018306265?text=Hi, I would like to order ${product.name}`,
                        "_blank",
                      )
                    }
                    className="flex-grow bg-primary text-white py-4 px-8 rounded-2xl font-black shadow-strong hover:shadow-xl transition-all flex items-center justify-center gap-3 tracking-wide"
                  >
                    <ShoppingBag size={20} />
                    ORDER ON WHATSAPP
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.open("tel:+918018306265", "_self")}
                    className="p-4 bg-secondary text-primary rounded-2xl border-2 border-primary/10 hover:border-primary/30 transition-all"
                  >
                    <Phone size={20} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: product.name,
                          text: `Check out this ${product.name} from Maa Bakery!`,
                          url: window.location.href,
                        });
                      }
                    }}
                    className="p-4 bg-secondary text-primary rounded-2xl border-2 border-primary/10 hover:border-primary/30 transition-all"
                  >
                    <Share2 size={20} />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
