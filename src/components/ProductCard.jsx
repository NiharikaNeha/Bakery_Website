import React from "react";
import { motion } from "framer-motion";
import { Star, ShoppingCart, Heart } from "lucide-react";

const ProductCard = ({ product, index }) => {
  const isVeg =
    !product.name.toLowerCase().includes("chicken") &&
    !product.name.toLowerCase().includes("egg");

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-neutral-100 relative group transition-all duration-300 hover:shadow-xl hover:border-orange-100"
    >
      {/* Image Section with Overlay */}
      <div className="relative h-44 sm:h-52 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2 z-10">
          <div
            className={`px-2 py-0.5 rounded-lg text-[10px] font-bold uppercase border shadow-sm ${
              isVeg
                ? "bg-green-50/90 backdrop-blur-sm text-green-600 border-green-200"
                : "bg-red-50/90 backdrop-blur-sm text-red-600 border-red-200"
            }`}
          >
            {isVeg ? "Veg" : "Non-Veg"}
          </div>
        </div>

        <div className="absolute top-3 right-3 z-10">
          <div className="bg-orange-50/90 backdrop-blur-sm text-orange-600 px-2 py-0.5 rounded-lg text-[10px] font-bold uppercase border border-orange-200 shadow-sm">
            Sizes
          </div>
        </div>

        {/* Name Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 z-10">
          <h3 className="text-white font-bold text-lg leading-tight drop-shadow-md lg:text-xl">
            {product.name}
          </h3>
        </div>
      </div>

      {/* Info Section */}
      <div className="p-4 space-y-3">
        <div className="flex justify-between items-center text-sm">
          <span className="text-neutral-400 capitalize font-medium text-xs">
            {product.category}
          </span>
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
            <span className="text-neutral-600 font-bold text-xs">
              {product.rating}
            </span>
          </div>
        </div>

        <div className="flex justify-between items-end">
          <div className="flex flex-col">
            <span className="text-xl font-extrabold text-neutral-900">
              ₹{product.price}
            </span>
            <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">
              Select size
            </span>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-lg shadow-orange-100 transition-all border border-orange-500/20"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            <span className="font-bold text-sm">Add</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
