import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ShoppingCart,
  Star,
  Plus,
  Minus,
  Info,
  Leaf,
  Drumstick,
} from "lucide-react";

const ProductModal = ({ product, isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product?.size || "Standard");

  if (!isOpen || !product) return null;

  const isVeg =
    !product.name.toLowerCase().includes("chicken") &&
    !product.name.toLowerCase().includes("egg");

  const handleQuantityChange = (type) => {
    if (type === "increase") {
      setQuantity((prev) => prev + 1);
    } else {
      setQuantity((prev) => Math.max(1, prev - 1));
    }
  };

  const totalPrice = product.price * quantity;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-white rounded-[2.5rem] shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden relative border border-white/20"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-20 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-orange-50 transition-all text-neutral-800 hover:text-orange-600 border border-neutral-100"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="flex flex-col md:flex-row h-full">
            {/* Image Section */}
            <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Badges */}
              <div className="absolute top-6 left-6 flex gap-3">
                <div
                  className={`px-4 py-1.5 rounded-xl text-xs font-black uppercase tracking-widest border backdrop-blur-md shadow-lg ${
                    isVeg
                      ? "bg-green-500/90 text-white border-green-400"
                      : "bg-red-500/90 text-white border-red-400"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {isVeg ? (
                      <Leaf className="w-3.5 h-3.5" />
                    ) : (
                      <Drumstick className="w-3.5 h-3.5" />
                    )}
                    {isVeg ? "Veg" : "Non-Veg"}
                  </div>
                </div>
              </div>
            </div>

            {/* Details Section */}
            <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto space-y-8 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-orange-600">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-black tracking-widest uppercase">
                      {product.rating} Rating
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black italic text-neutral-800 tracking-tighter leading-tight">
                    {product.name}
                  </h2>
                </div>

                <div className="flex items-start gap-3 p-4 bg-neutral-50 rounded-2xl border border-neutral-100">
                  <Info className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <p className="text-neutral-600 text-sm font-medium leading-relaxed italic">
                    {product.description ||
                      "Indulge in our masterfully crafted treats, made fresh with premium ingredients for the ultimate taste fantasy."}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">
                      Total Price
                    </span>
                    <div className="text-3xl font-black text-neutral-900 tracking-tighter">
                      ₹{totalPrice}
                    </div>
                  </div>
                  <div className="space-y-1 text-right">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">
                      Quantity
                    </span>
                    <div className="flex items-center justify-end gap-4">
                      <button
                        onClick={() => handleQuantityChange("decrease")}
                        className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-100 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="text-xl font-black w-6 text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange("increase")}
                        className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center hover:bg-neutral-800 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-neutral-100">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-5 rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-orange-100 transition-all font-black uppercase tracking-widest text-sm"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart Fantasy
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProductModal;
