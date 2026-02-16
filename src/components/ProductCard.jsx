import React from "react";
import { motion } from "framer-motion";
import { Star, Heart } from "lucide-react";

// helper to determine veg state
const checkVeg = (name) =>
  !name.toLowerCase().includes("chicken") &&
  !name.toLowerCase().includes("egg");

const ProductCard = React.memo(({ product, index }) => {
  const isVeg = React.useMemo(() => checkVeg(product.name), [product.name]);

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
          </div>
        </div>
      </div>
    </motion.div>
  );
});

export default ProductCard; 
